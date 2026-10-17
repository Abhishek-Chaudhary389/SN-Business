"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/page";
import UserLoginForm from "../User Login/UserLoginForm";

// --- Vector Icons ---
function CompassIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
        </svg>
    );
}

function MegaphoneIcon({ className = "w-4 h-4" }) {
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

function SearchIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    );
}

function ArrowRightIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    );
}

function DownloadIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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

function MapPinMiniIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function LightningBoltIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );
}

function DevicePhoneIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth={2} />
            <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </svg>
    );
}

function AcademicCapIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
    );
}

function BriefcaseIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v2" />
        </svg>
    );
}

function WrenchIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
    );
}

function SpeakerphoneIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
    );
}

function StorefrontIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4l-2 5v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7L3 7V3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M9 20v-6h6v6" />
        </svg>
    );
}

function FolderIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
    );
}

function LockClosedIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="5" y="11" width="14" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4" />
        </svg>
    );
}

function MobilePhoneIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="6" y="2" width="12" height="20" rx="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
    );
}

function PinLocationIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4.5-6-8.5-6-12a6 6 0 1112 0c0 3.5-2 7.5-6 12z" />
            <circle cx="12" cy="9" r="2.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth={1} />
        </svg>
    );
}

function StarFilledIcon({ className = "w-3 h-3 text-amber-500" }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function SignalIcon({ className = "w-2.5 h-2" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="16" width="3" height="6" rx="0.5" />
            <rect x="7" y="12" width="3" height="10" rx="0.5" />
            <rect x="12" y="8" width="3" height="14" rx="0.5" />
            <rect x="17" y="4" width="3" height="18" rx="0.5" />
        </svg>
    );
}

function BatteryIcon({ className = "w-3 h-2" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1V8c0-1.1-.9-2-2-2zm-1 9H4V9h12v6z" />
            <rect x="6" y="10" width="7" height="4" rx="0.5" />
        </svg>
    );
}

function CloseXIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

// Compact 3D Art 1: School & College (Building, Graduation Cap & Book)
function SchoolCollegeIllustration() {
    return (
        <div className="w-22 h-22 sm:w-26 sm:h-26 relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full bg-amber-100/70 blur-xs"></div>
            <svg className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 drop-shadow-xs" viewBox="0 0 160 160" fill="none">
                <circle cx="85" cy="85" r="55" fill="#fef3c7" fillOpacity="0.7" />
                <ellipse cx="80" cy="136" rx="46" ry="7" fill="#cbd5e1" fillOpacity="0.5" />

                {/* School / College Building Body */}
                <rect x="42" y="82" width="76" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M38 82 L80 50 L122 82 Z" fill="#d97706" />
                {/* Columns */}
                <rect x="52" y="90" width="8" height="40" fill="#fef3c7" stroke="#b45309" strokeWidth="1" />
                <rect x="76" y="90" width="8" height="40" fill="#fef3c7" stroke="#b45309" strokeWidth="1" />
                <rect x="100" y="90" width="8" height="40" fill="#fef3c7" stroke="#b45309" strokeWidth="1" />
                {/* Entrance Arch */}
                <path d="M68 130 L68 112 C68 106 92 106 92 112 L92 130 Z" fill="#78350f" />
                {/* Clock in Gable */}
                <circle cx="80" cy="70" r="7" fill="#ffffff" stroke="#b45309" strokeWidth="1.5" />
                <line x1="80" y1="70" x2="80" y2="66" stroke="#b45309" strokeWidth="1" />
                <line x1="80" y1="70" x2="83" y2="70" stroke="#b45309" strokeWidth="1" />

                {/* 3D Floating Graduation Cap */}
                <polygon points="105,48 135,38 150,50 120,60" fill="#1e293b" />
                <polygon points="105,48 120,60 120,66 105,54" fill="#0f172a" />
                <path d="M120 60 C120 70 135 70 135 60" stroke="#1e293b" strokeWidth="4" fill="none" />
                {/* Tassel */}
                <line x1="128" y1="48" x2="142" y2="64" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="142" cy="65" r="2.5" fill="#f59e0b" />
            </svg>
        </div>
    );
}

// Compact 3D Art 2: B2B Deals (Pallet & Boxes)
function B2BIllustration() {
    return (
        <div className="w-22 h-22 sm:w-26 sm:h-26 relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-100/70 blur-xs"></div>
            <svg className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 drop-shadow-xs" viewBox="0 0 160 160" fill="none">
                <circle cx="85" cy="85" r="55" fill="#dbeafe" fillOpacity="0.7" />
                <ellipse cx="80" cy="136" rx="46" ry="7" fill="#cbd5e1" fillOpacity="0.5" />
                <path d="M30 126 L125 126 L135 132 L20 132 Z" fill="#92400e" />
                <path d="M35 88 L75 88 L75 126 L35 126 Z" fill="#d97706" />
                <path d="M75 88 L95 76 L95 114 L75 126 Z" fill="#b45309" />
                <path d="M35 88 L55 76 L95 76 L75 88 Z" fill="#f59e0b" />
                <path d="M78 82 L120 82 L120 126 L78 126 Z" fill="#b45309" />
                <path d="M120 82 L136 72 L136 116 L120 126 Z" fill="#78350f" />
                <path d="M78 82 L94 72 L136 72 L120 82 Z" fill="#d97706" />
                <path d="M52 56 L88 56 L88 84 L52 84 Z" fill="#f59e0b" />
                <path d="M88 56 L104 46 L104 74 L88 84 Z" fill="#d97706" />
                <path d="M52 56 L68 46 L104 46 L88 56 Z" fill="#fbbf24" />
            </svg>
        </div>
    );
}

// Compact 3D Art 3: Repairs & Services (Toolbox & Helmet)
function RepairsIllustration() {
    return (
        <div className="w-22 h-22 sm:w-26 sm:h-26 relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full bg-emerald-100/70 blur-xs"></div>
            <svg className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 drop-shadow-xs" viewBox="0 0 160 160" fill="none">
                <circle cx="85" cy="85" r="55" fill="#dcfce7" fillOpacity="0.7" />
                <ellipse cx="82" cy="135" rx="46" ry="6" fill="#cbd5e1" fillOpacity="0.5" />
                <rect x="42" y="80" width="76" height="46" rx="6" fill="#1e293b" />
                <rect x="42" y="92" width="76" height="24" fill="#eab308" />
                <rect x="74" y="90" width="12" height="10" rx="2" fill="#94a3b8" />
                <line x1="88" y1="84" x2="114" y2="52" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
                <circle cx="114" cy="52" r="5" stroke="#64748b" strokeWidth="3" fill="none" />
                <line x1="68" y1="82" x2="52" y2="58" stroke="#ef4444" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M72 128 C72 108 90 98 108 98 C126 98 142 108 142 128 Z" fill="#eab308" />
                <ellipse cx="107" cy="128" rx="36" ry="7" fill="#ca8a04" />
                <path d="M76 126 C76 112 90 102 107 102 C124 102 138 112 138 126 Z" fill="#facc15" />
            </svg>
        </div>
    );
}

// Compact 3D Art 4: Advertising Services (3D Megaphone & Soundwaves)
function AdvertisingIllustration() {
    return (
        <div className="w-22 h-22 sm:w-26 sm:h-26 relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full bg-purple-100/70 blur-xs"></div>
            <svg className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 drop-shadow-xs" viewBox="0 0 160 160" fill="none">
                <circle cx="85" cy="85" r="55" fill="#f3e8ff" fillOpacity="0.7" />
                <ellipse cx="80" cy="136" rx="46" ry="6" fill="#cbd5e1" fillOpacity="0.5" />

                {/* Megaphone Handle */}
                <path d="M68 96 L60 128 L74 128 L80 96 Z" fill="#7c3aed" />
                {/* Megaphone Body */}
                <path d="M64 74 L114 52 L114 116 L64 94 Z" fill="#a855f7" />
                <ellipse cx="64" cy="84" rx="10" ry="14" fill="#9333ea" />
                <ellipse cx="114" cy="84" rx="14" ry="32" fill="#c084fc" />
                <ellipse cx="114" cy="84" rx="9" ry="24" fill="#6b21a8" />

                {/* Megaphone Accents / Yellow stripes */}
                <path d="M84 66 L94 62 L94 106 L84 102 Z" fill="#fbbf24" />

                {/* Sound Waves / Broadcast signals */}
                <path d="M132 70 C138 76 138 92 132 98" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M142 62 C152 72 152 96 142 106" stroke="#9333ea" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Star Sparkle */}
                <polygon points="46,50 49,58 57,61 49,64 46,72 43,64 35,61 43,58" fill="#fbbf24" />
            </svg>
        </div>
    );
}

// Category Icon component for screenshot-exact app icons
export function CategoryIcon({ type }) {
    switch (type) {
        case "coaching":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M12 44C18 36 26 36 32 40C38 36 46 36 52 44V22C46 16 38 16 32 20C26 16 18 16 12 22V44Z" fill="#3b82f6" fillOpacity="0.2" stroke="#2563eb" strokeWidth="2.5" />
                        <path d="M32 20V42" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
                        <polygon points="32,8 48,14 32,20 16,14" fill="#f59e0b" />
                        <polygon points="32,10 44,14.5 32,18 20,14.5" fill="#d97706" />
                        <path d="M42 16.5V24" stroke="#d97706" strokeWidth="1.5" />
                        <circle cx="42" cy="25" r="1.5" fill="#d97706" />
                        <polygon points="32,2 34,6 38,7 35,10 36,14 32,12 28,14 29,10 26,7 30,6" fill="#f59e0b" />
                    </svg>
                </div>
            );
        case "ias-pcs":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="32" cy="32" r="28" fill="#ef4444" fillOpacity="0.1" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3 2" />
                        <circle cx="32" cy="32" r="23" fill="#dc2626" />
                        <circle cx="32" cy="32" r="21" fill="#ffffff" />
                        <text x="32" y="27" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="900" fontFamily="sans-serif">IAS</text>
                        <text x="32" y="35" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="900" fontFamily="sans-serif">PCS</text>
                        <rect x="18" y="37" width="28" height="8" rx="2" fill="#dc2626" />
                        <text x="32" y="43" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">MASTER</text>
                    </svg>
                </div>
            );
        case "library":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="14" y="20" width="34" height="8" rx="2" fill="#f97316" />
                        <rect x="14" y="29" width="36" height="8" rx="2" fill="#3b82f6" />
                        <rect x="14" y="38" width="38" height="8" rx="2" fill="#eab308" />
                        <circle cx="44" cy="24" r="9" stroke="#0284c7" strokeWidth="3" fill="#ffffff" fillOpacity="0.7" />
                        <line x1="50" y1="30" x2="57" y2="37" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>
            );
        case "tech-inst":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="16" y="16" width="12" height="16" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                        <rect x="36" y="16" width="12" height="16" rx="3" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                        <line x1="18" y1="32" x2="16" y2="44" stroke="#64748b" strokeWidth="2.5" />
                        <line x1="26" y1="32" x2="28" y2="44" stroke="#64748b" strokeWidth="2.5" />
                        <line x1="38" y1="32" x2="36" y2="44" stroke="#64748b" strokeWidth="2.5" />
                        <line x1="46" y1="32" x2="48" y2="44" stroke="#64748b" strokeWidth="2.5" />
                        <path d="M12 44H52" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="32" cy="44" r="3" fill="#b45309" />
                    </svg>
                </div>
            );
        case "spoken-eng":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M10 18 C10 12 16 8 26 8 H38 C48 8 54 12 54 18 V34 C54 40 48 44 38 44 H24 L14 52 V44 C11 44 10 40 10 34 Z" fill="#2563eb" />
                        <path d="M10 8 L54 44 M54 8 L10 44" stroke="#ffffff" strokeWidth="4" />
                        <path d="M10 8 L54 44 M54 8 L10 44" stroke="#dc2626" strokeWidth="2" />
                        <path d="M32 8 V44 M10 26 H54" stroke="#ffffff" strokeWidth="6" />
                        <path d="M32 8 V44 M10 26 H54" stroke="#dc2626" strokeWidth="3" />
                        <circle cx="42" cy="26" r="10" fill="#1e3a8a" />
                        <text x="42" y="31" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">A</text>
                    </svg>
                </div>
            );
        case "polytechnic":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="32" cy="36" r="16" fill="#1e293b" />
                        <circle cx="32" cy="36" r="7" fill="#ffffff" />
                        <path d="M32 16 V22 M32 50 V56 M12 36 H18 M46 36 H52 M18 22 L22 26 M42 46 L46 50 M18 50 L22 46 M42 26 L46 22" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
                        <path d="M18 32 C18 20 25 14 32 14 C39 14 46 20 46 32 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
                        <rect x="14" y="30" width="36" height="4" rx="2" fill="#ca8a04" />
                        <rect x="30" y="14" width="4" height="18" fill="#facc15" />
                    </svg>
                </div>
            );
        case "dance":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="24" cy="16" r="4" fill="#dc2626" />
                        <path d="M24 20 L22 34 L14 48 M22 34 L28 48 M24 24 L14 22 M24 24 L34 20" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="44" cy="18" r="4" fill="#ef4444" />
                        <path d="M44 22 L40 36 L34 50 M40 36 L48 50 M44 26 L36 30 M44 26 L52 18" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            );
        case "discount":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="8" y="16" width="48" height="32" rx="6" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
                        <path d="M6 26 H58 L54 38 H10 Z" fill="#dc2626" />
                        <text x="32" y="34" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="900" fontFamily="sans-serif">BIG SALE</text>
                        <text x="32" y="22" textAnchor="middle" fill="#dc2626" fontSize="4.5" fontWeight="800" fontFamily="sans-serif">UPTO 50% OFF</text>
                        <text x="32" y="44" textAnchor="middle" fill="#854d0e" fontSize="4" fontWeight="700" fontFamily="sans-serif">SPECIAL OFFER</text>
                    </svg>
                </div>
            );
        case "expo":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center p-2 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="32" cy="32" r="24" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                        <text x="24" y="38" textAnchor="middle" fill="#16a34a" fontSize="22" fontWeight="900" fontFamily="sans-serif">X</text>
                        <text x="40" y="38" textAnchor="middle" fill="#f59e0b" fontSize="22" fontWeight="900" fontFamily="sans-serif">P</text>
                    </svg>
                </div>
            );
        case "pandit-ji":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/10 border border-amber-300/60 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#b45309" />
                        <circle cx="32" cy="24" r="12" fill="#f59e0b" />
                        <path d="M32 16 C32 16 34 20 34 22 C34 23.5 33 25 32 25 C31 25 30 23.5 30 22 C30 20 32 16 32 16 Z" fill="#ef4444" />
                        <ellipse cx="32" cy="28" rx="12" ry="5" fill="#fef08a" />
                        <path d="M22 28 C22 36 42 36 42 28 Z" fill="#d97706" />
                        <path d="M20 46 C20 38 44 38 44 46 Z" fill="#f59e0b" />
                        <text x="32" y="44" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">ॐ</text>
                    </svg>
                </div>
            );
        case "restaurant":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-50 border border-orange-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="22" cy="20" r="6" fill="#f97316" />
                        <circle cx="42" cy="20" r="6" fill="#fb923c" />
                        <path d="M16 34 C16 28 28 28 28 34" stroke="#ea580c" strokeWidth="2.5" fill="none" />
                        <path d="M36 34 C36 28 48 28 48 34" stroke="#ea580c" strokeWidth="2.5" fill="none" />
                        <ellipse cx="32" cy="46" rx="20" ry="6" fill="#cbd5e1" />
                        <path d="M20 46 C20 38 44 38 44 46 Z" fill="#ea580c" />
                        <line x1="12" y1="40" x2="12" y2="52" stroke="#64748b" strokeWidth="2" />
                        <line x1="52" y1="40" x2="52" y2="52" stroke="#64748b" strokeWidth="2" />
                    </svg>
                </div>
            );
        case "tiffin":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#d97706" />
                        <rect x="20" y="24" width="24" height="8" rx="2" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                        <rect x="20" y="32" width="24" height="8" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                        <rect x="20" y="40" width="24" height="9" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
                        <path d="M22 24 V16 C22 14 42 14 42 16 V24" stroke="#f8fafc" strokeWidth="2.5" fill="none" />
                        <line x1="16" y1="20" x2="16" y2="46" stroke="#f8fafc" strokeWidth="1.5" />
                        <line x1="48" y1="20" x2="48" y2="46" stroke="#f8fafc" strokeWidth="1.5" />
                    </svg>
                </div>
            );
        case "loan":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-50 border border-sky-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#0369a1" />
                        <rect x="24" y="20" width="16" height="12" rx="3" fill="#fbbf24" />
                        <path d="M28 20 V16 C28 14 36 14 36 16 V20" stroke="#fef08a" strokeWidth="2.5" fill="none" />
                        <path d="M16 42 L26 34 L34 40 L48 30" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="42,30 48,30 48,36" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            );
        case "mehndi":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-50 border border-rose-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#881337" />
                        <circle cx="32" cy="30" r="12" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 1" />
                        <circle cx="32" cy="30" r="7" fill="#fbbf24" fillOpacity="0.4" />
                        <path d="M32 14 C32 20 24 24 24 30 C24 36 32 40 32 46 C32 40 40 36 40 30 C40 24 32 20 32 14 Z" fill="#fbbf24" />
                        <text x="32" y="54" textAnchor="middle" fill="#fef08a" fontSize="6" fontWeight="bold">MEHANDI</text>
                    </svg>
                </div>
            );
        case "salon":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-50 border border-teal-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#0f766e" />
                        <circle cx="26" cy="40" r="4" fill="none" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="38" cy="40" r="4" fill="none" stroke="#ffffff" strokeWidth="2" />
                        <line x1="28" y1="38" x2="40" y2="18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="36" y1="38" x2="24" y2="18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="32" cy="28" r="2" fill="#fef08a" />
                        <text x="32" y="52" textAnchor="middle" fill="#f0fdfa" fontSize="6.5" fontWeight="bold">SALON</text>
                    </svg>
                </div>
            );
        case "ro-water":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-50 border border-cyan-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#06b6d4" />
                        <path d="M32 14 C32 14 44 28 44 36 C44 43 38 48 32 48 C26 48 20 43 20 36 C20 28 32 14 32 14 Z" fill="#ffffff" />
                        <path d="M32 22 C32 22 40 32 40 37 C40 42 36 45 32 45 Z" fill="#bae6fd" />
                        <text x="32" y="38" textAnchor="middle" fill="#0284c7" fontSize="6" fontWeight="900">R.O</text>
                    </svg>
                </div>
            );
        case "rent-home":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M14 30 L32 14 L50 30" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                        <rect x="18" y="30" width="28" height="22" rx="2" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
                        <rect x="22" y="34" width="8" height="8" fill="#38bdf8" />
                        <rect x="36" y="38" width="8" height="14" fill="#b45309" />
                        <rect x="32" y="32" width="18" height="7" rx="1.5" fill="#2563eb" />
                        <text x="41" y="37" textAnchor="middle" fill="#ffffff" fontSize="4.5" fontWeight="900">RENT</text>
                    </svg>
                </div>
            );
        case "commercial-space":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#38bdf8" />
                        <rect x="18" y="20" width="16" height="32" rx="1" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
                        <rect x="34" y="14" width="16" height="38" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="22" y1="26" x2="30" y2="26" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="22" y1="32" x2="30" y2="32" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="22" y1="38" x2="30" y2="38" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="38" y1="20" x2="46" y2="20" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="38" y1="26" x2="46" y2="26" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="38" y1="32" x2="46" y2="32" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="38" y1="38" x2="46" y2="38" stroke="#0284c7" strokeWidth="1.5" />
                    </svg>
                </div>
            );
        case "plot-sale":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 border border-emerald-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <ellipse cx="32" cy="48" rx="22" ry="6" fill="#86efac" />
                        <rect x="20" y="18" width="24" height="18" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
                        <text x="32" y="27" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900">FOR</text>
                        <text x="32" y="33" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900">SALE</text>
                        <line x1="32" y1="36" x2="32" y2="50" stroke="#78350f" strokeWidth="3" />
                    </svg>
                </div>
            );
        case "flat-sale":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 border border-indigo-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M12 28 L24 16 L36 28" stroke="#3b82f6" strokeWidth="3" />
                        <rect x="16" y="28" width="16" height="22" fill="#dbeafe" />
                        <rect x="34" y="20" width="18" height="30" fill="#93c5fd" />
                        <line x1="38" y1="26" x2="48" y2="26" stroke="#1d4ed8" strokeWidth="1.5" />
                        <line x1="38" y1="32" x2="48" y2="32" stroke="#1d4ed8" strokeWidth="1.5" />
                        <line x1="38" y1="38" x2="48" y2="38" stroke="#1d4ed8" strokeWidth="1.5" />
                    </svg>
                </div>
            );
        case "scrap-sale":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="14" y="22" width="20" height="16" rx="2" fill="#64748b" />
                        <rect x="17" y="25" width="14" height="10" fill="#94a3b8" />
                        <rect x="36" y="26" width="16" height="14" fill="#a8a29e" />
                        <circle cx="44" cy="46" r="6" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeDasharray="5 3" />
                        <path d="M42 42 L46 46 L42 50" stroke="#16a34a" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            );
        case "chhota-hathi":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 border border-emerald-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#059669" />
                        <rect x="14" y="26" width="22" height="16" rx="1" fill="#f8fafc" />
                        <path d="M36 30 H44 L48 36 V42 H36 Z" fill="#ffffff" />
                        <circle cx="22" cy="44" r="4" fill="#0f172a" />
                        <circle cx="42" cy="44" r="4" fill="#0f172a" />
                        <rect x="38" y="32" width="6" height="4" fill="#38bdf8" />
                    </svg>
                </div>
            );
        case "wedding-car":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-50 border border-rose-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#e11d48" />
                        <path d="M14 38 L20 28 H44 L50 38 Z" fill="#ffffff" />
                        <rect x="12" y="38" width="40" height="8" rx="2" fill="#f43f5e" />
                        <circle cx="20" cy="46" r="4" fill="#0f172a" />
                        <circle cx="44" cy="46" r="4" fill="#0f172a" />
                        <circle cx="32" cy="28" r="4" fill="#fbbf24" />
                        <circle cx="28" cy="28" r="2" fill="#f43f5e" />
                        <circle cx="36" cy="28" r="2" fill="#f43f5e" />
                    </svg>
                </div>
            );
        case "travel-agency":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-50 border border-sky-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#0284c7" />
                        <circle cx="32" cy="32" r="16" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                        <ellipse cx="32" cy="32" rx="7" ry="16" stroke="#ffffff" strokeWidth="1" fill="none" />
                        <line x1="16" y1="32" x2="48" y2="32" stroke="#ffffff" strokeWidth="1" />
                        <path d="M22 22 L36 28 L46 20 L40 32 L36 40 L34 32 Z" fill="#ffffff" />
                    </svg>
                </div>
            );
        case "digital-ads":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-50 border border-purple-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#9333ea" />
                        <path d="M22 28 L36 20 V44 L22 36 Z" fill="#ffffff" />
                        <path d="M22 32 H16 V36 H22 Z" fill="#e9d5ff" />
                        <path d="M42 24 C46 28 46 36 42 40" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
            );
        case "hoardings":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 border border-indigo-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="10" y="16" width="44" height="24" rx="2" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                        <line x1="22" y1="40" x2="20" y2="52" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                        <line x1="42" y1="40" x2="44" y2="52" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                        <rect x="14" y="20" width="36" height="16" fill="#fef08a" />
                        <text x="32" y="30" textAnchor="middle" fill="#1e293b" fontSize="6.5" fontWeight="900">ADS</text>
                    </svg>
                </div>
            );
        case "pg-hostel":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-50 border border-violet-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="12" y="32" width="40" height="16" rx="2" fill="#8b5cf6" />
                        <circle cx="22" cy="24" r="5" fill="#fef08a" />
                        <rect x="12" y="42" width="4" height="8" fill="#4c1d95" />
                        <rect x="48" y="42" width="4" height="8" fill="#4c1d95" />
                    </svg>
                </div>
            );
        case "godown":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M12 26 L32 14 L52 26 V48 H12 Z" fill="#64748b" />
                        <rect x="22" y="30" width="20" height="18" fill="#cbd5e1" />
                        <line x1="22" y1="35" x2="42" y2="35" stroke="#475569" strokeWidth="1.5" />
                        <line x1="22" y1="40" x2="42" y2="40" stroke="#475569" strokeWidth="1.5" />
                    </svg>
                </div>
            );
        case "commercial-sale":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="14" y="20" width="36" height="30" rx="2" fill="#f59e0b" />
                        <rect x="22" y="32" width="20" height="18" fill="#ffffff" />
                        <rect x="24" y="24" width="16" height="6" fill="#dc2626" />
                        <text x="32" y="28.5" textAnchor="middle" fill="#ffffff" fontSize="4.5" fontWeight="bold">SALE</text>
                    </svg>
                </div>
            );
        case "bike-car-repair":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="32" cy="32" r="16" stroke="#1e293b" strokeWidth="5" fill="none" />
                        <line x1="22" y1="22" x2="42" y2="42" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>
            );
        case "ac-repair":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-50 border border-cyan-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="10" y="20" width="44" height="20" rx="3" fill="#ffffff" stroke="#0891b2" strokeWidth="2" />
                        <line x1="16" y1="34" x2="48" y2="34" stroke="#0891b2" strokeWidth="2" />
                        <path d="M22 44 C26 48 30 44 34 48" stroke="#06b6d4" strokeWidth="2" fill="none" />
                        <path d="M30 44 C34 48 38 44 42 48" stroke="#06b6d4" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            );
        case "electrician":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-yellow-50 border border-yellow-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <circle cx="32" cy="26" r="12" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                        <path d="M32 18 L28 26 H34 L30 34" stroke="#eab308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="28" y="38" width="8" height="6" fill="#94a3b8" />
                    </svg>
                </div>
            );
        case "plumber":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M16 24 H36 V36 H48" stroke="#2563eb" strokeWidth="5" fill="none" strokeLinecap="round" />
                        <circle cx="48" cy="44" r="3" fill="#38bdf8" />
                    </svg>
                </div>
            );
        case "cleaning":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-50 border border-teal-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="26" y="24" width="16" height="24" rx="2" fill="#14b8a6" />
                        <rect x="30" y="16" width="6" height="8" fill="#0d9488" />
                        <polygon points="18,18 20,22 24,24 20,26 18,30 16,26 12,24 16,22" fill="#fbbf24" />
                    </svg>
                </div>
            );
        case "b2b-deals":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="14" y="24" width="16" height="16" rx="2" fill="#d97706" />
                        <rect x="34" y="20" width="18" height="20" rx="2" fill="#b45309" />
                        <line x1="10" y1="44" x2="54" y2="44" stroke="#78350f" strokeWidth="4" />
                    </svg>
                </div>
            );
        case "legal-ca":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <line x1="32" y1="16" x2="32" y2="48" stroke="#b45309" strokeWidth="3" />
                        <line x1="16" y1="22" x2="48" y2="22" stroke="#b45309" strokeWidth="3" />
                        <path d="M16 22 L22 36 H10 Z" fill="#f59e0b" />
                        <path d="M48 22 L54 36 H42 Z" fill="#f59e0b" />
                    </svg>
                </div>
            );
        case "doctor":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-50 border border-red-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <rect x="6" y="6" width="52" height="52" rx="14" fill="#dc2626" />
                        <rect x="28" y="16" width="8" height="32" rx="2" fill="#ffffff" />
                        <rect x="16" y="28" width="32" height="8" rx="2" fill="#ffffff" />
                    </svg>
                </div>
            );
        case "industrial":
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                        <path d="M12 48 V32 L24 38 V32 L36 38 V24 L52 24 V48 Z" fill="#475569" />
                        <circle cx="28" cy="44" r="3" fill="#fef08a" />
                        <circle cx="40" cy="44" r="3" fill="#fef08a" />
                    </svg>
                </div>
            );
        default:
            return (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all text-2xl">
                    <FolderIcon className="w-7 h-7 text-blue-600 stroke-[1.8]" />
                </div>
            );
    }
}

const CITIES_LIST = [
    "Sant Kabir Nagar",
    "Basti",
];

export default function HomePage() {
    const [selectedCity, setSelectedCity] = useState("Sant Kabir Nagar");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeModal, setActiveModal] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [citySearchInput, setCitySearchInput] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCityChange = (newCity) => {
        if (!newCity) return;
        setSelectedCity(newCity);
        if (typeof window !== "undefined") {
            localStorage.setItem("sn_selected_city", newCity);
        }
    };

    const handleSearchSubmit = () => {
        const q = searchQuery.trim();
        if (!q) return;
        const matchedCity = CITIES_LIST.find(
            (c) => c.toLowerCase() === q.toLowerCase()
        );
        if (matchedCity) {
            handleCityChange(matchedCity);
            setSearchQuery("");
            return;
        }
        alert(`Searching: ${q} in ${selectedCity}`);
    };

    // Grouped categories with professional titles and elegant subtitles
    const [categoryGroups, setCategoryGroups] = useState([
        {
            id: "educational-hub",
            title: "EDUCATIONAL HUB",
            subtitle: "टॉप कोचिंग व शिक्षण संस्थान",
            items: [
                { id: "coaching", title: "Coaching Classes", sub: "कोचिंग संस्थान", iconType: "coaching" },
                { id: "ias-pcs", title: "IAS & PCS Academy", sub: "सिविल सर्विसेज", iconType: "ias-pcs" },
                { id: "library", title: "Self Study Library", sub: "लाइब्रेरी", iconType: "library" },
                { id: "tech-inst", title: "Technical Institutes", sub: "तकनीकी संस्थान", iconType: "tech-inst" },
                { id: "spoken-eng", title: "Spoken English", sub: "इंग्लिश स्पीकिंग", iconType: "spoken-eng" },
                { id: "polytechnic", title: "Polytechnic & ITI", sub: "पॉलिटेक्निक", iconType: "polytechnic" },
                { id: "dance", title: "Dance & Music", sub: "डांस क्लासेज", iconType: "dance" },
            ],
        },
        {
            id: "offers-events",
            title: "OFFERS & EVENTS",
            subtitle: "स्पेशल डील्स व इवेंट्स",
            items: [
                { id: "discount", title: "Mega Discounts", sub: "स्पेशल ऑफर्स", iconType: "discount" },
                { id: "expo", title: "Expo & Events", sub: "मेले व प्रदर्शनी", iconType: "expo" },
                { id: "digital-ads", title: "Digital Marketing", sub: "डिजिटल प्रचार", iconType: "digital-ads" },
                { id: "hoardings", title: "Hoardings & Ads", sub: "आउटडोर होर्डिंग", iconType: "hoardings" },
            ],
        },
        {
            id: "online-services",
            title: "NEARBY LOCAL SERVICES",
            subtitle: "दैनिक ऑनलाइन व होम सेवाएं",
            items: [
                { id: "pandit-ji", title: "Online Pandit Ji", sub: "पूजा व कर्मकांड", iconType: "pandit-ji" },
                { id: "restaurant", title: "Top Restaurants", sub: "डिजिटल मेनू व फूड", iconType: "restaurant" },
                { id: "tiffin", title: "Daily Tiffin Service", sub: "घर का टिफिन व मेस", iconType: "tiffin" },
                { id: "loan", title: "Loans & Finance", sub: "पर्सनल व बिजनेस लोन", iconType: "loan" },
                { id: "mehndi", title: "Bridal Mehndi", sub: "मेहंदी आर्टिस्ट", iconType: "mehndi" },
                { id: "salon", title: "Unisex Salon & Spa", sub: "सैलून व ब्यूटी केयर", iconType: "salon" },
                { id: "ro-water", title: "RO & Pure Water", sub: "RO वाटर सप्लाई", iconType: "ro-water" },
            ],
        },
        {
            id: "rental-services",
            title: "RENTAL PROPERTIES",
            subtitle: "किराये पर मकान, दुकान व हॉस्टल",
            items: [
                { id: "rent-home", title: "House & Flat Rent", sub: "मकान व फ्लैट किराया", iconType: "rent-home" },
                { id: "commercial-space", title: "Commercial Space", sub: "दुकान व ऑफिस रेंट", iconType: "commercial-space" },
                { id: "pg-hostel", title: "Hostels & PG", sub: "बॉयज व गर्ल्स हॉस्टल", iconType: "pg-hostel" },
                { id: "godown", title: "Warehouse & Storage", sub: "गोदाम व वेयरहाउस", iconType: "godown" },
            ],
        },
        {
            id: "sell-services",
            title: "PROPERTIES & ASSETS FOR SALE",
            subtitle: "प्लॉट, मकान व कबाड़ खरीद-बिक्री",
            items: [
                { id: "plot-sale", title: "Plots for Sale", sub: "प्लॉट व आवासीय भूमि", iconType: "plot-sale" },
                { id: "flat-sale", title: "Flats & Houses Sale", sub: "मकान व फ्लैट सेल", iconType: "flat-sale" },
                { id: "scrap-sale", title: "Scrap & Recycling", sub: "कबाड़ रीसाइक्लिंग", iconType: "scrap-sale" },
                { id: "commercial-sale", title: "Commercial Property", sub: "कमर्शियल प्रॉपर्टी", iconType: "commercial-sale" },
            ],
        },
        {
            id: "tour-travels",
            title: "TOUR AND TRAVELS",
            subtitle: "वाहन रेंटल व ट्रांसपोर्ट सेवाएं",
            items: [
                { id: "chhota-hathi", title: "Mini Truck & Cargo", sub: "छोटा हाथी ट्रांसपोर्ट", iconType: "chhota-hathi" },
                { id: "wedding-car", title: "Wedding Luxury Cars", sub: "वेडिंग कार रेंटल", iconType: "wedding-car" },
                { id: "travel-agency", title: "Tours & Travel Agency", sub: "ट्रेवल पैकेज व बुकिंग", iconType: "travel-agency" },
                { id: "bike-car-repair", title: "Car & Bike Repairs", sub: "ऑटो गैराज व सर्विस", iconType: "bike-car-repair" },
            ],
        },
        {
            id: "repair-services",
            title: "REPAIR & HOME SERVICES",
            subtitle: "होम मेंटेनेंस व रिपेयर एक्सपर्ट्स",
            items: [
                { id: "ac-repair", title: "AC & Fridge Repair", sub: "एसी व फ्रिज रिपेयर", iconType: "ac-repair" },
                { id: "electrician", title: "Electrician Services", sub: "इलेक्ट्रीशियन ऑन डिमांड", iconType: "electrician" },
                { id: "plumber", title: "Plumbing Services", sub: "प्लंबर सेवाएं", iconType: "plumber" },
                { id: "cleaning", title: "Deep Home Cleaning", sub: "फुल होम क्लीनिंग", iconType: "cleaning" },
            ],
        },
        {
            id: "business-services",
            title: "BUSINESS & PROFESSIONAL SERVICES",
            subtitle: "B2B, टैक्स, लीगल व इंडस्ट्रियल",
            items: [
                { id: "b2b-deals", title: "B2B Wholesale Hub", sub: "थोक सप्लायर व डीलर्स", iconType: "b2b-deals" },
                { id: "legal-ca", title: "CA, Tax & Legal", sub: "सीए व टैक्स कंसल्टेंट", iconType: "legal-ca" },
                { id: "doctor", title: "Doctors & Clinics", sub: "डॉक्टर व पॉलीक्लीनिक", iconType: "doctor" },
                { id: "industrial", title: "Industrial Machinery", sub: "मशीनरी व टूल्स", iconType: "industrial" },
            ],
        },
    ]);

    // Sync with Admin Dashboard updates and saved city from localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedCity = localStorage.getItem("sn_selected_city");
            if (savedCity && CITIES_LIST.includes(savedCity)) {
                setSelectedCity(savedCity);
            } else {
                setSelectedCity("Sant Kabir Nagar");
            }
            const saved = localStorage.getItem("sn_business_categories");
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setCategoryGroups(parsed);
                    }
                } catch (e) {
                    console.error("Failed to parse saved categories:", e);
                }
            }
            const savedUser = localStorage.getItem("sn_user_session");
            if (savedUser) {
                try {
                    const parsedUser = JSON.parse(savedUser);
                    if (parsedUser && parsedUser.phone) {
                        setLoggedInUser(parsedUser);
                    }
                } catch (e) {
                    console.error("Failed to parse user session", e);
                }
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
            {/* 1. TOP NAVBAR */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
                    {/* LOGO: SN business */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <a href="/Home" className="flex items-center text-lg sm:text-2xl font-black tracking-tight shrink-0">
                            <span className="text-red-600">SN</span>
                            <span className="text-[#0c1a2c]">business</span>
                        </a>
                        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 px-2 py-0.5 rounded-full border border-red-200">
                            India
                        </span>

                        {/* Location Badge (Clickable to change city) */}
                        <button
                            onClick={() => setActiveModal("city-select")}
                            className="flex items-center gap-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full transition-all shrink-0 cursor-pointer"
                            title="Change City"
                        >
                            <MapPinMiniIcon className="w-3 h-3 text-amber-600 shrink-0" />
                            <span className="truncate max-w-[70px] sm:max-w-[110px]">{selectedCity}</span>
                            <span className="text-[7px] text-amber-700">▼</span>
                        </button>
                    </div>

                    {/* Quick Search bar in Navbar (Desktop / Tablet) */}
                    <div className="hidden md:flex flex-1 max-w-md items-center bg-slate-50 border border-slate-300 rounded-full px-3 py-1 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="flex items-center text-xs font-semibold text-slate-600 pr-2 border-r border-slate-300">
                            <select
                                aria-label="Select City"
                                value={selectedCity}
                                onChange={(e) => handleCityChange(e.target.value)}
                                className="bg-transparent focus:outline-none cursor-pointer text-xs font-bold text-slate-800 pr-1 max-w-[120px] truncate"
                            >
                                {CITIES_LIST.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder="Search schools, advertising, businesses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSearchSubmit();
                            }}
                            className="w-full bg-transparent px-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                        />
                        <button
                            onClick={handleSearchSubmit}
                            className="p-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                            title="Search"
                        >
                            <SearchIcon className="w-3 h-3" />
                        </button>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <button
                            onClick={() => setActiveModal("browse")}
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold text-xs transition-all cursor-pointer"
                        >
                            <CompassIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span>Browse</span>
                        </button>

                        <button
                            onClick={() => setActiveModal("advertising-quote")}
                            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-blue-50/80 sm:bg-transparent border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-50 font-bold sm:font-semibold text-[11px] sm:text-xs transition-all cursor-pointer"
                        >
                            <MegaphoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                            <span className="hidden xs:inline">Advertise</span>
                            <span className="xs:hidden">Ad</span>
                        </button>

                        <a
                            href="/user"
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer shrink-0 ${loggedInUser
                                    ? "bg-[#ff5a00] text-white border-[#ff5a00] font-black text-xs shadow-xs"
                                    : "border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-500"
                                }`}
                            title={loggedInUser ? `Account: ${loggedInUser.name}` : "User Account / Login"}
                        >
                            {loggedInUser ? (
                                <span className="font-bold text-[11px] sm:text-xs">{loggedInUser.name ? loggedInUser.name.charAt(0).toUpperCase() : "U"}</span>
                            ) : (
                                <UserIcon className="w-3.5 h-3.5" />
                            )}
                        </a>
                    </div>
                </div>
            </header>

            {/* 2. GRAND HERO BANNER */}
            <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-5 w-full space-y-4 sm:space-y-6 overflow-hidden">

                {/* === HERO SECTION: LEFT HERO CARD + RIGHT 4 QUICK CATEGORIES (2x2 GRID) === */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 items-stretch">

                    {/* LEFT HERO CARD */}
                    <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#030d20] via-[#061737] to-[#09224c] p-4 sm:p-6 lg:p-7 text-white relative overflow-hidden shadow-xl border border-sky-900/40 flex flex-col justify-between min-h-[330px] sm:min-h-[420px]">
                        {/* Ambient Glows */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Faint Map Route & Pin Watermark (Top-Right) */}
                        <div className="absolute top-3 right-4 opacity-20 pointer-events-none hidden sm:block z-0">
                            <svg className="w-56 h-28 text-sky-400" viewBox="0 0 240 120" fill="none">
                                <path d="M15 90 C 70 20, 150 35, 215 45" stroke="#f5a623" strokeWidth="2" strokeDasharray="5 5" />
                                <circle cx="215" cy="45" r="12" fill="#f5a623" fillOpacity="0.15" />
                                <circle cx="215" cy="45" r="4.5" fill="#f5a623" />
                            </svg>
                        </div>

                        {/* Golden Wave Arc Sweeping Along Bottom of Card */}
                        <div className="absolute -bottom-8 left-0 right-0 h-32 pointer-events-none overflow-hidden z-0">
                            <svg className="w-full h-full" viewBox="0 0 800 120" fill="none" preserveAspectRatio="none">
                                <path d="M-30 100 C 200 120, 450 20, 850 80" stroke="url(#goldWaveCardGrad)" strokeWidth="3.5" strokeLinecap="round" />
                                <path d="M-30 100 C 200 120, 450 20, 850 80" stroke="url(#goldWaveCardGlow)" strokeWidth="20" strokeLinecap="round" opacity="0.3" filter="blur(6px)" />
                                <defs>
                                    <linearGradient id="goldWaveCardGrad" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#f5a623" stopOpacity="0.15" />
                                        <stop offset="35%" stopColor="#f5a623" stopOpacity="0.85" />
                                        <stop offset="60%" stopColor="#fde047" stopOpacity="1" />
                                        <stop offset="85%" stopColor="#f5a623" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#f5a623" stopOpacity="0.1" />
                                    </linearGradient>
                                    <linearGradient id="goldWaveCardGlow" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#f5a623" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#f5a623" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* TOP HEADER: CITY {selectedCity} */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 sm:gap-3">
                                {/* Golden Location Pin */}
                                <button
                                    onClick={() => setActiveModal("city-select")}
                                    className="w-8 h-10 sm:w-11 sm:h-13 shrink-0 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform"
                                    title="Click to search / change city"
                                >
                                    <svg className="w-8 h-10 sm:w-11 sm:h-13 drop-shadow-md" viewBox="0 0 54 62" fill="none">
                                        <ellipse cx="27" cy="52" rx="18" ry="6" stroke="#f5a623" strokeWidth="3.5" fill="none" />
                                        <path d="M27 6 C17 6 9 14 9 24 C9 36 27 52 27 52 C27 52 45 36 45 24 C45 14 37 6 27 6 Z" fill="#f5a623" />
                                        <circle cx="27" cy="23" r="6" fill="#030d20" />
                                    </svg>
                                </button>
                                <div>
                                    <span className="block text-xs sm:text-xl font-black tracking-wider text-white uppercase leading-none">
                                        CITY
                                    </span>
                                    <h2 className="text-lg sm:text-3xl font-black text-[#f5a623] tracking-tight uppercase leading-tight drop-shadow-sm truncate max-w-[220px] sm:max-w-none">
                                        {selectedCity ? selectedCity.toUpperCase() : "SANT KABIR NAGAR"}
                                    </h2>
                                </div>
                            </div>

                            {/* Golden Swoosh Underline */}
                            <div className="relative mt-1 mb-2.5 sm:mb-3.5 max-w-[220px] sm:max-w-[320px]">
                                <svg className="w-full h-2.5 sm:h-3.5" viewBox="0 0 400 14" fill="none" preserveAspectRatio="none">
                                    <path d="M2 4 C 120 12, 260 11, 398 2" stroke="url(#goldSwooshGradLeft)" strokeWidth="3.5" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="goldSwooshGradLeft" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#f5a623" />
                                            <stop offset="60%" stopColor="#fde047" />
                                            <stop offset="95%" stopColor="#f5a623" />
                                            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* MIDDLE CONTENT: Left Info + Right 3 Phones */}
                        <div className="relative z-10 flex flex-col justify-between flex-1">
                            <div className="max-w-[62%] xs:max-w-[58%] sm:max-w-[54%]">
                                {/* DOWNLOAD NOW Pill */}
                                <button
                                    onClick={() => setActiveModal("download")}
                                    className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#f5a623] hover:bg-[#e09418] text-slate-950 font-black text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                                >
                                    <DownloadIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                                    <span>DOWNLOAD NOW</span>
                                </button>

                                {/* Headline */}
                                <h3 className="text-lg sm:text-2xl lg:text-[28px] font-black text-white mt-2 sm:mt-3 tracking-tight leading-tight">
                                    Your Business. <span className="text-[#f5a623]">One App.</span>
                                </h3>

                                {/* Subtitle */}
                                <p className="text-slate-300 text-[10px] sm:text-xs mt-1 leading-relaxed font-normal">
                                    Find verified schools, colleges, advertising agencies &amp; vendors on the go.
                                </p>

                                {/* Explore App CTA */}
                                <div className="mt-3 sm:mt-4">
                                    <button
                                        onClick={() => setActiveModal("download")}
                                        className="inline-flex items-center gap-1.5 bg-[#f5a623] hover:bg-[#e09418] text-slate-950 font-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs shadow-lg hover:shadow-amber-500/25 active:scale-95 transition-all group cursor-pointer"
                                    >
                                        <span>Explore App</span>
                                        <ArrowRightIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-1 transition-transform stroke-[3]" />
                                    </button>
                                </div>
                            </div>

                            {/* Feature Badges Bottom Bar - Clearly visible & prominent on mobile */}
                            <div className="flex flex-wrap sm:grid sm:grid-cols-4 items-center gap-1.5 sm:gap-2 mt-3.5 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-slate-700/60 max-w-[70%] sm:max-w-[56%] relative z-20">
                                {/* 1. Verified */}
                                <div className="inline-flex items-center gap-1.5 bg-[#030d20]/85 backdrop-blur-xs sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none border border-amber-400/40 sm:border-none sm:flex-col sm:items-start sm:border-r sm:border-slate-700/60 shadow-xs">
                                    <div className="text-[#f5a623] sm:mb-1 shrink-0">
                                        <ShieldCheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                                    </div>
                                    <span className="text-[11px] sm:text-[10px] font-bold text-white sm:text-slate-200 leading-tight tracking-wide">
                                        Verified<span className="hidden sm:inline"><br />Businesses</span>
                                    </span>
                                </div>

                                {/* 2. Local */}
                                <div className="inline-flex items-center gap-1.5 bg-[#030d20]/85 backdrop-blur-xs sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none border border-amber-400/40 sm:border-none sm:flex-col sm:items-start sm:border-r sm:border-slate-700/60 shadow-xs">
                                    <div className="text-[#f5a623] sm:mb-1 shrink-0">
                                        <MapPinMiniIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                                    </div>
                                    <span className="text-[11px] sm:text-[10px] font-bold text-white sm:text-slate-200 leading-tight tracking-wide">
                                        Local<span className="hidden sm:inline"><br />Listings</span>
                                    </span>
                                </div>

                                {/* 3. Fast & Easy (Desktop) */}
                                <div className="hidden sm:flex flex-col items-start px-1 sm:px-2 border-r border-slate-700/60">
                                    <div className="text-[#f5a623] mb-1">
                                        <LightningBoltIcon className="w-4 h-4 stroke-[2]" />
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-200 leading-tight">
                                        Fast &amp; Easy<br />Access
                                    </span>
                                </div>

                                {/* 4. All in One (Desktop) */}
                                <div className="hidden sm:flex flex-col items-start pl-1 sm:pl-2">
                                    <div className="text-[#f5a623] mb-1">
                                        <DevicePhoneIcon className="w-4 h-4 stroke-[2]" />
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-200 leading-tight">
                                        All in<br />One App
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 3 REALISTIC PHONES */}
                        <div className="absolute -bottom-3 right-0 sm:-bottom-2 sm:right-1 z-10 pointer-events-none select-none flex items-end justify-center transform scale-[0.38] xs:scale-[0.48] sm:scale-[0.66] lg:scale-[0.70] xl:scale-[0.72] origin-bottom-right">
                            {/* Phone 1: Left (Tilted -6deg, Vendors) */}
                            <div className="w-32 sm:w-36 h-[250px] sm:h-[280px] bg-slate-950 rounded-[26px] border-2 border-slate-700 shadow-xl rotate-[-6deg] -mr-8 z-10 shrink-0 p-1.5 overflow-hidden">
                                <div className="w-full h-full bg-slate-50 rounded-[20px] p-2 flex flex-col justify-between text-slate-800">
                                    <div className="bg-[#e11d48] text-white py-0.5 px-2 rounded-md flex items-center gap-1 font-bold text-[8px]">
                                        <span>‹</span><span>Vendors</span>
                                    </div>
                                    <div className="space-y-1 my-auto">
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs flex items-center justify-between">
                                            <div>
                                                <p className="font-bold text-[7px] text-slate-900 truncate max-w-[70px]">Royal Public School</p>
                                                <p className="text-[6px] text-slate-400 truncate max-w-[70px]">School • {selectedCity}</p>
                                            </div>
                                            <span className="text-[6px] font-bold text-amber-600 bg-amber-50 px-1 py-0.2 rounded flex items-center gap-0.5">
                                                <StarFilledIcon className="w-1.5 h-1.5 text-amber-500" />
                                                <span>4.8</span>
                                            </span>
                                        </div>
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs flex items-center justify-between">
                                            <div>
                                                <p className="font-bold text-[7px] text-slate-900 truncate max-w-[70px]">Bright College</p>
                                                <p className="text-[6px] text-slate-400 truncate max-w-[70px]">College • {selectedCity}</p>
                                            </div>
                                            <span className="text-[6px] font-bold text-amber-600 bg-amber-50 px-1 py-0.2 rounded flex items-center gap-0.5">
                                                <StarFilledIcon className="w-1.5 h-1.5 text-amber-500" />
                                                <span>4.6</span>
                                            </span>
                                        </div>
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs flex items-center justify-between">
                                            <div>
                                                <p className="font-bold text-[7px] text-slate-900 truncate max-w-[70px]">Creative Ads</p>
                                                <p className="text-[6px] text-slate-400 truncate max-w-[70px]">Agency • {selectedCity}</p>
                                            </div>
                                            <span className="text-[6px] font-bold text-amber-600 bg-amber-50 px-1 py-0.2 rounded flex items-center gap-0.5">
                                                <StarFilledIcon className="w-1.5 h-1.5 text-amber-500" />
                                                <span>4.5</span>
                                            </span>
                                        </div>
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs flex items-center justify-between">
                                            <div>
                                                <p className="font-bold text-[7px] text-slate-900 truncate max-w-[70px]">Sunrise Traders</p>
                                                <p className="text-[6px] text-slate-400 truncate max-w-[70px]">Vendor • {selectedCity}</p>
                                            </div>
                                            <span className="text-[6px] font-bold text-amber-600 bg-amber-50 px-1 py-0.2 rounded flex items-center gap-0.5">
                                                <StarFilledIcon className="w-1.5 h-1.5 text-amber-500" />
                                                <span>4.3</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-slate-200/80 py-0.5 rounded text-[6px] text-center text-slate-600 font-bold">
                                        Verified Directory
                                    </div>
                                </div>
                            </div>

                            {/* Phone 2: Center (Front, Hello! Find Services) */}
                            <div className="w-38 sm:w-44 h-[290px] sm:h-[330px] bg-slate-950 rounded-[30px] border-[2.5px] border-slate-600 shadow-2xl z-20 shrink-0 p-1.5 overflow-hidden transform scale-105">
                                <div className="w-full h-full bg-white rounded-[22px] p-2 flex flex-col justify-between text-slate-800">
                                    <div>
                                        <div className="flex items-center justify-between text-[6px] font-bold text-slate-500 px-1 mb-0.5">
                                            <span>9:41</span>
                                            <div className="w-10 h-2 bg-black rounded-full"></div>
                                            <div className="flex items-center gap-1 text-slate-700">
                                                <SignalIcon className="w-2 h-1.5" />
                                                <BatteryIcon className="w-2.5 h-1.5" />
                                            </div>
                                        </div>
                                        <div className="mt-0.5">
                                            <h4 className="font-black text-xs text-slate-900 leading-tight">Hello!</h4>
                                            <p className="text-[7px] text-slate-400">Find Services</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1 mt-1.5">
                                            <div className="bg-amber-50 border border-amber-200/60 rounded-lg p-1 text-center flex flex-col items-center">
                                                <AcademicCapIcon className="w-3.5 h-3.5 text-amber-600 mb-0.5" />
                                                <span className="text-[7px] font-bold text-amber-900 block">Schools</span>
                                            </div>
                                            <div className="bg-blue-50 border border-blue-200/60 rounded-lg p-1 text-center flex flex-col items-center">
                                                <AcademicCapIcon className="w-3.5 h-3.5 text-blue-600 mb-0.5" />
                                                <span className="text-[7px] font-bold text-blue-900 block">Colleges</span>
                                            </div>
                                            <div className="bg-purple-50 border border-purple-200/60 rounded-lg p-1 text-center flex flex-col items-center">
                                                <SpeakerphoneIcon className="w-3.5 h-3.5 text-purple-600 mb-0.5" />
                                                <span className="text-[7px] font-bold text-purple-900 block">Ads</span>
                                            </div>
                                            <div className="bg-emerald-50 border border-emerald-200/60 rounded-lg p-1 text-center flex flex-col items-center">
                                                <StorefrontIcon className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
                                                <span className="text-[7px] font-bold text-emerald-900 block">Vendors</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-[6px] font-bold text-slate-400 uppercase tracking-wider">Popular Categories</p>
                                        <div className="bg-slate-50 p-0.5 rounded border border-slate-200/60 flex items-center justify-between text-[6px] font-bold text-slate-700">
                                            <span className="flex items-center gap-1"><AcademicCapIcon className="w-2.5 h-2.5 text-blue-600" /><span>Education</span></span>
                                            <span className="text-slate-400">›</span>
                                        </div>
                                        <div className="bg-slate-50 p-0.5 rounded border border-slate-200/60 flex items-center justify-between text-[6px] font-bold text-slate-700">
                                            <span className="flex items-center gap-1"><SpeakerphoneIcon className="w-2.5 h-2.5 text-purple-600" /><span>Advertising</span></span>
                                            <span className="text-slate-400">›</span>
                                        </div>
                                        <div className="bg-slate-50 p-0.5 rounded border border-slate-200/60 flex items-center justify-between text-[6px] font-bold text-slate-700">
                                            <span className="flex items-center gap-1"><WrenchIcon className="w-2.5 h-2.5 text-emerald-600" /><span>Services</span></span>
                                            <span className="text-slate-400">›</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full py-1 bg-[#1967d2] text-white rounded-lg text-[7px] font-black text-center shadow-xs flex items-center justify-center gap-1">
                                            <SearchIcon className="w-2 h-2 text-white" /><span>SN App</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone 3: Right (Tilted +6deg, Quotes) */}
                            <div className="w-32 sm:w-36 h-[250px] sm:h-[280px] bg-slate-950 rounded-[26px] border-2 border-slate-700 shadow-xl rotate-[6deg] -ml-8 z-10 shrink-0 p-1.5 overflow-hidden">
                                <div className="w-full h-full bg-slate-50 rounded-[20px] p-2 flex flex-col justify-between text-slate-800">
                                    <div className="bg-[#1967d2] text-white py-0.5 px-2 rounded-md flex items-center gap-1 font-bold text-[8px]">
                                        <span>‹</span><span>Quotes</span>
                                    </div>
                                    <div className="space-y-1 my-auto">
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">
                                            <p className="font-bold text-[7px] text-slate-900">Website Dev</p>
                                            <div className="flex items-center justify-between mt-0.5">
                                                <span className="text-[6px] text-slate-400">Services</span>
                                                <span className="text-[6px] font-black text-emerald-600">₹12,000</span>
                                            </div>
                                        </div>
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">
                                            <p className="font-bold text-[7px] text-slate-900">Digital Marketing</p>
                                            <div className="flex items-center justify-between mt-0.5">
                                                <span className="text-[6px] text-slate-400">Marketing</span>
                                                <span className="text-[6px] font-black text-emerald-600">₹8,000</span>
                                            </div>
                                        </div>
                                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">
                                            <p className="font-bold text-[7px] text-slate-900">Logo Design</p>
                                            <div className="flex items-center justify-between mt-0.5">
                                                <span className="text-[6px] text-slate-400">Design</span>
                                                <span className="text-[6px] font-black text-emerald-600">₹5,000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#f5a623] text-slate-950 font-black py-1 rounded-md text-[7px] text-center shadow-2xs">
                                        Get Quote
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: 4 QUICK CATEGORY SHORTCUTS (HIDDEN ON MOBILE, VISIBLE ON DESKTOP) */}
                    <div className="hidden md:grid lg:col-span-5 grid-cols-2 gap-3 sm:gap-3.5">

                        {/* 1. School & College */}
                        <div
                            onClick={() => setActiveModal("school-quote")}
                            className="group bg-white rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[105px] sm:min-h-[148px]"
                        >
                            <div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-2xs shrink-0">
                                        <AcademicCapIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-tight truncate">
                                            School &amp; College
                                        </h3>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-0.5 truncate">
                                            Top Institutes
                                        </p>
                                    </div>
                                </div>
                                <p className="hidden sm:block text-[10px] text-slate-400 mt-1.5 max-w-[140px] line-clamp-1 leading-snug">
                                    Find top schools, colleges &amp; admission coaching.
                                </p>
                            </div>

                            <div className="mt-1 sm:mt-2 flex items-end justify-between">
                                <button
                                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f5a623] hover:bg-[#e09418] text-slate-950 flex items-center justify-center font-black shadow-xs hover:scale-105 transition-all shrink-0 cursor-pointer"
                                    title="Explore School & College"
                                >
                                    <ArrowRightIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                </button>
                                <div className="hidden sm:block transform translate-x-1 translate-y-1">
                                    <SchoolCollegeIllustration />
                                </div>
                            </div>
                        </div>

                        {/* 2. B2B Deals */}
                        <div
                            onClick={() => setActiveModal("b2b-quote")}
                            className="group bg-white rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[105px] sm:min-h-[148px]"
                        >
                            <div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-2xs shrink-0">
                                        <BriefcaseIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate">
                                            B2B Deals
                                        </h3>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-0.5 truncate">
                                            Quick Quotes
                                        </p>
                                    </div>
                                </div>
                                <p className="hidden sm:block text-[10px] text-slate-400 mt-1.5 max-w-[140px] line-clamp-1 leading-snug">
                                    Wholesalers &amp; verified suppliers across industries.
                                </p>
                            </div>

                            <div className="mt-1 sm:mt-2 flex items-end justify-between">
                                <button
                                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1967d2] hover:bg-[#1557b0] text-white flex items-center justify-center font-black shadow-xs hover:scale-105 transition-all shrink-0 cursor-pointer"
                                    title="Explore B2B"
                                >
                                    <ArrowRightIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                </button>
                                <div className="hidden sm:block transform translate-x-1 translate-y-1">
                                    <B2BIllustration />
                                </div>
                            </div>
                        </div>

                        {/* 3. Repairs & Services */}
                        <div
                            onClick={() => setActiveModal("repair-quote")}
                            className="group bg-white rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[105px] sm:min-h-[148px]"
                        >
                            <div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-2xs shrink-0">
                                        <WrenchIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight truncate">
                                            Repairs &amp; Services
                                        </h3>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-0.5 truncate">
                                            Nearest Vendors
                                        </p>
                                    </div>
                                </div>
                                <p className="hidden sm:block text-[10px] text-slate-400 mt-1.5 max-w-[140px] line-clamp-1 leading-snug">
                                    AC, electrician, plumber &amp; service pros near you.
                                </p>
                            </div>

                            <div className="mt-1 sm:mt-2 flex items-end justify-between">
                                <button
                                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center font-black shadow-xs hover:scale-105 transition-all shrink-0 cursor-pointer"
                                    title="Explore Repairs"
                                >
                                    <ArrowRightIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                </button>
                                <div className="hidden sm:block transform translate-x-1 translate-y-1">
                                    <RepairsIllustration />
                                </div>
                            </div>
                        </div>

                        {/* 4. Advertising Services */}
                        <div
                            onClick={() => setActiveModal("advertising-quote")}
                            className="group bg-white rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[105px] sm:min-h-[148px]"
                        >
                            <div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs shrink-0">
                                        <SpeakerphoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight truncate">
                                            Advertising
                                        </h3>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-0.5 truncate">
                                            Branding &amp; Ads
                                        </p>
                                    </div>
                                </div>
                                <p className="hidden sm:block text-[10px] text-slate-400 mt-1.5 max-w-[140px] line-clamp-1 leading-snug">
                                    Hoardings, digital marketing &amp; local brand promotion.
                                </p>
                            </div>

                            <div className="mt-1 sm:mt-2 flex items-end justify-between">
                                <button
                                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center font-black shadow-xs hover:scale-105 transition-all shrink-0"
                                    title="Explore Advertising Services"
                                >
                                    <ArrowRightIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                </button>
                                <div className="hidden sm:block transform translate-x-1 translate-y-1">
                                    <AdvertisingIllustration />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 3. POPULAR CATEGORIES SECTION (EXACT SCREENSHOT DESIGN) */}
                <section className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200/80">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">
                            Popular Categories
                        </h2>
                        <button
                            onClick={() => setActiveModal("browse")}
                            className="text-[#1967d2] hover:text-blue-800 font-bold text-xs flex items-center gap-1 hover:underline"
                        >
                            <span>Browse all</span>
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Grouped Category Rows */}
                    <div className="space-y-7">
                        {categoryGroups.map((group) => (
                            <div key={group.id} className="space-y-3">
                                {/* Group Title with grey rounded pill */}
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-4 rounded-xs bg-[#e2e8f0] inline-block shrink-0"></span>
                                    <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-800">
                                        {group.title}
                                    </h3>
                                    {group.subtitle && (
                                        <span className="text-[11px] font-medium text-slate-400 normal-case hidden sm:inline">
                                            • {group.subtitle}
                                        </span>
                                    )}
                                </div>

                                {/* Items Container with Horizontal Scroll & Chevron Button */}
                                <div className="relative flex items-center w-full">
                                    <div
                                        id={`scroll-${group.id}`}
                                        className="flex items-start gap-2.5 xs:gap-3 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1 pr-10 sm:pr-12 w-full touch-pan-x"
                                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                    >
                                        {group.items.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    setSelectedCategory(item);
                                                    setActiveModal("category-detail");
                                                }}
                                                className="group flex flex-col items-center text-center cursor-pointer shrink-0 w-[72px] xs:w-[80px] sm:w-[92px] transition-all hover:-translate-y-0.5"
                                            >
                                                <CategoryIcon type={item.iconType} />
                                                <span className="mt-1.5 text-[11px] sm:text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                                                    {item.title}
                                                </span>
                                                {item.sub && (
                                                    <span className="text-[9.5px] sm:text-[10.5px] font-medium text-slate-500 group-hover:text-blue-600 transition-colors leading-normal pt-0.5 block truncate max-w-full">
                                                        {item.sub}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Soft edge fade indicating scrollability */}
                                    <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-10 bg-gradient-to-l from-white via-white/80 to-transparent z-5"></div>

                                    {/* Scroll Right button - visible on mobile & desktop to indicate row is scrollable */}
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById(`scroll-${group.id}`);
                                            if (el) el.scrollBy({ left: 160, behavior: "smooth" });
                                        }}
                                        className="flex absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-slate-200/90 items-center justify-center text-slate-700 hover:text-blue-600 active:scale-95 hover:bg-slate-50 transition-all z-10 shrink-0 cursor-pointer"
                                        title="View more / Scroll right"
                                        aria-label="Scroll right"
                                    >
                                        <span className="text-sm sm:text-base font-bold leading-none mb-0.5">›</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. BUSINESS GROWTH BANNER */}
                <section className="bg-gradient-to-r from-[#0c1a2c] via-[#152a44] to-[#1967d2] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
                    <div className="max-w-xl relative z-10 space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                            Grow Your Business
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                            Grow your local brand with SN Business
                        </h3>
                        <p className="text-slate-300 text-xs leading-relaxed">
                            List your business today, get genuine customer leads, phone calls, and direct quotation requests without paying heavy commissions.
                        </p>
                        <div className="pt-1">
                            <button
                                onClick={() => setActiveModal("advertising-quote")}
                                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md active:scale-95"
                            >
                                List Your Business Free
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* 5. FOOTER */}
            <Footer />

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    {/* Drawer content */}
                    <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between p-5 z-10 overflow-y-auto animate-in slide-in-from-right duration-200">
                        <div>
                            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                                <div className="text-xl font-black">
                                    <span className="text-red-600">SN</span>
                                    <span className="text-[#0c1a2c]">business</span>
                                </div>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 cursor-pointer"
                                >
                                    <CloseXIcon className="w-4 h-4" />
                                </button>
                            </div>

                            {/* User Info / Login in Drawer */}
                            <div className="my-4 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                                {loggedInUser ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#ff5a00] text-white font-black flex items-center justify-center text-sm shadow-xs shrink-0">
                                            {loggedInUser.name ? loggedInUser.name.charAt(0).toUpperCase() : "U"}
                                        </div>
                                        <div className="truncate">
                                            <p className="font-bold text-xs text-slate-900 truncate">{loggedInUser.name || "SN User"}</p>
                                            <p className="text-[10px] text-slate-500 truncate">{loggedInUser.phone || "Active Member"}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-xs text-slate-800">Welcome to SN Business</p>
                                            <p className="text-[10px] text-slate-400">Join verified local community</p>
                                        </div>
                                        <a
                                            href="/user"
                                            className="px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold shadow-xs hover:bg-blue-700"
                                        >
                                            Login
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* City Switcher in Drawer */}
                            <div className="mb-4">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                                    Selected City / चुना गया जिला
                                </label>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveModal("city-select");
                                    }}
                                    className="w-full flex items-center justify-between p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900 font-bold text-xs cursor-pointer hover:bg-amber-100 transition-colors"
                                >
                                    <span className="flex items-center gap-1.5 truncate">
                                        <PinLocationIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                        <span className="truncate">{selectedCity}</span>
                                    </span>
                                    <span className="text-[10px] bg-[#f5a623] text-slate-950 px-2 py-0.5 rounded-md font-bold shrink-0">
                                        Change
                                    </span>
                                </button>
                            </div>

                            {/* Navigation Links in Drawer */}
                            <nav className="space-y-1 text-xs font-bold text-slate-700">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveModal("browse");
                                    }}
                                    className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl text-left transition-colors cursor-pointer"
                                >
                                    <CompassIcon className="w-4 h-4 text-blue-600 shrink-0" />
                                    <span>Browse All Categories</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveModal("advertising-quote");
                                    }}
                                    className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl text-left transition-colors cursor-pointer"
                                >
                                    <MegaphoneIcon className="w-4 h-4 text-blue-600 shrink-0" />
                                    <span>Advertise / Free Listing</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveModal("school-quote");
                                    }}
                                    className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl text-left transition-colors cursor-pointer"
                                >
                                    <AcademicCapIcon className="w-4 h-4 text-amber-600 shrink-0" />
                                    <span>School &amp; College Admissions</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveModal("b2b-quote");
                                    }}
                                    className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl text-left transition-colors cursor-pointer"
                                >
                                    <BriefcaseIcon className="w-4 h-4 text-blue-600 shrink-0" />
                                    <span>B2B Wholesale Hub</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveModal("repair-quote");
                                    }}
                                    className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl text-left transition-colors cursor-pointer"
                                >
                                    <WrenchIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Repairs &amp; Maintenance</span>
                                </button>
                                <a
                                    href="/user"
                                    className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition-colors text-slate-700"
                                >
                                    <UserIcon className="w-4 h-4 text-slate-600 shrink-0" />
                                    <span>User Account &amp; Dashboard</span>
                                </a>
                                <a
                                    href="/admin"
                                    className="flex items-center gap-3 p-2.5 hover:bg-purple-50 rounded-xl transition-colors text-purple-700"
                                >
                                    <LockClosedIcon className="w-4 h-4 text-purple-600 shrink-0" />
                                    <span>Admin Panel</span>
                                </a>
                            </nav>
                        </div>

                        {/* Bottom CTA in Drawer */}
                        <div className="pt-4 border-t border-slate-100">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setActiveModal("download");
                                }}
                                className="w-full py-2.5 bg-[#f5a623] hover:bg-[#e09418] text-slate-950 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                            >
                                <DownloadIcon className="w-3.5 h-3.5" />
                                <span>Download Android App</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 6. MODALS */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
                    <div className={`bg-white rounded-3xl p-5 sm:p-7 ${(activeModal === "city-select" || activeModal === "account") ? "max-w-md" : "max-w-sm"} w-full shadow-2xl relative animate-in fade-in zoom-in duration-150 max-h-[90vh] overflow-y-auto`}>
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-bold cursor-pointer z-10"
                        >
                            <CloseXIcon className="w-3.5 h-3.5" />
                        </button>

                        {activeModal === "city-select" && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#f5a623] flex items-center justify-center">
                                        <PinLocationIcon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-black text-slate-900 leading-tight">
                                            Select Your City / जिला चुनें
                                        </h3>
                                        <p className="text-[11px] text-slate-500">
                                            Current: <span className="font-bold text-amber-600">{selectedCity}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Search City Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search city (e.g. Patna, Lucknow, Gorakhpur, Basti)..."
                                        value={citySearchInput}
                                        onChange={(e) => setCitySearchInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && citySearchInput.trim()) {
                                                handleCityChange(citySearchInput.trim());
                                                setCitySearchInput("");
                                                setActiveModal(null);
                                            }
                                        }}
                                        autoFocus
                                        className="w-full pl-8 pr-7 py-2.5 text-xs font-medium border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/80"
                                    />
                                    <span className="absolute left-2.5 top-3 text-xs text-slate-400">
                                        <SearchIcon className="w-3.5 h-3.5" />
                                    </span>
                                    {citySearchInput && (
                                        <button
                                            onClick={() => setCitySearchInput("")}
                                            className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                                        >
                                            <CloseXIcon className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>

                                {/* Custom City Option if not in list */}
                                {citySearchInput.trim() && !CITIES_LIST.some((c) => c.toLowerCase() === citySearchInput.trim().toLowerCase()) && (
                                    <button
                                        onClick={() => {
                                            handleCityChange(citySearchInput.trim());
                                            setCitySearchInput("");
                                            setActiveModal(null);
                                        }}
                                        className="w-full p-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-300/80 rounded-xl text-left flex items-center justify-between text-xs font-bold text-amber-950 transition-colors cursor-pointer"
                                    >
                                        <span className="flex items-center gap-1.5 truncate">
                                            <PinLocationIcon className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                                            <span>Select: <strong>"{citySearchInput.trim()}"</strong></span>
                                        </span>
                                        <span className="text-[10px] bg-[#f5a623] hover:bg-[#e09418] text-slate-950 px-2.5 py-1 rounded-full font-black shrink-0">
                                            Apply City
                                        </span>
                                    </button>
                                )}

                                {/* Popular & Filtered Cities List */}
                                <div>
                                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-2">
                                        <span>POPULAR CITIES</span>
                                        <span className="text-[10px] font-normal text-slate-400">Click to select</span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-56 overflow-y-auto pr-1">
                                        {CITIES_LIST
                                            .filter((c) =>
                                                c.toLowerCase().includes(citySearchInput.toLowerCase().trim())
                                            )
                                            .map((city) => {
                                                const isSelected = selectedCity.toLowerCase() === city.toLowerCase();
                                                return (
                                                    <button
                                                        key={city}
                                                        onClick={() => {
                                                            handleCityChange(city);
                                                            setCitySearchInput("");
                                                            setActiveModal(null);
                                                        }}
                                                        className={`text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${isSelected
                                                            ? "bg-[#0c1a2c] text-white shadow-sm ring-2 ring-amber-400 font-bold"
                                                            : "bg-slate-100/90 hover:bg-amber-50 hover:text-amber-900 text-slate-700 hover:border-amber-300"
                                                            }`}
                                                    >
                                                        <span className="truncate">{city}</span>
                                                        {isSelected && (
                                                            <span className="text-amber-400 text-xs font-bold shrink-0 ml-1">✓</span>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeModal === "download" && (
                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl mx-auto flex items-center justify-center shadow-xs">
                                    <MobilePhoneIcon className="w-6 h-6 stroke-[2]" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Download SN Business App</h3>
                                <p className="text-xs text-slate-600">
                                    Enter your mobile number to get the app download link via SMS.
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="tel"
                                        placeholder="10 digit mobile"
                                        className="flex-1 px-3 py-1.5 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={() => {
                                            alert("Download link sent via SMS!");
                                            setActiveModal(null);
                                        }}
                                        className="bg-blue-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-blue-700"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeModal === "school-quote" && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900">School &amp; College Inquiries</h3>
                                <p className="text-xs text-slate-600">
                                    Get admission details, fees, and prospectus from top schools &amp; colleges in {selectedCity}.
                                </p>
                                <input
                                    type="text"
                                    placeholder="Student / Parent Name"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <input
                                    type="text"
                                    placeholder="Class / Course (e.g. 11th Science, B.Tech, MBA)"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <button
                                    onClick={() => {
                                        alert("Thank you! Top schools/colleges will share admission details.");
                                        setActiveModal(null);
                                    }}
                                    className="w-full bg-[#f5a623] text-slate-950 font-bold py-2 rounded-lg text-xs hover:bg-amber-500"
                                >
                                    Get Admission Details
                                </button>
                            </div>
                        )}

                        {activeModal === "advertising-quote" && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900">Advertising Services</h3>
                                <p className="text-xs text-slate-600">
                                    Promote your brand with digital ads, hoardings, and local promotions in {selectedCity}.
                                </p>
                                <input
                                    type="text"
                                    placeholder="Your Business / Brand Name"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <input
                                    type="tel"
                                    placeholder="Contact Mobile Number"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <select className="w-full px-3 py-1.5 border rounded-lg text-xs">
                                    <option>Digital Marketing (Meta/Google Ads)</option>
                                    <option>Outdoor Hoardings &amp; Billboards</option>
                                    <option>Local Influencer &amp; SMS Promotion</option>
                                    <option>Complete Brand Campaign</option>
                                </select>
                                <button
                                    onClick={() => {
                                        alert("Thank you! Advertising advisors will contact you shortly.");
                                        setActiveModal(null);
                                    }}
                                    className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg text-xs hover:bg-indigo-700"
                                >
                                    Request Advertising Plan
                                </button>
                            </div>
                        )}

                        {(activeModal === "b2b-quote" || activeModal === "repair-quote") && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900">Get Free Instant Quotes</h3>
                                <p className="text-xs text-slate-600">
                                    Fill in your requirements to receive top 3 quotes from verified vendors in {selectedCity}.
                                </p>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number (for WhatsApp quote)"
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <textarea
                                    placeholder="Describe your requirement..."
                                    rows={2}
                                    className="w-full px-3 py-1.5 border rounded-lg text-xs"
                                />
                                <button
                                    onClick={() => {
                                        alert("Thank you! Top verified partners will contact you shortly.");
                                        setActiveModal(null);
                                    }}
                                    className="w-full bg-[#f5a623] text-slate-950 font-bold py-2 rounded-lg text-xs hover:bg-amber-500"
                                >
                                    Submit &amp; Get Quotes
                                </button>
                            </div>
                        )}

                        {activeModal === "category-detail" && selectedCategory && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <CategoryIcon type={selectedCategory.iconType} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 leading-tight">
                                            {selectedCategory.title}
                                        </h3>
                                        {selectedCategory.sub && (
                                            <p className="text-xs font-semibold text-blue-600 mt-0.5">
                                                {selectedCategory.sub}
                                            </p>
                                        )}
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            Verified listings in {selectedCity}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-slate-700">Verified Providers:</span>
                                        <span className="font-bold text-blue-600">35+ Available</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-slate-700">Instant Contact:</span>
                                        <span className="text-emerald-600 font-bold">WhatsApp &amp; Direct Call</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={() => {
                                            alert(`Details for ${selectedCategory.title} sent to your phone!`);
                                            setActiveModal(null);
                                        }}
                                        className="w-full bg-[#1967d2] hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs shadow-xs transition-all"
                                    >
                                        Get Instant Provider Numbers
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeModal === "account" && (
                            <div>
                                {!loggedInUser ? (
                                    <UserLoginForm
                                        onLoginSuccess={(userData) => {
                                            setLoggedInUser(userData);
                                            setActiveModal(null);
                                        }}
                                        onCancel={() => setActiveModal(null)}
                                    />
                                ) : (
                                    <div className="text-center py-4 space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-[#ff5a00] text-white flex items-center justify-center font-black text-2xl mx-auto shadow-lg shadow-orange-500/25">
                                            {loggedInUser?.name ? loggedInUser.name.charAt(0).toUpperCase() : "U"}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900">{loggedInUser.name}</h3>
                                            <p className="text-xs text-slate-500 mt-0.5">+91 {loggedInUser.phone}</p>
                                        </div>
                                        <div className="pt-2 flex flex-col gap-2">
                                            <button
                                                onClick={() => {
                                                    setLoggedInUser(null);
                                                    if (typeof window !== "undefined") {
                                                        localStorage.removeItem("sn_user_session");
                                                    }
                                                }}
                                                className="w-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-all cursor-pointer"
                                            >
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeModal === "browse" && (
                            <div className="text-center space-y-3">
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl mx-auto flex items-center justify-center text-lg font-bold">
                                    SN
                                </div>
                                <h3 className="text-base font-bold text-slate-900">SN Business Portal</h3>
                                <p className="text-xs text-slate-600">
                                    Browse over 50,000+ verified listings across Education, B2B, Repairs, Advertising, and Local Services.
                                </p>
                                <div className="pt-1 flex flex-col gap-2">
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-xs cursor-pointer"
                                    >
                                        Explore Categories
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
