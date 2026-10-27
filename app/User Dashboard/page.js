"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/page";

// --- Vector Icons ---
function DashboardIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
    );
}

function StorefrontIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l1-5h16l1 5M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9m-9 12v-6h4v6" />
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

function CreditCardIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="2" y1="10" x2="22" y2="10" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="15" x2="10" y2="15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function BellIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
    );
}

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

function PlusIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
    );
}

function CloseIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

function MapPinIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

// Icons for How to List Your Business & Value Props (Screenshots 1 & 2)
function TrendingUpIcon({ className = "w-5 h-5 text-emerald-600" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    );
}

function UsersIcon({ className = "w-5 h-5 text-purple-600" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );
}

function UserAddIcon({ className = "w-7 h-7 text-white" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
    );
}

function DocumentTextIcon({ className = "w-7 h-7 text-white" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}

function CheckCircleIcon({ className = "w-7 h-7 text-white" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function RocketIcon({ className = "w-7 h-7 text-white" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
    );
}

function PaperAirplaneIcon({ className = "w-4 h-4 text-white" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
    );
}

export default function UserDashboardPage() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("dashboard"); // "dashboard" | "listings" | "profile" | "transactions" | "notifications"
    const [listings, setListings] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
    const [selectedPlanFeedback, setSelectedPlanFeedback] = useState(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Business Registration Form State (Exact from Screenshot)
    const [newTitle, setNewTitle] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newWebsite, setNewWebsite] = useState("");
    const [businessDescription, setBusinessDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Profile Edit State
    const [profileName, setProfileName] = useState("");
    const [profilePhone, setProfilePhone] = useState("");
    const [profileEmail, setProfileEmail] = useState("");
    const [profileSaved, setProfileSaved] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedSession = localStorage.getItem("sn_user_session");
            if (savedSession) {
                try {
                    const parsed = JSON.parse(savedSession);
                    setUser(parsed);
                    setProfileName(parsed.name || "");
                    setProfilePhone(parsed.phone || "");
                    setProfileEmail(parsed.email || "");
                    setOwnerName(parsed.name || "");
                    setWhatsappNumber(parsed.phone || "");
                } catch (e) {
                    console.error("Failed to parse user session", e);
                }
            } else {
                setUser({
                    name: "abhishek",
                    phone: "9876543210",
                    email: "abhishek@example.com",
                });
                setProfileName("abhishek");
                setProfilePhone("9876543210");
                setOwnerName("abhishek");
                setWhatsappNumber("9876543210");
            }

            const loadListings = () => {
                const savedListings = localStorage.getItem("sn_user_listings");
                if (savedListings) {
                    try {
                        setListings(JSON.parse(savedListings));
                    } catch (e) {
                        console.error("Failed to parse listings", e);
                    }
                }
            };
            loadListings();

            const handleStorageChange = (e) => {
                if (!e.key || e.key === "sn_user_listings") {
                    loadListings();
                }
            };
            window.addEventListener("storage", handleStorageChange);
            window.addEventListener("sn_listings_updated", loadListings);
            return () => {
                window.removeEventListener("storage", handleStorageChange);
                window.removeEventListener("sn_listings_updated", loadListings);
            };
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("sn_user_session");
            window.location.href = "/Home";
        }
    };

    const handleCreateListing = (e) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        setIsSubmitting(true);
        setTimeout(() => {
            const newItem = {
                id: Date.now().toString(),
                title: newTitle.trim(),
                category: newCategory || "B2B Deals & Wholesale",
                owner: ownerName.trim() || user?.name || "SN Business Vendor",
                phone: whatsappNumber.trim() || user?.phone || "",
                city: "Sant Kabir Nagar",
                address: newAddress.trim() || "Sant Kabir Nagar",
                website: newWebsite.trim(),
                description: businessDescription.trim(),
                status: "pending", // Newly submitted listing starts in pending verification
                createdAt: new Date().toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                }),
            };

            const updated = [newItem, ...listings];
            setListings(updated);
            if (typeof window !== "undefined") {
                localStorage.setItem("sn_user_listings", JSON.stringify(updated));
                window.dispatchEvent(new Event("storage"));
                window.dispatchEvent(new Event("sn_listings_updated"));
                window.dispatchEvent(new Event("sn_ads_updated"));
            }

            setIsSubmitting(false);
            setFormSubmitted(true);
        }, 500);
    };

    const handleSaveProfile = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...user,
            name: profileName.trim(),
            phone: profilePhone.trim(),
            email: profileEmail.trim(),
        };
        setUser(updatedUser);
        if (typeof window !== "undefined") {
            localStorage.setItem("sn_user_session", JSON.stringify(updatedUser));
        }
        setProfileSaved(true);
        setTimeout(() => setProfileSaved(false), 2500);
    };

    // Metrics
    const activeCount = listings.filter((item) => item.status === "active").length;
    const pendingCount = listings.filter((item) => item.status === "pending").length;
    const inactiveCount = listings.filter((item) => item.status === "inactive").length;
    const rejectedCount = listings.filter((item) => item.status === "rejected").length;

    const displayName = user?.name ? user.name.toLowerCase() : "abhishek";

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col selection:bg-[#ff5a00] selection:text-white">
            {/* 1. SLIM CLEAN HEADER */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-2xs">
                <div className="max-w-5xl mx-auto px-3.5 sm:px-6 h-13 sm:h-14 flex items-center justify-between gap-3">
                    {/* Brand Logo */}
                    <a href="/Home" className="flex items-center text-lg sm:text-xl font-black tracking-tight shrink-0">
                        <span className="text-red-600">SN</span>
                        <span className="text-[#0c1a2c]">business</span>
                    </a>

                    {/* Right Action Controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <a
                            href="/Home"
                            className="hidden xs:flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-50/70 font-semibold text-[11px] sm:text-xs transition-all shadow-2xs"
                        >
                            <CompassIcon className="w-3 h-3 text-blue-600" />
                            <span>Browse</span>
                        </a>

                        <button
                            onClick={() => {
                                setFormSubmitted(false);
                                setIsAddModalOpen(true);
                            }}
                            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full border border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-50/70 font-semibold text-[11px] sm:text-xs transition-all shadow-2xs cursor-pointer"
                        >
                            <MegaphoneIcon className="w-3 h-3 text-blue-600" />
                            <span className="hidden xs:inline">Advertise</span>
                            <span className="xs:hidden">Ad</span>
                        </button>

                        {/* Notifications Bell */}
                        <button
                            onClick={() => setActiveTab("notifications")}
                            className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all cursor-pointer"
                            title="Notifications"
                        >
                            <BellIcon className="w-3.5 h-3.5" />
                            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#ff5a00] ring-1.5 ring-white"></span>
                        </button>

                        {/* User Avatar with Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-400 to-[#ff5a00] text-white flex items-center justify-center font-bold text-xs shadow-xs hover:opacity-95 transition-all cursor-pointer"
                                title="Account Settings"
                            >
                                {displayName ? displayName.charAt(0).toUpperCase() : "U"}
                            </button>

                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                                    <div className="px-3 py-1.5 border-b border-slate-100">
                                        <p className="text-xs font-black text-slate-900 capitalize truncate">{user?.name || "User"}</p>
                                        <p className="text-[10px] text-slate-400 truncate">{user?.phone || user?.email || "SN Member"}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setActiveTab("profile");
                                            setUserMenuOpen(false);
                                        }}
                                        className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 font-medium cursor-pointer"
                                    >
                                        Profile Settings
                                    </button>
                                    <a
                                        href="/Home"
                                        className="block px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                                    >
                                        Back to Home
                                    </a>
                                    <div className="border-t border-slate-100 my-1"></div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 font-bold cursor-pointer"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. REFINED SUB-NAV PILLS BAR */}
            <div className="bg-white border-b border-slate-200/80 sticky top-13 sm:top-14 z-30 shadow-2xs">
                <div className="max-w-5xl mx-auto px-3.5 sm:px-6">
                    <nav className="flex items-center gap-1.5 sm:gap-2 py-2 overflow-x-auto no-scrollbar touch-pan-x">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer ${
                                activeTab === "dashboard"
                                    ? "bg-[#ff5a00] text-white shadow-2xs shadow-orange-500/20"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70"
                            }`}
                        >
                            <DashboardIcon className="w-3 h-3" />
                            <span>Dashboard</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("listings")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer ${
                                activeTab === "listings"
                                    ? "bg-[#ff5a00] text-white shadow-2xs shadow-orange-500/20"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70"
                            }`}
                        >
                            <StorefrontIcon className="w-3 h-3" />
                            <span>My Listings</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer ${
                                activeTab === "profile"
                                    ? "bg-[#ff5a00] text-white shadow-2xs shadow-orange-500/20"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70"
                            }`}
                        >
                            <UserIcon className="w-3 h-3" />
                            <span>Profile</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("transactions")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer ${
                                activeTab === "transactions"
                                    ? "bg-[#ff5a00] text-white shadow-2xs shadow-orange-500/20"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70"
                            }`}
                        >
                            <CreditCardIcon className="w-3 h-3" />
                            <span>Transactions</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("notifications")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer ${
                                activeTab === "notifications"
                                    ? "bg-[#ff5a00] text-white shadow-2xs shadow-orange-500/20"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70"
                            }`}
                        >
                            <BellIcon className="w-3 h-3" />
                            <span>Notifications</span>
                        </button>
                    </nav>
                </div>
            </div>

            {/* 3. PROPORTIONAL & BALANCED MAIN CONTENT */}
            <main className="flex-1 max-w-5xl mx-auto px-3.5 sm:px-6 py-5 sm:py-6 w-full">
                {/* --- TAB 1: DASHBOARD --- */}
                {activeTab === "dashboard" && (
                    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-150">
                        {/* Compact Header with User Badge & Quick Add Button */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                        Welcome, {displayName}
                                    </h1>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                                        <ShieldCheckIcon className="w-3 h-3 text-emerald-600" />
                                        Verified
                                    </span>
                                </div>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                                    <span>Here&apos;s a snapshot of your account</span>
                                    <span>•</span>
                                    <span className="inline-flex items-center gap-0.5 text-slate-600 font-medium">
                                        <MapPinIcon className="w-3 h-3 text-amber-500" />
                                        Sant Kabir Nagar
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 flex-wrap">
                                <button
                                    onClick={() => {
                                        setFormSubmitted(false);
                                        setIsAddModalOpen(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-1.5 bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-xs px-4 py-2 rounded-full shadow-2xs active:scale-95 transition-all cursor-pointer"
                                >
                                    <PlusIcon className="w-3.5 h-3.5" />
                                    <span>Add Listing</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedPlanFeedback(null);
                                        setIsPremiumModalOpen(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-full shadow-2xs active:scale-95 transition-all cursor-pointer border border-blue-500/30"
                                >
                                    <svg className="w-3.5 h-3.5 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                                    </svg>
                                    <span>Add Premium Plan</span>
                                </button>
                            </div>
                        </div>

                        {/* 4 Sleek Proportional Metric Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
                            {/* 1. ACTIVE */}
                            <div className="bg-white border border-slate-200/80 hover:border-emerald-300 rounded-xl py-3.5 sm:py-4 px-3.5 text-center shadow-2xs transition-all group">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700 transition-colors">
                                        ACTIVE
                                    </span>
                                </div>
                                <span className="block text-xl sm:text-2xl font-black text-slate-900">
                                    {activeCount}
                                </span>
                            </div>

                            {/* 2. PENDING */}
                            <div className="bg-white border border-slate-200/80 hover:border-amber-300 rounded-xl py-3.5 sm:py-4 px-3.5 text-center shadow-2xs transition-all group">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-amber-700 transition-colors">
                                        PENDING
                                    </span>
                                </div>
                                <span className="block text-xl sm:text-2xl font-black text-slate-900">
                                    {pendingCount}
                                </span>
                            </div>

                            {/* 3. INACTIVE */}
                            <div className="bg-white border border-slate-200/80 hover:border-slate-400 rounded-xl py-3.5 sm:py-4 px-3.5 text-center shadow-2xs transition-all group">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-slate-700 transition-colors">
                                        INACTIVE
                                    </span>
                                </div>
                                <span className="block text-xl sm:text-2xl font-black text-slate-900">
                                    {inactiveCount}
                                </span>
                            </div>

                            {/* 4. REJECTED */}
                            <div className="bg-white border border-slate-200/80 hover:border-rose-300 rounded-xl py-3.5 sm:py-4 px-3.5 text-center shadow-2xs transition-all group">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-rose-700 transition-colors">
                                        REJECTED
                                    </span>
                                </div>
                                <span className="block text-xl sm:text-2xl font-black text-slate-900">
                                    {rejectedCount}
                                </span>
                            </div>
                        </div>

                        {/* Recent Listings Box */}
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <StorefrontIcon className="w-4 h-4 text-slate-600" />
                                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                                        Recent Listings
                                    </h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setFormSubmitted(false);
                                        setIsAddModalOpen(true);
                                    }}
                                    className="text-xs font-bold text-[#ff5a00] hover:text-[#e04f00] hover:underline cursor-pointer"
                                >
                                    + Add New
                                </button>
                            </div>

                            {listings.length === 0 ? (
                                <div className="py-8 text-center">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-2">
                                        <StorefrontIcon className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                        You haven&apos;t posted any listings yet.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setIsAddModalOpen(true);
                                        }}
                                        className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline mt-2 inline-flex items-center gap-1 cursor-pointer"
                                    >
                                        <span>View all my listings</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="mt-3 divide-y divide-slate-100">
                                    {listings.slice(0, 5).map((item) => (
                                        <div
                                            key={item.id}
                                            className="py-3 flex items-center justify-between gap-3 hover:bg-slate-50/70 px-2 rounded-lg transition-colors"
                                        >
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{item.title}</h3>
                                                    <span
                                                        className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase border ${
                                                            item.status === "pending" || !item.status
                                                                ? "bg-amber-50 text-amber-700 border-amber-200"
                                                                : item.status === "rejected"
                                                                ? "bg-rose-50 text-rose-700 border-rose-200"
                                                                : "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                        }`}
                                                    >
                                                        {item.status === "pending" || !item.status ? "Pending" : item.status}
                                                    </span>
                                                </div>
                                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                                    {item.category} • {item.city} {item.createdAt && `• ${item.createdAt}`}
                                                </p>
                                            </div>
                                            <span className="text-[11px] text-slate-400 font-mono shrink-0">
                                                #{item.id.slice(-4)}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="pt-3">
                                        <button
                                            onClick={() => setActiveTab("listings")}
                                            className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                                        >
                                            View all listings ({listings.length}) →
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Distinct Promotional Banner Strip with "FREE BUSINESS LISTING" & "PREMIUM PLAN" buttons */}
                        <div className="bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/80 border border-sky-100/90 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
                            <div className="space-y-1.5 max-w-lg">
                                <div className="flex items-center text-xl sm:text-2xl font-black tracking-tight">
                                    <span className="text-red-600">SN</span>
                                    <span className="text-[#0c1a2c]">business</span>
                                </div>
                                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                    India&apos;s local search engine. Find{" "}
                                    <span className="font-bold text-blue-600">Doctors, B2B, Real Estate</span>, and{" "}
                                    <span className="font-bold text-blue-600">100+ categories</span> in your city.
                                </p>
                            </div>

                            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto shrink-0">
                                <button
                                    onClick={() => {
                                        setFormSubmitted(false);
                                        setIsAddModalOpen(true);
                                    }}
                                    className="bg-[#ff5a00] hover:bg-[#e04f00] text-white font-black text-[11px] sm:text-xs uppercase tracking-wide px-4 sm:px-5 py-2.5 rounded-full shadow-xs active:scale-95 transition-all text-center cursor-pointer shrink-0"
                                >
                                    FREE BUSINESS LISTING
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedPlanFeedback(null);
                                        setIsPremiumModalOpen(true);
                                    }}
                                    className="bg-white hover:bg-slate-50 border border-blue-200 text-blue-600 font-black text-[11px] sm:text-xs uppercase tracking-wide px-4 sm:px-5 py-2.5 rounded-full shadow-2xs active:scale-95 transition-all text-center cursor-pointer shrink-0"
                                >
                                    PREMIUM PLAN
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TAB 2: MY LISTINGS --- */}
                {activeTab === "listings" && (
                    <div className="space-y-4 animate-in fade-in duration-150">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                            <div>
                                <h1 className="text-xl font-black text-slate-900 tracking-tight">My Listings</h1>
                                <p className="text-xs text-slate-500 mt-0.5">Manage your active business listings and local services</p>
                            </div>
                            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 flex-wrap">
                                <button
                                    onClick={() => {
                                        setFormSubmitted(false);
                                        setIsAddModalOpen(true);
                                    }}
                                    className="inline-flex items-center gap-1.5 bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-xs px-4 py-2 rounded-full shadow-2xs active:scale-95 transition-all cursor-pointer"
                                >
                                    <PlusIcon className="w-3.5 h-3.5" />
                                    <span>Add New Listing</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedPlanFeedback(null);
                                        setIsPremiumModalOpen(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-full shadow-2xs active:scale-95 transition-all cursor-pointer border border-blue-500/30"
                                >
                                    <svg className="w-3.5 h-3.5 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                                    </svg>
                                    <span>Add Premium Plan</span>
                                </button>
                            </div>
                        </div>

                        {listings.length === 0 ? (
                            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 text-center shadow-2xs">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5a00] flex items-center justify-center mx-auto mb-2.5">
                                    <StorefrontIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-800">No Listings Yet</h3>
                                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                                    List your school, shop, clinic, or service in Sant Kabir Nagar.
                                </p>
                                <button
                                    onClick={() => {
                                        setFormSubmitted(false);
                                        setIsAddModalOpen(true);
                                    }}
                                    className="mt-3.5 px-4 py-1.5 bg-[#ff5a00] text-white text-xs font-bold rounded-full shadow-xs hover:bg-[#e04f00] cursor-pointer"
                                >
                                    Create Free Listing
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {listings.map((item) => (
                                    <div key={item.id} className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                                                <span className="text-[11px] text-slate-500">{item.category}</span>
                                            </div>
                                            <span
                                                className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase border ${
                                                    item.status === "pending" || !item.status
                                                        ? "bg-amber-50 text-amber-700 border-amber-200"
                                                        : item.status === "rejected"
                                                        ? "bg-rose-50 text-rose-700 border-rose-200"
                                                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                }`}
                                            >
                                                {item.status === "pending" || !item.status ? "Pending Verification" : item.status}
                                            </span>
                                        </div>

                                        <div className="text-[11px] text-slate-600 space-y-0.5 pt-2 border-t border-slate-100">
                                            <p className="flex items-center justify-between">
                                                <span className="text-slate-400">Phone:</span>
                                                <span className="font-medium">{item.phone || "Not provided"}</span>
                                            </p>
                                            <p className="flex items-center justify-between">
                                                <span className="text-slate-400">City:</span>
                                                <span className="font-medium">{item.city}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* --- TAB 3: PROFILE --- */}
                {activeTab === "profile" && (
                    <div className="max-w-xl bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs animate-in fade-in duration-150">
                        <div className="pb-3.5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">Account Profile</h2>
                            <p className="text-xs text-slate-500 mt-0.5">Manage your personal information and contact details</p>
                        </div>

                        {profileSaved && (
                            <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2">
                                <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Profile updated successfully!</span>
                            </div>
                        )}

                        <form onSubmit={handleSaveProfile} className="mt-4 space-y-3.5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={profileName}
                                    onChange={(e) => setProfileName(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number</label>
                                <input
                                    type="text"
                                    value={profilePhone}
                                    onChange={(e) => setProfilePhone(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                                    placeholder="10-digit mobile number"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={profileEmail}
                                    onChange={(e) => setProfileEmail(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                                    placeholder="your-email@domain.com"
                                />
                            </div>

                            <div className="pt-2 flex items-center gap-2.5">
                                <button
                                    type="submit"
                                    className="bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-xs px-5 py-2 rounded-full shadow-2xs active:scale-95 transition-all cursor-pointer"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 font-bold text-xs px-4 py-2 rounded-full transition-all cursor-pointer"
                                >
                                    Log Out
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* --- TAB 4: TRANSACTIONS --- */}
                {activeTab === "transactions" && (
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3 animate-in fade-in duration-150">
                        <h2 className="text-lg font-bold text-slate-900">Billing &amp; Transactions</h2>
                        <p className="text-xs text-slate-500">Track quotes, featured badges, and advertising receipts</p>

                        <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center justify-between gap-3 mt-3">
                            <div>
                                <span className="text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                    ACTIVE PLAN
                                </span>
                                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Free Business Listing Tier</h3>
                                <p className="text-[11px] text-slate-500">Unlimited profile views &amp; customer enquiries</p>
                            </div>
                            <span className="text-sm sm:text-base font-black text-slate-900">₹0 Free</span>
                        </div>
                    </div>
                )}

                {/* --- TAB 5: NOTIFICATIONS --- */}
                {activeTab === "notifications" && (
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3 animate-in fade-in duration-150">
                        <h2 className="text-lg font-bold text-slate-900">Notifications</h2>
                        <div className="space-y-2.5 mt-3">
                            <div className="p-3 rounded-xl border border-blue-100 bg-blue-50/40 flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">Welcome to SN Business!</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Your dashboard is active and ready to use.</p>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                                <div>
                                    <p className="text-xs font-bold text-slate-700">Add Your First Business Listing</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">List your services to reach buyers in Sant Kabir Nagar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* --- FULL SCREEN BUSINESS REGISTRATION ONBOARDING FLOW (MATCHING SCREENSHOTS 1 & 2) --- */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150">
                    <div className="min-h-full flex flex-col justify-between bg-[#f8fafc] text-slate-800">
                        {/* Top Bar with Brand & Back Button */}
                        <div className="bg-[#991b1b] text-white px-4 sm:px-8 py-3.5 sticky top-0 z-50 flex items-center justify-between shadow-md">
                            <div className="flex items-center gap-2">
                                <a href="/Home" className="flex items-center text-lg sm:text-xl font-black tracking-tight shrink-0">
                                    <span className="text-white">SN</span>
                                    <span className="text-red-200">business</span>
                                </a>
                                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-2.5 py-0.5 rounded-full border border-white/20 ml-2">
                                    Free Business Registration
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    setIsAddModalOpen(false);
                                    setFormSubmitted(false);
                                }}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                            >
                                <CloseIcon className="w-3.5 h-3.5" />
                                <span>Back to Dashboard</span>
                            </button>
                        </div>

                        {/* Top Hero Red Bar (Exact from Screenshot 2 in Red) */}
                        <div className="bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#b91c1c] pb-20 pt-8 px-4 sm:px-6 text-center text-white relative overflow-hidden">
                            {/* Decorative background dot matrices and radial glows */}
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-10 grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                                ))}
                            </div>
                            <div className="absolute top-8 right-4 sm:top-10 sm:right-10 grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                                ))}
                            </div>
                            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-red-400/25 blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-rose-400/25 blur-3xl pointer-events-none" />

                            <div className="relative z-10 max-w-3xl mx-auto space-y-2">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-xs">
                                    Grow Your Business with SN Business
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base text-red-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
                                    List your business online, reach more customers, and get direct calls and WhatsApp enquiries.
                                </p>
                            </div>
                        </div>

                        {/* Main Container Overlapping Hero */}
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-14 relative z-10 w-full pb-16">
                            {/* 1. THREE VALUE PROPOSITION CARDS (SCREENSHOT 2) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                                {/* Card 1: Online Business */}
                                <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/80 p-6 sm:p-7 text-center flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e6f8ee] flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 9l1.5-5h15l1.5 5" />
                                            <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                            <path d="M9 22v-6h6v6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                                        Online Business
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                                        Show your business to more people.
                                    </p>
                                </div>

                                {/* Card 2: Find Local Customers */}
                                <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/80 p-6 sm:p-7 text-center flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fff0e6] flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 21c-4.5-5.5-7-9.5-7-13a7 7 0 1 1 14 0c0 3.5-2.5 7.5-7 13z" />
                                            <circle cx="12" cy="8.5" r="2.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                                        Find Local Customers
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                                        Help nearby customers find you easily.
                                    </p>
                                </div>

                                {/* Card 3: Get More Enquiries */}
                                <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/80 p-6 sm:p-7 text-center flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eaf1fd] flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                                                fill="#2563eb"
                                            />
                                            <path
                                                d="M16.5 14.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1-.6-.5-1.1-1.2-1.2-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3s-.4-1-.6-1.4c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5.5.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.2-.2-.2-.4-.3z"
                                                fill="#ffffff"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                                        Get More Enquiries
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                                        Get calls and WhatsApp messages from customers.
                                    </p>
                                </div>
                            </div>

                            {/* 2. LIST YOUR BUSINESS IN 4 EASY STEPS (COMPACT & SLEEK) */}
                            <div className="my-10 sm:my-14 text-center relative max-w-4xl mx-auto">
                                {/* Subtle decorative background dots */}
                                <div className="absolute top-0 left-0 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none hidden sm:grid">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div key={i} className="w-1 h-1 rounded-full bg-blue-500" />
                                    ))}
                                </div>
                                <div className="absolute top-0 right-0 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none hidden sm:grid">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div key={i} className="w-1 h-1 rounded-full bg-blue-500" />
                                    ))}
                                </div>

                                {/* Top Pill Badge */}
                                <div className="inline-block">
                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/80 text-[10px] font-black uppercase tracking-widest shadow-2xs">
                                        Get Started
                                    </span>
                                </div>

                                {/* Heading with decorative accents */}
                                <div className="relative flex items-center justify-center gap-2.5 mt-2">
                                    <div className="hidden sm:flex flex-col gap-1 -rotate-12 opacity-80">
                                        <div className="w-3 h-0.5 bg-blue-500 rounded-full" />
                                        <div className="w-4 h-0.5 bg-blue-500 rounded-full ml-1" />
                                    </div>

                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                                        List Your Business in <span className="text-blue-600">4 Easy Steps</span>
                                    </h2>

                                    <div className="hidden sm:flex flex-col gap-1 rotate-12 opacity-80">
                                        <div className="w-3 h-0.5 bg-blue-500 rounded-full ml-auto" />
                                        <div className="w-4 h-0.5 bg-blue-500 rounded-full mr-1" />
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1 leading-relaxed font-normal">
                                    Create your listing and start getting local customers quickly.
                                </p>

                                {/* 4 Step Cards Grid - Compact Version */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 mt-8 items-stretch">
                                    {/* Card 1: Create Account */}
                                    <div className="relative bg-white rounded-2xl p-4 sm:p-4.5 border-2 border-blue-500/80 shadow-[0_6px_20px_rgba(37,99,235,0.05)] flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-2.5 -left-2.5 w-6.5 h-6.5 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs border-2 border-white">
                                            1
                                        </div>

                                        {/* Central Graphic: Smartphone with Avatar & Plus */}
                                        <div className="w-16 h-18 relative flex items-center justify-center my-1">
                                            <div className="w-12 h-18 rounded-xl border-1.5 border-blue-500 bg-white shadow-2xs p-1 flex flex-col items-center justify-between relative overflow-hidden">
                                                <div className="w-3 h-0.5 bg-blue-200 rounded-full" />
                                                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center my-0.5">
                                                    <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="w-full space-y-0.5 mb-0.5 px-0.5">
                                                    <div className="h-1 bg-blue-100 rounded-full w-full" />
                                                    <div className="h-1 bg-blue-100 rounded-full w-3/4" />
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs border border-white">
                                                <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h4 className="text-sm font-bold text-slate-900 tracking-tight mt-2">
                                            Create Account
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                            Sign up with your mobile number and basic details.
                                        </p>

                                        {/* Connecting Arrow */}
                                        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-blue-500">
                                            <svg className="w-5 h-3" viewBox="0 0 24 12" fill="none">
                                                <path d="M2 6h16m0 0l-4-3m4 3l-4 3" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card 2: Add Business Details */}
                                    <div className="relative bg-white rounded-2xl p-4 sm:p-4.5 border-2 border-amber-400/90 shadow-[0_6px_20px_rgba(249,115,22,0.05)] flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-2.5 -left-2.5 w-6.5 h-6.5 rounded-full bg-[#f97316] text-white font-black text-xs flex items-center justify-center shadow-xs border-2 border-white">
                                            2
                                        </div>

                                        {/* Central Graphic: Document with Photo & Pointer Cursor */}
                                        <div className="w-16 h-18 relative flex items-center justify-center my-1">
                                            <div className="w-14 h-17 rounded-xl border-1.5 border-amber-300 bg-amber-50/20 shadow-2xs p-1.5 flex flex-col justify-between relative">
                                                <div className="flex items-start justify-between gap-1">
                                                    <div className="flex-1 space-y-1 pt-0.5">
                                                        <div className="h-1 bg-amber-200/90 rounded-full w-full" />
                                                        <div className="h-1 bg-amber-200/90 rounded-full w-4/5" />
                                                        <div className="h-1 bg-amber-200/90 rounded-full w-2/3" />
                                                    </div>
                                                    <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center shrink-0 shadow-2xs">
                                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                                            <polyline points="21 15 16 10 5 21" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <div className="h-1 bg-amber-200/60 rounded-full w-3/4" />
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-0.5 -right-0.5 pointer-events-none drop-shadow-xs">
                                                <svg className="w-5 h-5 text-slate-800 fill-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                                    <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h4 className="text-sm font-bold text-slate-900 tracking-tight mt-2">
                                            Add Business Details
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                            Add your business name, photos, address, category and services.
                                        </p>

                                        {/* Connecting Arrow */}
                                        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-amber-500">
                                            <svg className="w-5 h-3" viewBox="0 0 24 12" fill="none">
                                                <path d="M2 6h16m0 0l-4-3m4 3l-4 3" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card 3: Admin Approval */}
                                    <div className="relative bg-white rounded-2xl p-4 sm:p-4.5 border-2 border-emerald-500/80 shadow-[0_6px_20px_rgba(16,185,129,0.05)] flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-2.5 -left-2.5 w-6.5 h-6.5 rounded-full bg-[#10b981] text-white font-black text-xs flex items-center justify-center shadow-xs border-2 border-white">
                                            3
                                        </div>

                                        {/* Central Graphic: Document with Green Shield Check Badge */}
                                        <div className="w-16 h-18 relative flex items-center justify-center my-1">
                                            <div className="w-14 h-17 rounded-xl border-1.5 border-emerald-300 bg-emerald-50/20 shadow-2xs p-1.5 flex flex-col justify-between relative">
                                                <div className="w-4 h-1.5 bg-emerald-400 rounded-full mb-0.5" />
                                                <div className="space-y-1 flex-1 pt-0.5">
                                                    <div className="h-1 bg-emerald-200/90 rounded-full w-3/4" />
                                                    <div className="h-1 bg-emerald-200/90 rounded-full w-full" />
                                                    <div className="h-1 bg-emerald-200/90 rounded-full w-2/3" />
                                                    <div className="h-1 bg-emerald-200/90 rounded-full w-1/2" />
                                                </div>
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-7 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-xs border border-white">
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h4 className="text-sm font-bold text-slate-900 tracking-tight mt-2">
                                            Admin Approval
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                            Our team verifies and approves your business information.
                                        </p>

                                        {/* Connecting Arrow */}
                                        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-emerald-500">
                                            <svg className="w-5 h-3" viewBox="0 0 24 12" fill="none">
                                                <path d="M2 6h16m0 0l-4-3m4 3l-4 3" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card 4: Go Live & Get Leads */}
                                    <div className="relative bg-white rounded-2xl p-4 sm:p-4.5 border-2 border-purple-500/80 shadow-[0_6px_20px_rgba(139,92,246,0.05)] flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-2.5 -left-2.5 w-6.5 h-6.5 rounded-full bg-[#8b5cf6] text-white font-black text-xs flex items-center justify-center shadow-xs border-2 border-white">
                                            4
                                        </div>

                                        {/* Central Graphic: Browser Window with Shopfront & Growth Badge */}
                                        <div className="w-16 h-18 relative flex items-center justify-center my-1">
                                            <div className="w-15 h-15 rounded-xl border-1.5 border-purple-400 bg-white shadow-2xs flex flex-col overflow-hidden relative">
                                                <div className="bg-purple-600 px-1.5 py-0.5 flex items-center gap-0.5">
                                                    <div className="w-1 h-1 rounded-full bg-purple-300" />
                                                    <div className="w-1 h-1 rounded-full bg-purple-300" />
                                                    <div className="w-1 h-1 rounded-full bg-purple-300" />
                                                </div>
                                                <div className="flex-1 flex flex-col items-center justify-center p-1 bg-purple-50/40">
                                                    <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M3 9l1.5-5h15l1.5 5" />
                                                        <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                                        <path d="M9 22v-6h6v6" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs border border-white">
                                                <svg className="w-3 h-3 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h4 className="text-sm font-bold text-slate-900 tracking-tight mt-2">
                                            Go Live &amp; Get Leads
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                            Your business appears on our app and website and start receiving enquiries.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. BUSINESS REGISTRATION CARD (SLEEK & COMPACT REDESIGN) */}
                            <div className="max-w-[860px] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden flex flex-col md:flex-row items-stretch">
                                {/* Left Red Column */}
                                <div className="bg-[#b91c1c] text-white p-5 sm:p-6 md:p-7 md:w-[38%] flex flex-col justify-between relative overflow-hidden">
                                    {/* Subtle decorative mesh glows */}
                                    <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-red-400/20 blur-2xl pointer-events-none" />
                                    <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-rose-400/20 blur-2xl pointer-events-none" />

                                    <div className="relative z-10">
                                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug">
                                            Har Local<br />
                                            Business<br />
                                            Badi Pehchaan<br />
                                            Ke Saath
                                        </h3>
                                        <p className="text-[11px] sm:text-xs text-red-100/90 mt-2 sm:mt-2.5 leading-relaxed font-normal">
                                            Apne business ko list karein aur apne shehar ke hazaaron customers tak pahunchein.
                                        </p>

                                        {/* Feature Card Box (Clean White Box) */}
                                        <div className="mt-3.5 sm:mt-4 bg-white text-slate-800 rounded-xl p-3 sm:p-3.5 shadow-xs border border-red-100/20">
                                            <h5 className="text-xs sm:text-sm font-bold text-[#b91c1c] font-serif">
                                                Free Listing for 1 Month
                                            </h5>
                                            <p className="text-[10px] sm:text-[11px] text-slate-600 mt-0.5 leading-snug">
                                                Koi hidden charges nahi. Simple aur transparent process.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Contact Section */}
                                    <div className="relative z-10 border-t border-white/20 pt-3 mt-5 sm:mt-6">
                                        <span className="text-[9px] sm:text-[10px] font-bold text-white/80 uppercase tracking-widest block">
                                            KISI BHI SAWAAL KE LIYE
                                        </span>
                                        <span className="text-[11px] text-white/90 block mt-0.5">
                                            Call us anytime
                                        </span>
                                        <a href="tel:91XXXXXXXX" className="text-base sm:text-lg font-black text-white hover:text-red-100 transition-colors mt-0.5 block tracking-wide">
                                            91XXXXXXXX
                                        </a>
                                    </div>
                                </div>

                                {/* Right Form Column */}
                                <div className="bg-white p-5 sm:p-6 md:p-7 md:w-[62%] flex flex-col justify-between">
                                    <div>
                                        {/* Header */}
                                        <div className="mb-4">
                                            <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
                                                Business <span className="text-[#b91c1c]">Registration</span>
                                            </h4>
                                            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                                                Apne business ki basic jankari bharein aur listing ke liye request bhejein.
                                            </p>
                                        </div>

                                        {formSubmitted ? (
                                            <div className="my-auto py-8 text-center space-y-2.5">
                                                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                                                    <CheckCircleIcon className="w-7 h-7 text-emerald-600" />
                                                </div>
                                                <h4 className="text-lg font-black text-slate-900">Listing Request Submitted!</h4>
                                                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                                                    Thank you! Our onboarding team will call or WhatsApp you within 24 hours to verify and activate your digital storefront.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setIsAddModalOpen(false);
                                                        setFormSubmitted(false);
                                                    }}
                                                    className="mt-3 px-5 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-bold rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
                                                >
                                                    Back to Dashboard
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleCreateListing} className="space-y-2.5 sm:space-y-3">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                                    {/* Business Name */}
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                                            Business Name <span className="text-[#b91c1c]">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={newTitle}
                                                            onChange={(e) => setNewTitle(e.target.value)}
                                                            placeholder="SN Studio"
                                                            className="w-full bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-[#b91c1c] focus:ring-1 focus:ring-red-100 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] text-slate-900 transition-all focus:outline-none"
                                                        />
                                                    </div>

                                                    {/* Business Category */}
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                                            Business Category <span className="text-[#b91c1c]">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                value={newCategory}
                                                                onChange={(e) => setNewCategory(e.target.value)}
                                                                required
                                                                className="w-full bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-[#b91c1c] focus:ring-1 focus:ring-red-100 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] text-slate-900 transition-all focus:outline-none cursor-pointer appearance-none pr-8"
                                                            >
                                                                <option value="" disabled>Select Category</option>
                                                                <option value="Schools & Colleges">Schools &amp; Colleges</option>
                                                                <option value="B2B Deals & Wholesale">B2B Deals &amp; Wholesale</option>
                                                                <option value="Repairs & Services">Repairs &amp; Services</option>
                                                                <option value="Advertising & Marketing">Advertising &amp; Marketing</option>
                                                                <option value="Real Estate & Rent">Real Estate &amp; Rent</option>
                                                                <option value="Doctors & Hospitals">Doctors &amp; Hospitals</option>
                                                                <option value="Coaching & Tuition">Coaching &amp; Tuition</option>
                                                                <option value="Restaurants & Food">Restaurants &amp; Food</option>
                                                                <option value="Tours & Travels">Tours &amp; Travels</option>
                                                            </select>
                                                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Owner Name */}
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                                            Owner Name <span className="text-[#b91c1c]">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={ownerName}
                                                            onChange={(e) => setOwnerName(e.target.value)}
                                                            placeholder="Enter owner name"
                                                            className="w-full bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-[#b91c1c] focus:ring-1 focus:ring-red-100 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] text-slate-900 transition-all focus:outline-none"
                                                        />
                                                    </div>

                                                    {/* Mobile Number */}
                                                    <div>
                                                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                                            Mobile Number <span className="text-[#b91c1c]">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={whatsappNumber}
                                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                                            placeholder="91XXXXXXXX"
                                                            className="w-full bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-[#b91c1c] focus:ring-1 focus:ring-red-100 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] text-slate-900 transition-all focus:outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Business Address */}
                                                <div>
                                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                                        Business Address <span className="text-[#b91c1c]">*</span>
                                                    </label>
                                                    <textarea
                                                        rows={2}
                                                        value={newAddress}
                                                        onChange={(e) => setNewAddress(e.target.value)}
                                                        placeholder="Shop no, Street, Area, City, State, Pin Code"
                                                        className="w-full bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-[#b91c1c] focus:ring-1 focus:ring-red-100 rounded-lg px-3 py-1.5 text-xs sm:text-[13px] text-slate-900 transition-all focus:outline-none resize-none"
                                                    />
                                                </div>

                                                {/* Business Description (Optional) */}
                                                <div>
                                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                                        Business Description <span className="text-slate-400 font-normal">(Optional)</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={businessDescription}
                                                        onChange={(e) => setBusinessDescription(e.target.value)}
                                                        placeholder="Tell us about your business, products or services..."
                                                        className="w-full bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-[#b91c1c] focus:ring-1 focus:ring-red-100 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] text-slate-900 transition-all focus:outline-none"
                                                    />
                                                </div>

                                                {/* Submit Button in Red */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-5 rounded-xl shadow-md hover:shadow-red-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-3.5"
                                                >
                                                    {isSubmitting ? (
                                                        <span>Submitting Request...</span>
                                                    ) : (
                                                        <span>Submit Listing Request</span>
                                                    )}
                                                </button>

                                                <p className="text-[10px] text-slate-400 text-center mt-2">
                                                    By submitting, you agree to our{" "}
                                                    <span className="text-[#b91c1c] font-semibold hover:underline cursor-pointer">Terms of Service</span> and{" "}
                                                    <span className="text-[#b91c1c] font-semibold hover:underline cursor-pointer">Privacy Policy</span>.
                                                </p>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer in Modal */}
                        <Footer />
                    </div>
                </div>
            )}

            {/* --- ADVERTISE / PREMIUM GROWTH PLANS MODAL (EXACT REDESIGN FROM SCREENSHOT) --- */}
            {isPremiumModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150">
                    <div className="min-h-full flex flex-col justify-between bg-gradient-to-b from-sky-50/50 via-white to-slate-50 text-slate-800">
                        {/* Top Bar with Brand & Back Button */}
                        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 sticky top-0 z-50 flex items-center justify-between shadow-2xs">
                            <div className="flex items-center gap-2">
                                <a href="/Home" className="flex items-center text-lg sm:text-xl font-black tracking-tight shrink-0">
                                    <span className="text-red-600">SN</span>
                                    <span className="text-[#0c1a2c]">business</span>
                                </a>
                                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-200 ml-2">
                                    Growth &amp; Advertising Plans
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    setIsPremiumModalOpen(false);
                                    setSelectedPlanFeedback(null);
                                }}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                            >
                                <CloseIcon className="w-3.5 h-3.5" />
                                <span>Back to Dashboard</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
                            {/* Hero Header */}
                            <div className="text-center max-w-3xl mx-auto relative">
                                {/* Decorative dots matrix in top right (exact from screenshot) */}
                                <div className="absolute -top-3 right-0 sm:-right-8 grid grid-cols-5 gap-1.5 opacity-25 pointer-events-none hidden sm:grid">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    ))}
                                </div>

                                <div className="inline-block mb-2.5">
                                    <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#dbeafe] text-[#1d4ed8] text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-2xs">
                                        GROW YOUR BUSINESS
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                    Advertise on <span className="text-[#0066ff]">SN Business</span> Platform
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-2.5 leading-relaxed font-normal">
                                    Reach thousands of local customers and beyond. Choose a plan that fits your business goals.
                                </p>
                            </div>

                            {/* Plan Selection Confirmation Notice (if clicked) */}
                            {selectedPlanFeedback && (
                                <div className="max-w-xl mx-auto mt-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 text-center shadow-sm animate-in fade-in duration-200">
                                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                                        <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <h4 className="text-sm font-bold">You selected {selectedPlanFeedback}</h4>
                                    <p className="text-xs text-emerald-700 mt-1">
                                        Thank you! Our growth executive will contact you on WhatsApp or phone shortly to help you activate your campaign.
                                    </p>
                                    <button
                                        onClick={() => setSelectedPlanFeedback(null)}
                                        className="mt-3 px-4 py-1.5 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-700 transition-all cursor-pointer"
                                    >
                                        OK
                                    </button>
                                </div>
                            )}

                            {/* 3 Plans Grid (Exact Design from Screenshot) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mt-10 items-stretch">
                                {/* CARD 1: Free Business Listing */}
                                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 relative">
                                    <div>
                                        {/* Top Header: Icon + Title + Free Badge */}
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-13 h-13 rounded-2xl bg-[#eaf2fd] flex items-center justify-center shrink-0 shadow-2xs">
                                                    <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M3 9l1.5-5h15l1.5 5" />
                                                        <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                                        <path d="M9 22v-6h6v6" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                                                    Free Business<br />Listing
                                                </h3>
                                            </div>
                                            <span className="bg-[#e7f8ef] text-[#059669] font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0 border border-emerald-200/60">
                                                FREE
                                            </span>
                                        </div>

                                        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                                            List your business at no cost and start receiving customer enquiries.
                                        </p>

                                        {/* Price */}
                                        <div className="mt-4 flex items-baseline">
                                            <span className="text-3xl sm:text-4xl font-black text-[#0066ff] tracking-tight">₹0</span>
                                            <span className="text-xs sm:text-sm text-slate-500 font-medium ml-1.5">/ 1 Month</span>
                                        </div>

                                        <div className="border-t border-slate-100 my-5" />

                                        {/* Features List */}
                                        <ul className="space-y-3">
                                            {[
                                                "Create business profile",
                                                "Add contact details",
                                                "Appear in search results",
                                                "Receive customer enquiries",
                                                "Basic listing visibility",
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                                                    <div className="w-4.5 h-4.5 rounded-full bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                                                        <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setIsPremiumModalOpen(false);
                                            setFormSubmitted(false);
                                            setIsAddModalOpen(true);
                                        }}
                                        className="w-full mt-7 py-3 px-4 rounded-xl bg-[#eaf2fd] hover:bg-blue-100 text-[#0066ff] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                                    >
                                        <span>List Your Business Free</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>

                                {/* CARD 2: Business Plus (MOST POPULAR) */}
                                <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#0066ff] shadow-[0_15px_40px_rgba(0,102,255,0.12)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 relative">
                                    {/* Most Popular Floating Pill */}
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0066ff] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 z-10 whitespace-nowrap">
                                        <span className="text-amber-300">👑</span>
                                        <span>MOST POPULAR</span>
                                    </div>

                                    <div>
                                        {/* Top Header: Icon + Title */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-13 h-13 rounded-2xl bg-[#eaf2fd] flex items-center justify-center shrink-0 shadow-2xs">
                                                <svg className="w-7 h-7 text-[#0066ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 3v18h18" />
                                                    <path d="M18 9l-5 5-4-4-3 3" />
                                                    <path d="M14 9h4v4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                                                Business Plus
                                            </h3>
                                        </div>

                                        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                                            Get higher visibility and more customer engagement.
                                        </p>

                                        {/* Price */}
                                        <div className="mt-4 flex items-baseline">
                                            <span className="text-3xl sm:text-4xl font-black text-[#0066ff] tracking-tight">₹999</span>
                                            <span className="text-xs sm:text-sm text-slate-500 font-medium ml-1.5">/ month</span>
                                        </div>

                                        <div className="border-t border-slate-100 my-5" />

                                        {/* Features List */}
                                        <ul className="space-y-3">
                                            {[
                                                "Everything in Free Listing",
                                                "Priority listing in search results",
                                                "Verified business badge",
                                                "Enquiry & click insights",
                                                "Priority support",
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                                                    <div className="w-4.5 h-4.5 rounded-full bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                                                        <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPlanFeedback("Business Plus (₹999/month)")}
                                        className="w-full mt-7 py-3.5 px-4 rounded-xl bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                                    >
                                        <span>Choose Business Plus</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>

                                {/* CARD 3: Premium Growth */}
                                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 relative">
                                    <div>
                                        {/* Top Header: Icon + Title */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-13 h-13 rounded-2xl bg-[#fff7e6] flex items-center justify-center shrink-0 shadow-2xs">
                                                <svg className="w-7 h-7 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                                                Premium Growth
                                            </h3>
                                        </div>

                                        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                                            For businesses that want maximum reach and brand growth.
                                        </p>

                                        {/* Price */}
                                        <div className="mt-4 flex items-baseline">
                                            <span className="text-3xl sm:text-4xl font-black text-[#0066ff] tracking-tight">₹1,999</span>
                                            <span className="text-xs sm:text-sm text-slate-500 font-medium ml-1.5">/ month</span>
                                        </div>

                                        <div className="border-t border-slate-100 my-5" />

                                        {/* Features List */}
                                        <ul className="space-y-3">
                                            {[
                                                "Everything in Business Plus",
                                                "Top search placement",
                                                "Homepage banner (selected category)",
                                                "Custom promotional campaigns",
                                                "Dedicated account manager",
                                                "Video / image promotion support",
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                                                    <div className="w-4.5 h-4.5 rounded-full bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                                                        <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPlanFeedback("Premium Growth (₹1,999/month)")}
                                        className="w-full mt-7 py-3.5 px-4 rounded-xl bg-white border border-[#0066ff] text-[#0066ff] hover:bg-blue-50/70 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                                    >
                                        <span>Choose Premium Growth</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer in Modal */}
                        <Footer />
                    </div>
                </div>
            )}

            {/* 4. FOOTER */}
            <Footer />
        </div>
    );
}
