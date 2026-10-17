"use client";

import React, { useState } from "react";

function MailIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

function LockIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="5" y="11" width="14" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4" />
        </svg>
    );
}

function AlertTriangleIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    );
}

function BoltIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );
}

function KeyIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
    );
}

export default function AdminLogin({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        setTimeout(() => {
            // Default demo credentials: admin@snbusiness.com / admin123
            if (
                (email.trim().toLowerCase() === "admin@snbusiness.com" || email.trim() === "admin") &&
                password === "admin123"
            ) {
                const adminSession = {
                    email: "admin@snbusiness.com",
                    name: "Super Admin",
                    role: "Master Administrator",
                    loginAt: new Date().toISOString(),
                };
                if (typeof window !== "undefined") {
                    localStorage.setItem("sn_admin_session", JSON.stringify(adminSession));
                }
                setIsLoading(false);
                if (onLogin) onLogin(adminSession);
            } else {
                setIsLoading(false);
                setError("गलत Email या Password! Demo credentials का उपयोग करें।");
            }
        }, 500);
    };

    const handleFillDemo = () => {
        setEmail("admin@snbusiness.com");
        setPassword("admin123");
        setError("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0c1a2c] via-[#11253e] to-[#1967d2] flex items-center justify-center p-4 selection:bg-blue-600 selection:text-white">
            <div className="w-full max-w-md">
                {/* Brand Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-white tracking-wider uppercase">
                            Admin Portal • Secured
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-3xl font-black text-white">
                        <span className="text-red-500">SN</span>
                        <span>business</span>
                        <span className="text-xs uppercase px-2 py-0.5 rounded-md bg-red-500/20 text-red-300 border border-red-500/30 font-bold ml-1">
                            Panel
                        </span>
                    </div>
                    <p className="text-slate-300 text-xs mt-2 font-medium">
                        Category Management &amp; Central Control System
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-slate-100">
                    <div className="mb-6">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">
                            Admin Login
                        </h2>
                        <p className="text-slate-500 text-xs mt-1">
                            एडमिन पैनल में लॉगिन करके नई कैटेगरी और सब-कैटेगरी जोड़ें
                        </p>
                    </div>

                    {error && (
                        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                            <AlertTriangleIcon className="w-4 h-4 text-red-600 shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Admin Email / Username
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                                    <MailIcon className="w-4 h-4" />
                                </span>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@snbusiness.com"
                                    required
                                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 font-medium outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                                    <LockIcon className="w-4 h-4" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 font-medium outline-none transition-all placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1">
                            <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium select-none">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span>Remember session</span>
                            </label>
                            <button
                                type="button"
                                onClick={handleFillDemo}
                                className="text-blue-600 hover:text-blue-700 font-bold underline cursor-pointer flex items-center gap-1"
                            >
                                <BoltIcon className="w-3.5 h-3.5" />
                                <span>Fill Demo Login</span>
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-2 bg-gradient-to-r from-[#1967d2] to-[#1557b0] hover:from-[#1557b0] hover:to-[#0e3877] text-white font-bold py-3 rounded-xl text-xs shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                        >
                            {isLoading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    <span>Verifying Credentials...</span>
                                </>
                            ) : (
                                <>
                                    <span>Login to Admin Dashboard</span>
                                    <span className="text-sm">→</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Demo Credentials Box */}
                    <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50 p-3.5 rounded-2xl border text-xs">
                        <div className="flex items-center justify-between font-bold text-slate-700 mb-1">
                            <span className="flex items-center gap-1.5">
                                <KeyIcon className="w-3.5 h-3.5 text-amber-600" />
                                <span>Default Demo Credentials:</span>
                            </span>
                            <button
                                onClick={handleFillDemo}
                                className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-black px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer"
                            >
                                Auto-Fill
                            </button>
                        </div>
                        <div className="space-y-0.5 text-slate-600 font-mono text-[11px]">
                            <p>Email: <span className="text-slate-900 font-bold">admin@snbusiness.com</span></p>
                            <p>Pass: <span className="text-slate-900 font-bold">admin123</span></p>
                        </div>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-6">
                    <a
                        href="/Home"
                        className="text-slate-300 hover:text-white text-xs font-bold inline-flex items-center gap-1 transition-colors"
                    >
                        <span>← Back to SN Business Home Page</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
