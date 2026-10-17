"use client";

import React, { useState, useEffect, useRef } from "react";

// --- Vector Icons ---
function CompassIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
        </svg>
    );
}

function MegaphoneIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
    );
}

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
}

function ShieldCheckIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

function SparklesIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.82 20L12 16.9L7.18 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
        </svg>
    );
}

export default function UserLoginPage() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState("form"); // "form" | "otp"
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    // Resend countdown
    useEffect(() => {
        let timer;
        if (step === "otp" && resendTimer > 0) {
            timer = setTimeout(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
        } else if (resendTimer === 0) {
            setCanResend(true);
        }
        return () => clearTimeout(timer);
    }, [step, resendTimer]);

    const handleSendOtp = (e) => {
        e.preventDefault();
        setError("");

        const cleanPhone = phone.trim().replace(/\D/g, "");
        if (!cleanPhone || cleanPhone.length < 10) {
            setError("कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep("otp");
            setResendTimer(30);
            setCanResend(false);
            setOtp(["", "", "", ""]);
            setTimeout(() => {
                if (otpInputRefs[0].current) {
                    otpInputRefs[0].current.focus();
                }
            }, 100);
        }, 500);
    };

    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Auto move to next input
        if (value && index < 3) {
            otpInputRefs[index + 1].current?.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpInputRefs[index - 1].current?.focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        setError("");

        const fullOtp = otp.join("");
        if (fullOtp.length < 4) {
            setError("कृपया 4 अंकों का OTP कोड दर्ज करें");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const user = {
                name: fullName.trim() || `User ${phone.slice(-4)}`,
                phone: phone.trim(),
                loggedInAt: new Date().toISOString(),
            };

            if (typeof window !== "undefined") {
                localStorage.setItem("sn_user_session", JSON.stringify(user));
            }

            window.location.href = "/Home";
        }, 600);
    };

    const handleResend = () => {
        if (!canResend) return;
        setResendTimer(30);
        setCanResend(false);
        setOtp(["", "", "", ""]);
        setError("");
        otpInputRefs[0].current?.focus();
    };

    return (
        <div className="min-h-screen bg-[#fcfdff] text-slate-800 font-sans flex flex-col selection:bg-[#ff5a00] selection:text-white relative overflow-hidden">
            {/* Ambient Background Glow Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-100/30 via-blue-50/20 to-transparent pointer-events-none -z-10 blur-3xl"></div>
            <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-orange-200/20 blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none -z-10"></div>

            {/* Header: Exact Clean Brand Navbar */}
            <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 h-16 sticky top-0 z-30 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                    {/* Logo: SNbusiness */}
                    <a href="/Home" className="flex items-center gap-1.5 group transition-transform active:scale-95">
                        <div className="text-xl sm:text-2xl font-black tracking-tight">
                            <span className="text-red-600">SN</span>
                            <span className="text-[#0c1a2c]">business</span>
                        </div>
                        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-[#ff5a00] px-2 py-0.5 rounded-full border border-orange-200/60 ml-1">
                            Direct Login
                        </span>
                    </a>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href="/Home"
                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-50/80 font-semibold text-xs transition-all shadow-xs"
                        >
                            <CompassIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span>Browse</span>
                        </a>

                        <a
                            href="/Home"
                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-50/80 font-semibold text-xs transition-all shadow-xs"
                        >
                            <MegaphoneIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span>Advertise</span>
                        </a>

                        <a
                            href="/Home"
                            className="w-8 h-8 rounded-full border border-slate-300 hover:border-orange-500 hover:text-[#ff5a00] flex items-center justify-center text-slate-600 transition-all cursor-pointer bg-slate-50/80 hover:bg-white shadow-xs"
                            title="Back to Home"
                        >
                            <UserIcon className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center py-10 sm:py-16 px-4 sm:px-6 w-full z-10">
                <div className="w-full max-w-[460px]">
                    {/* Premium Card Container */}
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative transition-all duration-300">
                        {/* Top Micro-Badge */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#ff5a00] text-[11px] font-bold border border-orange-200/70 tracking-wide shadow-xs">
                                <SparklesIcon className="w-3 h-3 text-[#ff5a00]" />
                                Instant OTP Login
                            </span>
                            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                                <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-500" />
                                100% Secure
                            </span>
                        </div>

                        {step === "form" ? (
                            <div>
                                {/* Heading */}
                                <h1 className="text-2xl sm:text-[28px] font-black text-slate-900 tracking-tight text-left">
                                    Welcome
                                </h1>

                                {/* Subtitle - Clean without 'no password needed' */}
                                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed text-left">
                                    Log in or create an account with your phone number
                                </p>

                                {error && (
                                    <div className="mt-4 p-3 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold text-left flex items-center gap-2 animate-in fade-in">
                                        <span className="text-sm">⚠️</span>
                                        <span>{error}</span>
                                    </div>
                                )}

                                {/* Modern Login Form */}
                                <form onSubmit={handleSendOtp} className="mt-6 space-y-4">
                                    {/* Field 1: Full Name */}
                                    <div className="text-left">
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            Full Name{" "}
                                            <span className="text-slate-400 font-normal text-[11px]">
                                                (new accounts only)
                                            </span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                                                <UserIcon className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="e.g. Rahul Sharma"
                                                className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#ff5a00] focus:ring-4 focus:ring-orange-500/10 outline-none text-sm text-slate-900 font-medium transition-all bg-slate-50/60 focus:bg-white placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Field 2: Phone */}
                                    <div className="text-left">
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            Phone Number <span className="text-rose-500">*</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            {/* Country Code Pill */}
                                            <div className="absolute left-1.5 top-1.5 bottom-1.5 bg-slate-100/90 text-slate-700 border border-slate-200 rounded-lg px-2.5 flex items-center gap-1.5 text-xs font-bold shrink-0">
                                                <span>🇮🇳</span>
                                                <span>+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value);
                                                    if (error) setError("");
                                                }}
                                                maxLength={10}
                                                placeholder="98765 43210"
                                                required
                                                className="w-full pl-[82px] pr-10 py-3 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#ff5a00] focus:ring-4 focus:ring-orange-500/10 outline-none text-sm text-slate-900 font-bold tracking-wider transition-all bg-slate-50/60 focus:bg-white placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-400"
                                            />
                                            <div className="absolute right-3.5 text-slate-400 pointer-events-none">
                                                <PhoneIcon className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-400 mt-1 pl-1">
                                            Enter 10-digit mobile number for instant OTP verification
                                        </p>
                                    </div>

                                    {/* Radiant Send OTP Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full relative group overflow-hidden bg-gradient-to-r from-[#ff5a00] via-[#ff6912] to-[#ff4800] hover:from-[#e85200] hover:to-[#e03f00] active:scale-[0.99] text-white font-extrabold py-3.5 px-5 rounded-xl text-sm sm:text-base shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    <span>Sending OTP...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Send OTP</span>
                                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            /* Step 2: Interactive 4-Box OTP Verification */
                            <div className="text-left animate-in fade-in zoom-in-95 duration-200">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setStep("form");
                                        setError("");
                                    }}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#ff5a00] mb-3 transition-colors cursor-pointer group"
                                >
                                    <ArrowLeftIcon className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                                    <span>Change Mobile Number</span>
                                </button>

                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                                    Verify OTP
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                                    We sent a 4-digit verification code to{" "}
                                    <span className="font-bold text-slate-900 bg-orange-50 px-1.5 py-0.5 rounded text-xs">
                                        +91 {phone}
                                    </span>
                                </p>

                                {error && (
                                    <div className="mt-3.5 p-3 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold flex items-center gap-2">
                                        <span>⚠️</span>
                                        <span>{error}</span>
                                    </div>
                                )}

                                <form onSubmit={handleVerifyOtp} className="mt-6 space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2.5 text-center">
                                            Enter 4-Digit Verification Code
                                        </label>

                                        {/* 4 Individual Digit Input Boxes */}
                                        <div className="flex justify-center items-center gap-3 sm:gap-3.5">
                                            {otp.map((digit, idx) => (
                                                <input
                                                    key={idx}
                                                    ref={otpInputRefs[idx]}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                                    className="w-13 h-14 sm:w-14 sm:h-15 text-center text-xl sm:text-2xl font-black text-slate-900 bg-slate-50/70 border-2 border-slate-200 rounded-2xl focus:border-[#ff5a00] focus:bg-white focus:ring-4 focus:ring-orange-500/15 outline-none transition-all shadow-xs"
                                                />
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between mt-3 px-1 text-xs">
                                            <span className="text-slate-400 text-[11px]">
                                                Demo OTP: <strong className="text-slate-600 font-bold">1234</strong>
                                            </span>

                                            {canResend ? (
                                                <button
                                                    type="button"
                                                    onClick={handleResend}
                                                    className="font-bold text-[#ff5a00] hover:text-[#d94800] hover:underline cursor-pointer transition-colors"
                                                >
                                                    Resend Code
                                                </button>
                                            ) : (
                                                <span className="text-slate-400 font-medium">
                                                    Resend in{" "}
                                                    <strong className="text-slate-700 font-bold">
                                                        {resendTimer}s
                                                    </strong>
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Verify Button */}
                                    <div className="pt-1">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-[#ff5a00] via-[#ff6912] to-[#ff4800] hover:from-[#e85200] hover:to-[#e03f00] active:scale-[0.99] text-white font-extrabold py-3.5 px-5 rounded-xl text-sm sm:text-base shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    <span>Verifying Code...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <ShieldCheckIcon className="w-4 h-4 text-white" />
                                                    <span>Verify & Access Account</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Bottom Feature Micro-Strip */}
                        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-center gap-4 sm:gap-6 text-[11px] text-slate-400 font-medium">
                            <span className="flex items-center gap-1">
                                <span className="text-[#ff5a00] font-bold">⚡</span> Instant Access
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-emerald-500 font-bold">✓</span> Verified Businesses
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-blue-500 font-bold">🔒</span> Encrypted
                            </span>
                        </div>
                    </div>

                    {/* Footer note */}
                    <p className="text-[11px] text-slate-400 text-center mt-6">
                        By continuing, you agree to SN Business{" "}
                        <a href="/Home" className="text-slate-600 hover:text-[#ff5a00] underline">
                            Terms of Service
                        </a>{" "}
                        &{" "}
                        <a href="/Home" className="text-slate-600 hover:text-[#ff5a00] underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </main>
        </div>
    );
}
