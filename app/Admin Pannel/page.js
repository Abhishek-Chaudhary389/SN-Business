"use client";

import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashbord from "./AdminDashbord";

export default function AdminPannelPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const session = localStorage.getItem("sn_admin_session");
            if (session) {
                try {
                    const parsed = JSON.parse(session);
                    if (parsed && parsed.email) {
                        setIsAuthenticated(true);
                    }
                } catch (e) {
                    localStorage.removeItem("sn_admin_session");
                }
            }
            setIsLoading(false);
        }
    }, []);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("sn_admin_session");
        }
        setIsAuthenticated(false);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLoginSuccess} />;
    }

    return <AdminDashbord onLogout={handleLogout} />;
}
