"use client";

import React, { useState, useEffect } from "react";
import UserLoginPage from "../User Login/page";
import UserDashboardPage from "../User Dashboard/page";

export default function UserRoutePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const session = localStorage.getItem("sn_user_session");
            setIsLoggedIn(!!session);
            setChecking(false);
        }
    }, []);

    if (checking) {
        return (
            <div className="min-h-screen bg-[#fcfdff] flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return isLoggedIn ? <UserDashboardPage /> : <UserLoginPage />;
}
