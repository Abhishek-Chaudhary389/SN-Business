"use client";

import React, { useState, useEffect } from "react";

export default function UserDashboardPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("sn_user_session");
            if (saved) {
                try {
                    setUser(JSON.parse(saved));
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("sn_user_session");
            window.location.href = "/Home";
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-2xl mx-auto shadow-lg shadow-orange-500/25">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <h2 className="text-2xl font-black text-slate-900 mt-4">
                    {user?.name || "User Account"}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                    {user?.phone ? `+91 ${user.phone}` : "Logged In"}
                </p>

                <div className="mt-6 flex flex-col gap-2">
                    <a
                        href="/Home"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-all"
                    >
                        Go to Home
                    </a>
                    <button
                        onClick={handleLogout}
                        className="w-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 font-bold py-3 rounded-xl text-xs transition-all cursor-pointer"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
