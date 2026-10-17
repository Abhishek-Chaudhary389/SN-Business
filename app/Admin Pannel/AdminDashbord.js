"use client";

import React, { useState, useEffect } from "react";
import { CategoryIcon } from "../Home/page";

function SearchIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    );
}

function CloseXIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function PencilIcon({ className = "w-3 h-3" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
    );
}

function TrashIcon({ className = "w-3 h-3" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    );
}

function GlobeIcon({ className = "w-3.5 h-3.5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
    );
}

function CheckIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

// Default preset categories matching the live Home page
const DEFAULT_CATEGORIES = [
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
];

// Available Icon Presets
const ICON_PRESETS = [
    { id: "coaching", label: "Coaching / Book" },
    { id: "ias-pcs", label: "Civil Services / IAS" },
    { id: "library", label: "Library / Study" },
    { id: "tech-inst", label: "Tech Institute / Computer" },
    { id: "spoken-eng", label: "English / Language" },
    { id: "polytechnic", label: "Polytechnic / Gear" },
    { id: "dance", label: "Dance / Arts" },
    { id: "discount", label: "Discount / Sale" },
    { id: "expo", label: "Expo / Fair" },
    { id: "digital-ads", label: "Digital Ads / Megaphone" },
    { id: "hoardings", label: "Hoarding / Billboard" },
    { id: "pandit-ji", label: "Pandit Ji / Puja" },
    { id: "restaurant", label: "Restaurant / Food" },
    { id: "tiffin", label: "Tiffin / Meal" },
    { id: "loan", label: "Loan / Bank" },
    { id: "mehndi", label: "Mehndi / Beauty" },
    { id: "salon", label: "Salon / Spa" },
    { id: "ro-water", label: "RO / Water" },
    { id: "rent-home", label: "House / Flat Rent" },
    { id: "commercial-space", label: "Commercial Office / Shop" },
    { id: "pg-hostel", label: "Hostel / PG" },
    { id: "godown", label: "Warehouse / Godown" },
    { id: "plot-sale", label: "Plot / Land Sale" },
    { id: "flat-sale", label: "Flat / Property Sale" },
    { id: "scrap-sale", label: "Scrap / Recycling" },
    { id: "commercial-sale", label: "Commercial Sale" },
    { id: "chhota-hathi", label: "Loading / Mini Truck" },
    { id: "wedding-car", label: "Wedding Luxury Car" },
    { id: "travel-agency", label: "Tour / Travel Agency" },
    { id: "bike-car-repair", label: "Auto / Garage" },
    { id: "ac-repair", label: "AC / Refrigerator Repair" },
    { id: "electrician", label: "Electrician" },
    { id: "plumber", label: "Plumber" },
    { id: "cleaning", label: "Deep Cleaning" },
    { id: "b2b-deals", label: "B2B Wholesale" },
    { id: "legal-ca", label: "CA / Legal / Advocate" },
    { id: "doctor", label: "Doctor / Clinic / Medical" },
    { id: "industrial", label: "Industrial Machinery" },
];

export default function AdminDashboard({ onLogout }) {
    const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
    const [activeTab, setActiveTab] = useState("categories"); // overview, categories, leads, settings
    const [searchQuery, setSearchQuery] = useState("");
    const [toastMessage, setToastMessage] = useState("");

    // Modal state for adding/editing group
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const [editingGroup, setEditingGroup] = useState(null);
    const [groupForm, setGroupForm] = useState({ id: "", title: "", subtitle: "" });

    // Modal state for adding/editing item
    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [targetGroupId, setTargetGroupId] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [itemForm, setItemForm] = useState({ id: "", title: "", sub: "", iconType: "coaching" });

    // Load categories from localStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("sn_business_categories");
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setCategories(parsed);
                    }
                } catch (e) {
                    console.error("Failed to parse saved categories:", e);
                }
            }
        }
    }, []);

    // Save categories to localStorage
    const saveCategories = (newCategories) => {
        setCategories(newCategories);
        if (typeof window !== "undefined") {
            localStorage.setItem("sn_business_categories", JSON.stringify(newCategories));
        }
    };

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(""), 3500);
    };

    // Calculate totals
    const totalGroups = categories.length;
    const totalItems = categories.reduce((acc, g) => acc + (g.items?.length || 0), 0);

    // --- Group Operations ---
    const handleOpenAddGroup = () => {
        setEditingGroup(null);
        setGroupForm({ id: "", title: "", subtitle: "" });
        setIsGroupModalOpen(true);
    };

    const handleOpenEditGroup = (group) => {
        setEditingGroup(group);
        setGroupForm({ id: group.id, title: group.title, subtitle: group.subtitle || "" });
        setIsGroupModalOpen(true);
    };

    const handleSaveGroup = (e) => {
        e.preventDefault();
        if (!groupForm.title.trim()) return;

        const slug = groupForm.id.trim()
            ? groupForm.id.trim().toLowerCase().replace(/\s+/g, "-")
            : groupForm.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");

        if (editingGroup) {
            // Update existing group
            const updated = categories.map((g) =>
                g.id === editingGroup.id
                    ? { ...g, title: groupForm.title.trim().toUpperCase(), subtitle: groupForm.subtitle.trim() }
                    : g
            );
            saveCategories(updated);
            showToast(`कैटेगरी "${groupForm.title}" अपडेट हो गई!`);
        } else {
            // Create new group
            const newGroup = {
                id: slug,
                title: groupForm.title.trim().toUpperCase(),
                subtitle: groupForm.subtitle.trim(),
                items: [],
            };
            const updated = [...categories, newGroup];
            saveCategories(updated);
            showToast(`नई कैटेगरी "${groupForm.title}" जोड़ी गई! अब इसके अंदर आइटम्स जोड़ें।`);
        }

        setIsGroupModalOpen(false);
    };

    const handleDeleteGroup = (groupId, groupTitle) => {
        if (window.confirm(`क्या आप सचमुच कैटेगरी "${groupTitle}" और इसके सभी आइटम्स डिलीट करना चाहते हैं?`)) {
            const updated = categories.filter((g) => g.id !== groupId);
            saveCategories(updated);
            showToast(`कैटेगरी "${groupTitle}" डिलीट हो गई।`);
        }
    };

    // --- Item / Sub-Category Operations ---
    const handleOpenAddItem = (groupId) => {
        setTargetGroupId(groupId);
        setEditingItem(null);
        setItemForm({ id: "", title: "", sub: "", iconType: "coaching" });
        setIsItemModalOpen(true);
    };

    const handleOpenEditItem = (groupId, item) => {
        setTargetGroupId(groupId);
        setEditingItem(item);
        setItemForm({
            id: item.id,
            title: item.title,
            sub: item.sub || "",
            iconType: item.iconType || "coaching",
        });
        setIsItemModalOpen(true);
    };

    const handleSaveItem = (e) => {
        e.preventDefault();
        if (!itemForm.title.trim() || !targetGroupId) return;

        const itemId = itemForm.id.trim()
            ? itemForm.id.trim().toLowerCase().replace(/\s+/g, "-")
            : itemForm.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now().toString().slice(-4);

        const updated = categories.map((group) => {
            if (group.id !== targetGroupId) return group;

            let updatedItems;
            if (editingItem) {
                // Edit existing item
                updatedItems = group.items.map((it) =>
                    it.id === editingItem.id
                        ? { ...it, title: itemForm.title.trim(), sub: itemForm.sub.trim(), iconType: itemForm.iconType }
                        : it
                );
            } else {
                // Add new item to this group
                const newItem = {
                    id: itemId,
                    title: itemForm.title.trim(),
                    sub: itemForm.sub.trim(),
                    iconType: itemForm.iconType,
                };
                updatedItems = [...(group.items || []), newItem];
            }
            return { ...group, items: updatedItems };
        });

        saveCategories(updated);
        showToast(
            editingItem
                ? `सब-कैटेगरी "${itemForm.title}" अपडेट हो गई!`
                : `नई सब-कैटेगरी "${itemForm.title}" सफलतापूर्वक जोड़ी गई!`
        );
        setIsItemModalOpen(false);
    };

    const handleDeleteItem = (groupId, itemId, itemTitle) => {
        if (window.confirm(`क्या आप आइटम "${itemTitle}" हटाना चाहते हैं?`)) {
            const updated = categories.map((group) => {
                if (group.id !== groupId) return group;
                return { ...group, items: group.items.filter((it) => it.id !== itemId) };
            });
            saveCategories(updated);
            showToast(`आइटम "${itemTitle}" हटा दिया गया।`);
        }
    };

    const handleResetDefaults = () => {
        if (window.confirm("क्या आप सभी कैटेगरीज़ को डिफ़ॉल्ट पर रीसेट करना चाहते हैं?")) {
            saveCategories(DEFAULT_CATEGORIES);
            showToast("सभी कैटेगरीज़ डिफ़ॉल्ट पर रीसेट कर दी गईं!");
        }
    };

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("sn_admin_session");
        }
        if (onLogout) onLogout();
    };

    // Filter categories based on search
    const filteredCategories = categories.filter((group) => {
        const matchesGroup =
            group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (group.subtitle && group.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesItem = group.items?.some(
            (it) =>
                it.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (it.sub && it.sub.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return matchesGroup || matchesItem;
    });

    return (
        <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
                    {/* Logo & Admin Badge */}
                    <div className="flex items-center gap-3">
                        <a href="/Home" className="flex items-center text-xl sm:text-2xl font-black tracking-tight">
                            <span className="text-red-600">SN</span>
                            <span className="text-slate-900">business</span>
                        </a>
                        <span className="bg-blue-600 text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Admin Central
                        </span>
                    </div>

                    {/* Quick Website View & Profile */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href="/Home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 text-xs font-bold transition-all"
                            title="Open Live Website in New Tab"
                        >
                            <GlobeIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span>Live Website</span>
                            <span className="text-slate-400 text-xs">↗</span>
                        </a>

                        <button
                            onClick={handleLogout}
                            className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                            <span>Logout</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1 space-y-6">
                {/* Toast Notification */}
                {toastMessage && (
                    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom duration-200">
                        <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs font-bold">{toastMessage}</span>
                    </div>
                )}

                {/* Dashboard Header Bar */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                                Category &amp; Services Manager
                            </h1>
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md">
                                Live Sync
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                            वेबसाइट के लिए नए कैटेगरी ग्रुप्स बनाएं और उनके अंदर मल्टीपल सब-कैटेगरी आइटम्स जोड़ें
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={handleOpenAddGroup}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-extrabold shadow-sm flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
                        >
                            <span className="text-base leading-none font-black">+</span>
                            <span>Create New Category Group</span>
                        </button>

                        <button
                            onClick={handleResetDefaults}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                            title="Reset all to initial defaults"
                        >
                            Reset Defaults
                        </button>
                    </div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Total Categories
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                            {totalGroups}
                        </div>
                        <div className="text-[10px] text-emerald-600 font-bold mt-1">
                            ● Groups Displayed Live
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Sub-Category Items
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-blue-600 mt-1">
                            {totalItems}
                        </div>
                        <div className="text-[10px] text-blue-500 font-bold mt-1">
                            ● Interactive App Badges
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Verified Vendors
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                            1,480+
                        </div>
                        <div className="text-[10px] text-slate-400 font-bold mt-1">
                            Across All India
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Today&apos;s Inquiries
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-amber-500 mt-1">
                            94
                        </div>
                        <div className="text-[10px] text-amber-600 font-bold mt-1">
                            Direct Leads Sent
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                    <span className="text-slate-400 pl-2">
                        <SearchIcon className="w-4 h-4" />
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search categories, sub-items, or Hindi titles..."
                        className="w-full text-xs font-medium text-slate-800 outline-none placeholder:text-slate-400"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-xs text-slate-400 hover:text-slate-600 font-bold px-2 cursor-pointer"
                        >
                            <CloseXIcon className="w-3.5 h-3.5" />
                        </button>
                    )}
                </div>

                {/* Categories & Inner Sub-Categories List */}
                <div className="space-y-6">
                    {filteredCategories.map((group) => (
                        <div
                            key={group.id}
                            className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4 transition-all hover:border-slate-300"
                        >
                            {/* Group Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-3.5 h-4.5 rounded-xs bg-[#e2e8f0] inline-block shrink-0"></span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900">
                                                {group.title}
                                            </h2>
                                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                {group.items?.length || 0} Items
                                            </span>
                                        </div>
                                        {group.subtitle && (
                                            <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                                                • {group.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Group Actions */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleOpenAddItem(group.id)}
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-2xs transition-all active:scale-95 cursor-pointer"
                                        title="Add sub-category under this group"
                                    >
                                        <span className="font-black">+</span>
                                        <span>Add Sub-Item</span>
                                    </button>

                                    <button
                                        onClick={() => handleOpenEditGroup(group)}
                                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                                        title="Edit Group Title"
                                    >
                                        <PencilIcon className="w-3 h-3 text-slate-600" />
                                        <span>Edit</span>
                                    </button>

                                    <button
                                        onClick={() => handleDeleteGroup(group.id, group.title)}
                                        className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center"
                                        title="Delete Group"
                                    >
                                        <TrashIcon className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Inner Sub-Category Items Grid */}
                            <div>
                                {(!group.items || group.items.length === 0) ? (
                                    <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-2xl">
                                        <p className="text-xs text-slate-400 font-bold">
                                            इस कैटेगरी में अभी कोई सब-आइटम नहीं है।
                                        </p>
                                        <button
                                            onClick={() => handleOpenAddItem(group.id)}
                                            className="mt-2 text-xs font-black text-blue-600 hover:underline cursor-pointer"
                                        >
                                            + पहला सब-आइटम जोड़ें
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                        {group.items.map((item) => {
                                            const preset = ICON_PRESETS.find((p) => p.id === item.iconType);
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="group relative bg-slate-50 hover:bg-white rounded-2xl p-3 border border-slate-200/70 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                                                >
                                                    {/* Quick Action Buttons on hover */}
                                                    <div className="absolute top-2 right-2 flex items-center gap-1 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={() => handleOpenEditItem(group.id, item)}
                                                            className="w-5 h-5 rounded-md bg-white shadow border border-slate-200 text-slate-600 hover:text-blue-600 flex items-center justify-center cursor-pointer"
                                                            title="Edit"
                                                        >
                                                            <PencilIcon className="w-2.5 h-2.5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteItem(group.id, item.id, item.title)}
                                                            className="w-5 h-5 rounded-md bg-white shadow border border-slate-200 text-rose-600 hover:bg-rose-50 flex items-center justify-center cursor-pointer"
                                                            title="Delete"
                                                        >
                                                            <TrashIcon className="w-2.5 h-2.5" />
                                                        </button>
                                                    </div>

                                                    {/* Icon Badge */}
                                                    <div className="flex items-center justify-center transform scale-75 origin-center mx-auto mb-1">
                                                        <CategoryIcon type={item.iconType} />
                                                    </div>

                                                    {/* Text Content */}
                                                    <div className="text-center">
                                                        <div className="text-[11px] sm:text-xs font-black text-slate-800 line-clamp-2 leading-tight">
                                                            {item.title}
                                                        </div>
                                                        {item.sub && (
                                                            <div className="text-[10px] font-semibold text-slate-400 mt-0.5 line-clamp-1">
                                                                {item.sub}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal 1: Create or Edit Category Group */}
            {isGroupModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                    <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-150">
                        <button
                            onClick={() => setIsGroupModalOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center cursor-pointer"
                        >
                            <CloseXIcon className="w-3.5 h-3.5" />
                        </button>

                        <div className="mb-5">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                                {editingGroup ? "Edit Category Group" : "New Category Group"}
                            </span>
                            <h3 className="text-lg font-black text-slate-900 mt-1">
                                {editingGroup ? "कैटेगरी ग्रुप एडिट करें" : "नया कैटेगरी ग्रुप बनाएं"}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                जैसे: EDUCATIONAL HUB, RENTAL PROPERTIES, HEALTHCARE आदि
                            </p>
                        </div>

                        <form onSubmit={handleSaveGroup} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Category Group Title (English - Uppercase)
                                </label>
                                <input
                                    type="text"
                                    value={groupForm.title}
                                    onChange={(e) => setGroupForm({ ...groupForm, title: e.target.value })}
                                    placeholder="e.g. HEALTHCARE & MEDICAL"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Hindi Subtitle (हिंदी सब-टाइटल)
                                </label>
                                <input
                                    type="text"
                                    value={groupForm.subtitle}
                                    onChange={(e) => setGroupForm({ ...groupForm, subtitle: e.target.value })}
                                    placeholder="e.g. डॉक्टर, क्लिनिक व डायग्नोस्टिक्स"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                                />
                            </div>

                            <div className="pt-2 flex items-center justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsGroupModalOpen(false)}
                                    className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-md cursor-pointer"
                                >
                                    {editingGroup ? "Save Changes" : "Create Group"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal 2: Add or Edit Sub-Category Item */}
            {isItemModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                    <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-150 max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setIsItemModalOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center cursor-pointer"
                        >
                            <CloseXIcon className="w-3.5 h-3.5" />
                        </button>

                        <div className="mb-5">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                                {editingItem ? "Edit Sub-Item" : "Add Sub-Category Item"}
                            </span>
                            <h3 className="text-lg font-black text-slate-900 mt-1">
                                {editingItem ? "सब-कैटेगरी आइटम एडिट करें" : "कैटेगरी के अंदर नया आइटम जोड़ें"}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                यह आइटम होमपेज पर ऐप-आइकन स्क्वर्किल्स की तरह दिखेगा
                            </p>
                        </div>

                        <form onSubmit={handleSaveItem} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Target Category Group
                                </label>
                                <select
                                    value={targetGroupId || ""}
                                    onChange={(e) => setTargetGroupId(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-white focus:border-blue-600 outline-none"
                                >
                                    {categories.map((g) => (
                                        <option key={g.id} value={g.id}>
                                            {g.title} {g.subtitle ? `(${g.subtitle})` : ""}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Title (English) *
                                </label>
                                <input
                                    type="text"
                                    value={itemForm.title}
                                    onChange={(e) => setItemForm({ ...itemForm, title: e.target.value })}
                                    placeholder="e.g. Dental Clinics"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-blue-600 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Subtitle (हिंदी सब-टाइटल)
                                </label>
                                <input
                                    type="text"
                                    value={itemForm.sub}
                                    onChange={(e) => setItemForm({ ...itemForm, sub: e.target.value })}
                                    placeholder="e.g. दांतों के डॉक्टर"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-blue-600 outline-none"
                                />
                            </div>

                            {/* Icon Preset Picker */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">
                                    Choose Icon / Badge Type
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-52 overflow-y-auto p-2 border border-slate-200 rounded-2xl bg-slate-50">
                                    {ICON_PRESETS.map((preset) => {
                                        const isSelected = itemForm.iconType === preset.id;
                                        return (
                                            <button
                                                key={preset.id}
                                                type="button"
                                                onClick={() => setItemForm({ ...itemForm, iconType: preset.id })}
                                                className={`p-2 rounded-xl text-left border text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
                                                    isSelected
                                                        ? "bg-blue-600 text-white border-blue-600 font-bold shadow-xs"
                                                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
                                                }`}
                                            >
                                                <div className="w-7 h-7 shrink-0 flex items-center justify-center overflow-hidden rounded-lg border border-slate-100 bg-white shadow-2xs">
                                                    <div className="transform scale-[0.45] origin-center shrink-0">
                                                        <CategoryIcon type={preset.id} />
                                                    </div>
                                                </div>
                                                <span className="text-[11px] truncate leading-tight font-semibold">
                                                    {preset.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="pt-2 flex items-center justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsItemModalOpen(false)}
                                    className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md cursor-pointer"
                                >
                                    {editingItem ? "Update Sub-Item" : "Add Sub-Item"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
