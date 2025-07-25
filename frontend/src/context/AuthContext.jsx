// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import API from "../services/api";
import secureLocalStorage from "react-secure-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        try {
            const token = secureLocalStorage.getItem('login')
            setUser(token);
        } catch (err) {
            setUser(null);
        }
    };

    const logout = () => {
        localStorage.removeItem("token"); // or whatever token you're using
        setUser(null);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loadUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
