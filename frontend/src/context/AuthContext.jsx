// src/context/AuthContext.jsx
import jwtDecode from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        user: null,
        role: null,
    });

    const [verifyEmailInfo, setVerifyEmailInfo] = useState({
        email: null,
        otp: null,
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

    // Decode token and update verifyEmailInfo
    const handleEmailVerificationToken = (token) => {
        const decoded = jwtDecode(token);
        localStorage.setItem("emailverify", token);
        setVerifyEmailInfo({
            email: decoded.email,
            otp: decoded.otp,
        });
    };

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
        localStorage.removeItem("emailverify");
        setAuth({ token: null, user: null, role: null });
        setVerifyEmailInfo({ email: null, otp: null });
    };

    return (
        <AuthContext.Provider value={{
            auth,
            verifyEmailInfo,
            handleEmailVerificationToken,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
