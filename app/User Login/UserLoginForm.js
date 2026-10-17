"use client";

import React, { useState } from "react";

function UserIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
}

function PhoneIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="6" y="2" width="12" height="20" rx="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
    );
}

function LockIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="5" y="11" width="14" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4" />
        </svg>
    );
}

function ArrowLeftIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    );
}

function CheckCircleIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

export default function UserLoginForm({ onLoginSuccess, onCancel }) {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState("form"); // "form" | "otp" | "success"
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSendOtp = (e) => {
        e.preventDefault();
        setError("");

        const cleanPhone = phone.trim().replace(/\D/g, "");
        if (cleanPhone.length !== 10) {
            setError("कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें (10-digit phone number)");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep("otp");
        }, 500);
    };

    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        setError("");

        const otpCode = otp.join("");
        if (otpCode.length < 4) {
            setError("कृपया 4 अंकों का OTP कोड दर्ज करें");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const userData = {
                name: fullName.trim() || `User ${phone.slice(-4)}`,
                phone: phone.trim(),
                loggedInAt: new Date().toISOString(),
            };

            if (typeof window !== "undefined") {
                localStorage.setItem("sn_user_session", JSON.stringify(userData));
            }

            setStep("success");
            setTimeout(() => {
                if (onLoginSuccess) onLoginSuccess(userData);
            }, 800);
        }, 600);
    };

    return (
        <div className="w-full text-slate-900 font-sans">
            {step === "form" && (
                <div className="animate-in fade-in duration-200">
                    {/* Header */}
                    <div className="text-left mb-6">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-[#ff5a00] border border-orange-200/60 text-[11px] font-bold mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse"></span>
                            <span>Quick Access</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                            Welcome
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                            Log in or create an account with your phone number
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                            <span className="text-sm">⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSendOtp} className="space-y-4">
                        {/* 1. Full Name */}
                        <div className="text-left">
                            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                Full Name <span className="text-slate-400 font-normal">(new accounts only)</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <UserIcon className="w-4 h-4" />
                                </div>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#ff5a00] focus:ring-4 focus:ring-orange-500/10 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all bg-white"
                                />
                            </div>
                        </div>

                        {/* 2. Phone Number */}
                        <div className="text-left">
                            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                Phone
                            </label>
                            <div className="relative flex rounded-xl border border-slate-200 hover:border-slate-300 focus-within:border-[#ff5a00] focus-within:ring-4 focus-within:ring-orange-500/10 transition-all bg-white overflow-hidden">
                                <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200 text-slate-600 text-xs font-bold shrink-0">
                                    <span className="text-sm">🇮🇳</span>
                                    <span>+91</span>
                                </div>
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    value={phone}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                                        setPhone(val);
                                        if (error) setError("");
                                    }}
                                    placeholder="Enter 10-digit number"
                                    required
                                    className="w-full px-3.5 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* 3. Send OTP Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#ff5a00] hover:bg-[#e04f00] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending OTP...</span>
                                    </>
                                ) : (
                                    <span>Send OTP</span>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Trust footer */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                        <LockIcon className="w-3 h-3 text-emerald-500" />
                        <span>100% Secure • Instant Phone Verification</span>
                    </div>
                </div>
            )}

            {step === "otp" && (
                <div className="animate-in fade-in duration-200 text-left">
                    <button
                        type="button"
                        onClick={() => {
                            setStep("form");
                            setError("");
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 mb-4 transition-colors cursor-pointer"
                    >
                        <ArrowLeftIcon className="w-3.5 h-3.5" />
                        <span>Change Number</span>
                    </button>

                    <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                            Verify OTP Code
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Enter the 4-digit verification code sent to{" "}
                            <span className="font-bold text-slate-900">+91 {phone}</span>
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                            <span>⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleVerifyOtp} className="space-y-5">
                        {/* 4 Digit Boxes */}
                        <div>
                            <div className="flex items-center justify-center gap-3">
                                {[0, 1, 2, 3].map((idx) => (
                                    <input
                                        key={idx}
                                        id={`otp-input-${idx}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={otp[idx]}
                                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                        className="w-13 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-black rounded-2xl border-2 border-slate-200 focus:border-[#ff5a00] focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-slate-50/50"
                                    />
                                ))}
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 text-center">
                                Demo OTP: You can enter any 4 numbers (e.g. <strong>1 2 3 4</strong>)
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#ff5a00] hover:bg-[#e04f00] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Verifying...</span>
                                </>
                            ) : (
                                <span>Verify &amp; Continue</span>
                            )}
                        </button>

                        <div className="text-center pt-1">
                            <button
                                type="button"
                                onClick={() => {
                                    setOtp(["1", "2", "3", "4"]);
                                    setError("");
                                }}
                                className="text-xs font-bold text-[#ff5a00] hover:underline cursor-pointer"
                            >
                                Auto-Fill Demo OTP (1234)
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {step === "success" && (
                <div className="py-6 text-center animate-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                        <CheckCircleIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900">
                        Login Successful!
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                        Welcome back, <span className="font-bold text-slate-800">{fullName || `User ${phone.slice(-4)}`}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
