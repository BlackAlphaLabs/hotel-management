import jwtDecode from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        user: null,
        role: null,
    });

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const decoded = jwtDecode(storedToken);
            setAuth({
                token: storedToken,
                user: { id: decoded.id, email: decoded.email },
                role: decoded.role,
            });
        }
    }, []);

    const login = (token) => {
        const decoded = jwtDecode(token);
        localStorage.setItem("token", token);
        setAuth({
            token,
            user: { id: decoded.id, email: decoded.email },
            role: decoded.role,
        });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuth({ token: null, user: null, role: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
