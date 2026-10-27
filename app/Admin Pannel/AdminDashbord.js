"use client";

import React, { useState, useEffect } from "react";
import { CategoryIcon, DEFAULT_RECENT_LISTINGS } from "../Home/page";

function PhotoIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    );
}

function DocumentListingIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}

function StorefrontIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    );
}

function LocationPinIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

function SparklesIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
        </svg>
    );
}

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

function DashboardGridIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
        </svg>
    );
}

function CategoryMenuIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );
}

function MegaphoneMenuIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
    );
}

function SettingsMenuIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function LogoutMenuIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
    );
}

function ClockIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
    );
}

function ShieldVerifiedIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}

function PulseIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h3l3-7 4 14 3-7h3" />
        </svg>
    );
}

function MenuHamburgerIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
    const [activeTab, setActiveTab] = useState("dashboard"); // "dashboard", "listings", "categories", "special-ads"
    const [searchQuery, setSearchQuery] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentDateStr, setCurrentDateStr] = useState("Monday, 19 October 2026");

    // Modal state for adding/editing group
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const [editingGroup, setEditingGroup] = useState(null);
    const [groupForm, setGroupForm] = useState({ id: "", title: "", subtitle: "" });

    // Modal state for adding/editing item
    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [targetGroupId, setTargetGroupId] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [itemForm, setItemForm] = useState({ id: "", title: "", sub: "", iconType: "coaching" });

    // Special Advertisements State (Full CRUD)
    const [specialAds, setSpecialAds] = useState(DEFAULT_RECENT_LISTINGS || []);
    const [isAdModalOpen, setIsAdModalOpen] = useState(false);
    const [editingAd, setEditingAd] = useState(null);
    const [adFilterType, setAdFilterType] = useState("all"); // "all", "poster", "text", "user-listings"
    const [adForm, setAdForm] = useState({
        id: "",
        type: "poster",
        title: "",
        author: "",
        phone: "",
        city: "Gorakhpur",
        category: "Events & Festivities",
        image: "/dandiya-poster.jpg",
        text: "",
        fullText: ""
    });

    // Business Listings State (from sn_user_listings)
    const [userListings, setUserListings] = useState([]);
    const [listingFilterStatus, setListingFilterStatus] = useState("all"); // "all", "pending", "active", "rejected"
    const [isListingModalOpen, setIsListingModalOpen] = useState(false);
    const [editingListing, setEditingListing] = useState(null);
    const [listingForm, setListingForm] = useState({
        id: "",
        title: "",
        category: "B2B Deals & Wholesale",
        owner: "",
        phone: "",
        city: "Sant Kabir Nagar",
        address: "",
        website: "",
        description: "",
        status: "active"
    });

    // Load categories, special ads, user listings, and date on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const d = new Date().toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                });
                if (d) setCurrentDateStr(d);
            } catch (e) {}

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

            const loadAds = () => {
                const savedAds = localStorage.getItem("sn_special_ads");
                if (savedAds) {
                    try {
                        const parsedAds = JSON.parse(savedAds);
                        if (Array.isArray(parsedAds) && parsedAds.length > 0) {
                            setSpecialAds(parsedAds);
                        }
                    } catch (e) {
                        console.error("Failed to parse saved special ads:", e);
                    }
                }
            };
            loadAds();

            const loadUserListings = () => {
                const savedListings = localStorage.getItem("sn_user_listings");
                if (savedListings) {
                    try {
                        const parsedListings = JSON.parse(savedListings);
                        if (Array.isArray(parsedListings)) {
                            setUserListings(parsedListings);
                        }
                    } catch (e) {
                        console.error("Failed to parse saved user listings:", e);
                    }
                }
            };
            loadUserListings();

            const handleStorageChange = (e) => {
                if (!e.key || e.key === "sn_user_listings") {
                    loadUserListings();
                }
                if (!e.key || e.key === "sn_special_ads") {
                    loadAds();
                }
            };

            window.addEventListener("storage", handleStorageChange);
            window.addEventListener("sn_listings_updated", loadUserListings);
            window.addEventListener("sn_ads_updated", () => {
                loadAds();
                loadUserListings();
            });

            return () => {
                window.removeEventListener("storage", handleStorageChange);
                window.removeEventListener("sn_listings_updated", loadUserListings);
                window.removeEventListener("sn_ads_updated", loadUserListings);
            };
        }
    }, []);

    // Save categories to localStorage
    const saveCategories = (newCategories) => {
        setCategories(newCategories);
        if (typeof window !== "undefined") {
            localStorage.setItem("sn_business_categories", JSON.stringify(newCategories));
        }
    };

    // Save special ads to localStorage and trigger storage sync
    const saveSpecialAds = (newAds) => {
        setSpecialAds(newAds);
        if (typeof window !== "undefined") {
            localStorage.setItem("sn_special_ads", JSON.stringify(newAds));
            window.dispatchEvent(new Event("storage"));
            window.dispatchEvent(new Event("sn_ads_updated"));
        }
    };

    // Save user listings to localStorage and trigger sync
    const saveUserListings = (newListings) => {
        setUserListings(newListings);
        if (typeof window !== "undefined") {
            localStorage.setItem("sn_user_listings", JSON.stringify(newListings));
            window.dispatchEvent(new Event("storage"));
            window.dispatchEvent(new Event("sn_listings_updated"));
            window.dispatchEvent(new Event("sn_ads_updated"));
        }
    };

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(""), 3500);
    };

    // --- User Business Listings Operations ---
    const handleApproveListing = (listingId, listingTitle) => {
        const updated = userListings.map((l) =>
            l.id === listingId ? { ...l, status: "active" } : l
        );
        saveUserListings(updated);
        showToast(`लिस्टिंग "${listingTitle}" स्वीकृत (Approved & Live) हो गई!`);
    };

    const handleRejectListing = (listingId, listingTitle) => {
        const updated = userListings.map((l) =>
            l.id === listingId ? { ...l, status: "rejected" } : l
        );
        saveUserListings(updated);
        showToast(`लिस्टिंग "${listingTitle}" अस्वीकृत (Rejected) कर दी गई।`);
    };

    const handleDeleteUserListing = (listingId, listingTitle) => {
        if (window.confirm(`क्या आप लिस्टिंग "${listingTitle}" को स्थायी रूप से हटाना चाहते हैं?`)) {
            const updated = userListings.filter((l) => l.id !== listingId);
            saveUserListings(updated);
            showToast(`लिस्टिंग "${listingTitle}" हटा दी गई।`);
        }
    };

    const handleOpenEditListing = (listing) => {
        setEditingListing(listing);
        setListingForm({
            id: listing.id,
            title: listing.title || "",
            category: listing.category || "B2B Deals & Wholesale",
            owner: listing.owner || "",
            phone: listing.phone || "",
            city: listing.city || "Sant Kabir Nagar",
            address: listing.address || "",
            website: listing.website || "",
            description: listing.description || "",
            status: listing.status || "active"
        });
        setIsListingModalOpen(true);
    };

    const handleOpenAddListing = () => {
        setEditingListing(null);
        setListingForm({
            id: Date.now().toString(),
            title: "",
            category: "B2B Deals & Wholesale",
            owner: "Admin Added",
            phone: "",
            city: "Sant Kabir Nagar",
            address: "",
            website: "",
            description: "",
            status: "active"
        });
        setIsListingModalOpen(true);
    };

    const handleSaveListing = (e) => {
        e.preventDefault();
        if (!listingForm.title.trim()) {
            alert("कृपया बिजनेस का नाम (Title) भरें!");
            return;
        }

        let updated;
        if (editingListing) {
            updated = userListings.map((l) =>
                l.id === editingListing.id ? { ...listingForm } : l
            );
            showToast(`लिस्टिंग "${listingForm.title}" अपडेट हो गई!`);
        } else {
            const newL = {
                ...listingForm,
                id: listingForm.id || Date.now().toString(),
                createdAt: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short" })
            };
            updated = [newL, ...userListings];
            showToast(`नई लिस्टिंग "${listingForm.title}" जोड़ दी गई!`);
        }
        saveUserListings(updated);
        setIsListingModalOpen(false);
    };

    // --- Special Ads Operations (Add, Edit, Delete) ---
    const handleOpenAddAd = () => {
        setEditingAd(null);
        setAdForm({
            id: `ad-${Date.now()}`,
            type: "poster",
            title: "",
            author: "",
            phone: "",
            city: "Gorakhpur",
            category: "Events & Festivities",
            image: "/dandiya-poster.jpg",
            text: "",
            fullText: ""
        });
        setIsAdModalOpen(true);
    };

    const handleOpenEditAd = (ad) => {
        setEditingAd(ad);
        setAdForm({
            id: ad.id,
            type: ad.type || "poster",
            title: ad.title || "",
            author: ad.author || "",
            phone: ad.phone || "",
            city: ad.city || "Gorakhpur",
            category: ad.category || "Events & Festivities",
            image: ad.image || "/dandiya-poster.jpg",
            text: ad.text || "",
            fullText: ad.fullText || ad.text || ""
        });
        setIsAdModalOpen(true);
    };

    const handleSaveAd = (e) => {
        e.preventDefault();
        if (!adForm.title.trim()) {
            alert("कृपया विज्ञापन का शीर्षक (Title) भरें!");
            return;
        }
        if (!adForm.phone.trim()) {
            alert("कृपया फ़ोन नंबर भरें!");
            return;
        }

        let updated;
        if (editingAd) {
            updated = specialAds.map((a) => (a.id === editingAd.id ? { ...adForm } : a));
            showToast(`विज्ञापन "${adForm.title}" सफलतापूर्वक अपडेट हो गया!`);
        } else {
            const newAd = {
                ...adForm,
                id: adForm.id || `ad-${Date.now()}`
            };
            updated = [newAd, ...specialAds];
            showToast(`नया विशेष विज्ञापन "${adForm.title}" सफलतापूर्वक जुड़ गया!`);
        }

        saveSpecialAds(updated);
        setIsAdModalOpen(false);
    };

    const handleDeleteAd = (adId, adTitle) => {
        if (window.confirm(`क्या आप विशेष विज्ञापन "${adTitle}" को हटाना चाहते हैं? यह होमपेज से भी तुरंत हट जाएगा।`)) {
            const updated = specialAds.filter((a) => a.id !== adId);
            saveSpecialAds(updated);
            showToast(`विज्ञापन "${adTitle}" हटा दिया गया।`);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 2.5 * 1024 * 1024) {
            alert("फ़ोटो का साइज़ 2.5 MB से कम होना चाहिए!");
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target?.result) {
                setAdForm((prev) => ({ ...prev, image: event.target.result }));
            }
        };
        reader.readAsDataURL(file);
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


    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("sn_admin_session");
        }
        if (onLogout) onLogout();
    };

    // User Business Listings KPIs
    const pendingListingsCount = userListings.filter((l) => l.status === "pending" || !l.status).length;
    const activeListingsCount = userListings.filter((l) => l.status === "active" || l.status === "approved").length;
    const rejectedListingsCount = userListings.filter((l) => l.status === "rejected").length;

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

    // Filter user listings based on search and status
    const filteredUserListings = userListings.filter((item) => {
        const matchesStatus =
            listingFilterStatus === "all" ||
            (listingFilterStatus === "pending" && (item.status === "pending" || !item.status)) ||
            (listingFilterStatus === "active" && (item.status === "active" || item.status === "approved")) ||
            (listingFilterStatus === "rejected" && item.status === "rejected");

        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
            !q ||
            (item.title && item.title.toLowerCase().includes(q)) ||
            (item.owner && item.owner.toLowerCase().includes(q)) ||
            (item.phone && item.phone.toLowerCase().includes(q)) ||
            (item.city && item.city.toLowerCase().includes(q)) ||
            (item.address && item.address.toLowerCase().includes(q)) ||
            (item.category && item.category.toLowerCase().includes(q)) ||
            (item.description && item.description.toLowerCase().includes(q));

        return matchesStatus && matchesQuery;
    });

    // Convert user listings into ad-format cards for Special Advertisements tab
    const userListingCardsForSpecialAds = userListings.map((item) => ({
        id: item.id,
        type: "text",
        isUserListing: true,
        title: item.title,
        author: item.owner || "SN Business Vendor",
        phone: item.phone || "91XXXXXXXX",
        city: item.city || "Sant Kabir Nagar",
        category: item.category || "B2B Deals & Wholesale",
        text: `${item.title} - ${item.category}. ${item.address || "Sant Kabir Nagar"}. Contact vendor directly for best deals and enquiry.`,
        fullText: `${item.title} - ${item.category}. Address: ${item.address || "Sant Kabir Nagar"}. Contact: ${item.phone}`,
        status: item.status || "pending",
        rawListing: item
    }));

    // Filter special ads based on search and type
    const combinedSpecialAdsList =
        adFilterType === "poster"
            ? specialAds.filter((a) => a.type === "poster")
            : adFilterType === "text"
            ? specialAds.filter((a) => a.type === "text")
            : adFilterType === "user-listings"
            ? userListingCardsForSpecialAds
            : [...userListingCardsForSpecialAds, ...specialAds];

    const filteredSpecialAds = combinedSpecialAdsList.filter((ad) => {
        const q = searchQuery.toLowerCase().trim();
        if (!q) return true;
        return (
            (ad.title && ad.title.toLowerCase().includes(q)) ||
            (ad.author && ad.author.toLowerCase().includes(q)) ||
            (ad.phone && ad.phone.includes(q)) ||
            (ad.city && ad.city.toLowerCase().includes(q)) ||
            (ad.category && ad.category.toLowerCase().includes(q)) ||
            (ad.text && ad.text.toLowerCase().includes(q))
        );
    });

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex selection:bg-rose-500 selection:text-white relative">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom duration-200">
                    <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-bold">{toastMessage}</span>
                </div>
            )}

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* 1. LEFT SIDEBAR (STICKY ON DESKTOP, SLIDE-IN DRAWER ON MOBILE) */}
            <aside
                className={`fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen w-72 bg-white border-r border-slate-200/90 flex flex-col justify-between p-5 transition-transform duration-200 ease-in-out shrink-0 overflow-y-auto ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
            >
                {/* Brand / Logo Section */}
                <div>
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-200 shrink-0">
                                <ShieldVerifiedIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-xl font-black tracking-tight leading-none">
                                    <span className="text-rose-600">SN</span>
                                    <span className="text-slate-900">business</span>
                                </div>
                                <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mt-1">
                                    ADMIN PORTAL
                                </div>
                            </div>
                        </div>

                        {/* Mobile Close Button */}
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-xs cursor-pointer hover:bg-slate-200"
                        >
                            <CloseXIcon className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Section: MAIN MENU */}
                    <div className="mt-6">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 mb-2.5">
                            MAIN MENU
                        </div>
                        <nav className="space-y-1.5">
                            {/* Dashboard / Central Hub */}
                            <button
                                onClick={() => { setActiveTab("dashboard"); setSearchQuery(""); setSidebarOpen(false); }}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                                    activeTab === "dashboard"
                                        ? "bg-[#fff1f4] text-[#e11d48] shadow-xs border border-rose-100/80"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <DashboardGridIcon className={`w-4 h-4 ${activeTab === "dashboard" ? "text-rose-600" : "text-slate-400"}`} />
                                    <span>Dashboard</span>
                                </div>
                            </button>

                            {/* Business Listings (व्यापार लिस्टिंग्स) */}
                            <button
                                onClick={() => { setActiveTab("listings"); setSearchQuery(""); setSidebarOpen(false); }}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                                    activeTab === "listings"
                                        ? "bg-[#fff1f4] text-[#e11d48] shadow-xs border border-rose-100/80"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <StorefrontIcon className={`w-4 h-4 ${activeTab === "listings" ? "text-rose-600" : "text-slate-400"}`} />
                                    <div className="text-left">
                                        <div>Business Listings</div>
                                        <div className="text-[10px] text-slate-400 font-semibold">(व्यापार लिस्टिंग्स)</div>
                                    </div>
                                </div>
                                {pendingListingsCount > 0 ? (
                                    <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-2xs">
                                        {pendingListingsCount}
                                    </span>
                                ) : (
                                    <span className="text-[10px] text-slate-400 font-bold">
                                        {userListings.length}
                                    </span>
                                )}
                            </button>

                            {/* Categories & Services (Category Manager) */}
                            <button
                                onClick={() => { setActiveTab("categories"); setSearchQuery(""); setSidebarOpen(false); }}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                                    activeTab === "categories"
                                        ? "bg-[#fff1f4] text-[#e11d48] shadow-xs border border-rose-100/80"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <CategoryMenuIcon className={`w-4 h-4 ${activeTab === "categories" ? "text-rose-600" : "text-slate-400"}`} />
                                    <span>Categories &amp; Services</span>
                                </div>
                            </button>

                            {/* Special Advertisements (विशेष विज्ञापन) */}
                            <button
                                onClick={() => { setActiveTab("special-ads"); setSearchQuery(""); setSidebarOpen(false); }}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                                    activeTab === "special-ads"
                                        ? "bg-[#fff1f4] text-[#e11d48] shadow-xs border border-rose-100/80"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <MegaphoneMenuIcon className={`w-4 h-4 ${activeTab === "special-ads" ? "text-rose-600" : "text-slate-400"}`} />
                                    <div className="text-left">
                                        <div>Special Advertisements</div>
                                        <div className="text-[10px] text-slate-400 font-semibold">(विशेष विज्ञापन)</div>
                                    </div>
                                </div>
                            </button>

                            {/* Live Website External Link */}
                            <a
                                href="/Home"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <GlobeIcon className="w-4 h-4 text-slate-400" />
                                    <span>Live Website</span>
                                </div>
                                <span className="text-slate-400 text-xs">↗</span>
                            </a>
                        </nav>
                    </div>

                    {/* Section: SYSTEM PREFERENCES */}
                    <div className="mt-6">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 mb-2.5">
                            SYSTEM PREFERENCES
                        </div>
                        <nav className="space-y-1.5">
                            <button
                                onClick={() => showToast("सिस्टम सेटिंग्स सुरक्षित एवं सक्रिय हैं")}
                                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
                            >
                                <SettingsMenuIcon className="w-4 h-4 text-slate-400" />
                                <span>Settings</span>
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Bottom of Sidebar: Terminate Session Button */}
                <div className="pt-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="w-full py-3 px-4 rounded-2xl border border-slate-200 hover:border-rose-200 bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-700 text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group"
                    >
                        <LogoutMenuIcon className="w-4 h-4 text-slate-500 group-hover:text-rose-600 transition-colors" />
                        <span>Terminate Session</span>
                    </button>
                </div>
            </aside>

            {/* 2. RIGHT MAIN CONTENT AREA */}
            <div className="flex-1 min-w-0 flex flex-col min-h-screen">
                {/* TOP HEADER BAR (Matching Screenshot) */}
                <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 shadow-2xs">
                    {/* Left: Mobile Toggle + "Welcome Back, Admin" */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                            title="Open Menu"
                        >
                            <MenuHamburgerIcon className="w-5 h-5" />
                        </button>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                                    Welcome Back, Admin
                                </h1>
                                <span className="text-rose-500 inline-flex items-center" title="Platform Verified">
                                    <ShieldVerifiedIcon className="w-4 h-4 text-rose-500" />
                                </span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mt-0.5">
                                MANAGE YOUR PLATFORM SECURELY
                            </p>
                        </div>
                    </div>

                    {/* Right: Date Pill & Profile Pill */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {/* Date Pill (Monday, 19 October 2026) */}
                        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white shadow-2xs text-xs font-bold text-slate-600">
                            <ClockIcon className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            <span>{currentDateStr}</span>
                        </div>

                        {/* Admin Profile Chip */}
                        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                            <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                                SA
                            </div>
                            <div className="hidden sm:block text-left">
                                <div className="text-xs font-black text-slate-800 leading-tight">Admin Portal</div>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-wider">SUPER ADMIN</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* MAIN PAGE BODY */}
                <main className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
                    {/* VIEW 1: DASHBOARD OVERVIEW (Central Data Hub & Cards only appear here) */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-6">
                            {/* Central Data Hub Banner */}
                            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                            Central Data Hub
                                        </h2>
                                        <span className="text-rose-500">
                                            <PulseIcon className="w-5 h-5 text-rose-500 animate-pulse" />
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Real-time analytics, local business directory, and platform growth metrics.
                                    </p>
                                </div>
                            </div>

                            {/* 4 Soft Pastel Metric Cards */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                {/* Card 1: Emerald Tint - User Business Listings */}
                                <div
                                    onClick={() => { setActiveTab("listings"); setSearchQuery(""); }}
                                    className="bg-[#f0fdf4] hover:bg-[#e2fbe8] rounded-3xl p-5 border border-emerald-100 shadow-2xs transition-all cursor-pointer flex flex-col justify-between group"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                                        <StorefrontIcon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">
                                            {userListings.length}
                                        </div>
                                        <div className="text-xs font-bold text-emerald-600 mt-1 flex items-center justify-between">
                                            <span>Business Listings</span>
                                            {pendingListingsCount > 0 && (
                                                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-black">
                                                    {pendingListingsCount} Pending
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Blue Tint - Total Categories */}
                                <div
                                    onClick={() => { setActiveTab("categories"); setSearchQuery(""); }}
                                    className="bg-[#f0f7ff] hover:bg-[#e6f1fe] rounded-3xl p-5 border border-blue-100 shadow-2xs transition-all cursor-pointer flex flex-col justify-between group"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                                        <CategoryMenuIcon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">
                                            {totalGroups}
                                        </div>
                                        <div className="text-xs font-bold text-blue-600 mt-1">
                                            Total Categories ({totalItems} Items)
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: Pink/Rose Tint - Special Advertisements */}
                                <div
                                    onClick={() => { setActiveTab("special-ads"); setSearchQuery(""); }}
                                    className="bg-[#fff1f4] hover:bg-[#ffe6eb] rounded-3xl p-5 border border-rose-100 shadow-2xs transition-all cursor-pointer flex flex-col justify-between group"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-white text-rose-600 flex items-center justify-center shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                                        <SparklesIcon className="w-5 h-5 text-rose-600" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">
                                            {specialAds.length}
                                        </div>
                                        <div className="text-xs font-bold text-rose-600 mt-1">
                                            Special Ads (विशेष विज्ञापन)
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4: Amber/Yellow Tint - Poster Flyers & Classifieds */}
                                <div
                                    onClick={() => { setActiveTab("special-ads"); setAdFilterType("poster"); setSearchQuery(""); }}
                                    className="bg-[#fffcf0] hover:bg-[#fff7d9] rounded-3xl p-5 border border-amber-100 shadow-2xs transition-all cursor-pointer flex flex-col justify-between group"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-white text-amber-600 flex items-center justify-center shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                                        <PhotoIcon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">
                                            {specialAds.filter((a) => a.type === "poster").length}
                                        </div>
                                        <div className="text-xs font-bold text-amber-600 mt-1">
                                            Poster Flyers ({specialAds.filter((a) => a.type === "text").length} Text)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Platform Growth Trends Wave Chart (Matching Screenshot) */}
                            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                                            Platform Growth Trends
                                        </h3>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            Live visitor activity, business listing engagements &amp; advertisement reach
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60 shadow-2xs">
                                            ● Live Pulse
                                        </span>
                                        <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                                            ↑ +28.4% This Week
                                        </span>
                                    </div>
                                </div>

                                {/* Smooth Wave Chart Graphic matching the screenshot */}
                                <div className="relative h-44 sm:h-56 w-full pt-2">
                                    {/* Y-axis markers */}
                                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] font-bold text-slate-400 select-none pointer-events-none">
                                        <span>60k</span>
                                        <span>45k</span>
                                        <span>30k</span>
                                        <span>15k</span>
                                    </div>

                                    <div className="ml-8 h-full">
                                        <svg viewBox="0 0 600 180" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="growthCurveFill" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
                                                    <stop offset="60%" stopColor="#fb7185" stopOpacity="0.12" />
                                                    <stop offset="100%" stopColor="#ffe4e6" stopOpacity="0.0" />
                                                </linearGradient>
                                            </defs>
                                            {/* Horizontal Grid lines */}
                                            <line x1="0" y1="20" x2="600" y2="20" stroke="#f1f5f9" strokeDasharray="4 4" strokeWidth="1" />
                                            <line x1="0" y1="65" x2="600" y2="65" stroke="#f1f5f9" strokeDasharray="4 4" strokeWidth="1" />
                                            <line x1="0" y1="110" x2="600" y2="110" stroke="#f1f5f9" strokeDasharray="4 4" strokeWidth="1" />
                                            <line x1="0" y1="155" x2="600" y2="155" stroke="#e2e8f0" strokeWidth="1" />

                                            {/* Curved Wave Fill Area */}
                                            <path
                                                d="M 0 170 C 120 160, 200 130, 290 85 C 330 65, 360 40, 410 40 C 470 40, 520 80, 600 115 L 600 180 L 0 180 Z"
                                                fill="url(#growthCurveFill)"
                                            />
                                            {/* Main Wave Curve Line */}
                                            <path
                                                d="M 0 170 C 120 160, 200 130, 290 85 C 330 65, 360 40, 410 40 C 470 40, 520 80, 600 115"
                                                fill="none"
                                                stroke="#e11d48"
                                                strokeWidth="3.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* 3 Quick Action Management Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Action Card 1: Business Listings */}
                                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:border-emerald-200 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                                            <StorefrontIcon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-base font-black text-slate-900">
                                                    Business Listings
                                                </h4>
                                                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                                                    व्यापार लिस्टिंग
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                यूज़र डैशबोर्ड और वेबसाइट से जोड़े गए व्यवसाय देखें, अप्रूव करें, संपादित करें या हटाएं।
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                                        <span className="text-xs font-bold text-slate-400">
                                            {userListings.length} Listings {pendingListingsCount > 0 && `(${pendingListingsCount} Pending)`}
                                        </span>
                                        <button
                                            onClick={() => { setActiveTab("listings"); setSearchQuery(""); }}
                                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                                        >
                                            <span>Open Business Listings</span>
                                            <span>→</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Action Card 2: Categories & Services */}
                                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:border-blue-200 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                                            <CategoryMenuIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-black text-slate-900">
                                                Categories &amp; Services
                                            </h4>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                वेबसाइट के लिए नए कैटेगरी ग्रुप्स, कोचिंग, रेंटल, हेल्थकेयर व अन्य सब-आइटम आइकॉन मैनेज करें।
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                                        <span className="text-xs font-bold text-slate-400">
                                            {totalGroups} Active Groups
                                        </span>
                                        <button
                                            onClick={() => { setActiveTab("categories"); setSearchQuery(""); }}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                                        >
                                            <span>Open Categories Manager</span>
                                            <span>→</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Action Card 3: Special Advertisements */}
                                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:border-rose-200 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs">
                                            <MegaphoneMenuIcon className="w-6 h-6 text-rose-600" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-base font-black text-slate-900">
                                                    Special Advertisements
                                                </h4>
                                                <span className="bg-rose-100 text-rose-700 text-[10px] font-black px-2 py-0.5 rounded-full">
                                                    विशेष विज्ञापन
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                इवेंट पोस्टर, सांस्कृतिक कार्यक्रम फ्लायर, व टेक्स्ट क्लासिफाइड विज्ञापन जोड़ें, एडिट करें या हटाएं।
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                                        <span className="text-xs font-bold text-slate-400">
                                            {specialAds.length} Active Advertisements
                                        </span>
                                        <button
                                            onClick={() => { setActiveTab("special-ads"); setSearchQuery(""); }}
                                            className="px-4 py-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                                        >
                                            <span>Open Special Ads Manager</span>
                                            <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* VIEW: BUSINESS LISTINGS & DIRECTORY MANAGER */}
                    {activeTab === "listings" && (
                        <div className="space-y-6">
                            {/* Header Bar */}
                            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                                            Business Listings &amp; Directory Manager
                                        </h1>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-300/60 shadow-2xs">
                                            व्यापार लिस्टिंग्स
                                        </span>
                                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md">
                                            Live Sync
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">
                                        यूज़र डैशबोर्ड और वेबसाइट से जोड़े गए सभी व्यवसायों की सूची, सत्यापन, लाइव स्टेटस व प्रबंधन।
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <button
                                        onClick={handleOpenAddListing}
                                        className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-md flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
                                    >
                                        <span className="text-base leading-none font-black">+</span>
                                        <span>Add Business Listing (+ नई लिस्टिंग जोड़ें)</span>
                                    </button>
                                </div>
                            </div>

                            {/* KPI Metrics */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                                <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                        Total Listings
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                        {userListings.length}
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-bold mt-1">
                                        All Submitted Listings
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-2xl border border-amber-200/80 bg-amber-50/30 shadow-2xs">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                                        Pending Review
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-amber-600 mt-1">
                                        {pendingListingsCount}
                                    </div>
                                    <div className="text-[10px] text-amber-600 font-bold mt-1">
                                        ● Requires Approval
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-2xl border border-emerald-200/80 bg-emerald-50/30 shadow-2xs">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                                        Active &amp; Live
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
                                        {activeListingsCount}
                                    </div>
                                    <div className="text-[10px] text-emerald-600 font-bold mt-1">
                                        ● Displayed On Website
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                        Rejected
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-rose-600 mt-1">
                                        {rejectedListingsCount}
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-bold mt-1">
                                        Disapproved
                                    </div>
                                </div>
                            </div>

                            {/* Search & Filter Bar */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3 flex-1">
                                    <span className="text-slate-400 pl-2">
                                        <SearchIcon className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search business by title, category, owner, phone, city, or address..."
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

                                <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-2xs shrink-0 overflow-x-auto">
                                    <button
                                        onClick={() => setListingFilterStatus("all")}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                            listingFilterStatus === "all"
                                                ? "bg-slate-900 text-white shadow-2xs"
                                                : "text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        All ({userListings.length})
                                    </button>
                                    <button
                                        onClick={() => setListingFilterStatus("pending")}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                            listingFilterStatus === "pending"
                                                ? "bg-amber-600 text-white shadow-2xs"
                                                : "text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        ⏳ Pending ({pendingListingsCount})
                                    </button>
                                    <button
                                        onClick={() => setListingFilterStatus("active")}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                            listingFilterStatus === "active"
                                                ? "bg-emerald-600 text-white shadow-2xs"
                                                : "text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        ✓ Active ({activeListingsCount})
                                    </button>
                                    <button
                                        onClick={() => setListingFilterStatus("rejected")}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                            listingFilterStatus === "rejected"
                                                ? "bg-rose-600 text-white shadow-2xs"
                                                : "text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        ✕ Rejected ({rejectedListingsCount})
                                    </button>
                                </div>
                            </div>

                            {/* Business Listings Grid */}
                            {filteredUserListings.length === 0 ? (
                                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs">
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl mx-auto flex items-center justify-center mb-3">
                                        <StorefrontIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base font-black text-slate-800">
                                        कोई बिजनेस लिस्टिंग नहीं मिली (No Listings Found)
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                                        {searchQuery
                                            ? `"${searchQuery}" से कोई लिस्टिंग मैच नहीं हुई।`
                                            : "वर्तमान में इस फ़िल्टर में कोई लिस्टिंग नहीं है।"}
                                    </p>
                                    <button
                                        onClick={handleOpenAddListing}
                                        className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                                    >
                                        + नई लिस्टिंग जोड़ें
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {filteredUserListings.map((item) => {
                                        const isPending = item.status === "pending" || !item.status;
                                        const isRejected = item.status === "rejected";
                                        const isActive = item.status === "active" || item.status === "approved";

                                        return (
                                            <div
                                                key={item.id}
                                                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
                                            >
                                                <div>
                                                    {/* Card Header Bar */}
                                                    <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between gap-2">
                                                        <span className="text-[11px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-full truncate">
                                                            {item.category || "General Business"}
                                                        </span>
                                                        <span
                                                            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
                                                                isPending
                                                                    ? "bg-amber-100 text-amber-800 border-amber-300"
                                                                    : isRejected
                                                                    ? "bg-rose-100 text-rose-800 border-rose-300"
                                                                    : "bg-emerald-100 text-emerald-800 border-emerald-300"
                                                            }`}
                                                        >
                                                            {isPending ? "⏳ Pending Review" : isRejected ? "✕ Rejected" : "✓ Active & Live"}
                                                        </span>
                                                    </div>

                                                    {/* Card Body */}
                                                    <div className="p-4 space-y-3">
                                                        <div>
                                                            <h3 className="text-base font-black text-slate-900 leading-snug line-clamp-1">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-xs text-slate-400 font-semibold mt-0.5">
                                                                Owner: <span className="text-slate-700 font-bold">{item.owner || "SN Business Vendor"}</span>
                                                            </p>
                                                        </div>

                                                        {/* Phone & Location */}
                                                        <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                                            <div className="flex items-center gap-2">
                                                                <PhoneIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                                                <span className="font-bold text-slate-900">{item.phone || "Not provided"}</span>
                                                            </div>
                                                            <div className="flex items-start gap-2">
                                                                <LocationPinIcon className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                                                <span className="text-slate-600 text-[11px] leading-tight">
                                                                    {item.address || "Gorakhpur / Sant Kabir Nagar"}{item.city ? `, ${item.city}` : ""}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Description */}
                                                        {item.description && (
                                                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 italic">
                                                                &ldquo;{item.description}&rdquo;
                                                            </p>
                                                        )}

                                                        {item.createdAt && (
                                                            <div className="text-[10px] text-slate-400 font-medium">
                                                                Submitted on: {item.createdAt}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="p-3 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                                                    {isPending && (
                                                        <button
                                                            onClick={() => handleApproveListing(item.id, item.title)}
                                                            className="flex-1 py-2 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1 transition-all shadow-xs cursor-pointer"
                                                            title="Approve & Publish to Website"
                                                        >
                                                            <CheckIcon className="w-3.5 h-3.5" />
                                                            <span>Approve (स्वीकृत करें)</span>
                                                        </button>
                                                    )}

                                                    {isActive && (
                                                        <button
                                                            onClick={() => handleRejectListing(item.id, item.title)}
                                                            className="py-1.5 px-2 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
                                                            title="Temporarily Unpublish"
                                                        >
                                                            Pause/Reject
                                                        </button>
                                                    )}

                                                    <button
                                                        onClick={() => handleOpenEditListing(item)}
                                                        className="py-2 px-2.5 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition-all shadow-2xs cursor-pointer"
                                                        title="Edit Details"
                                                    >
                                                        <PencilIcon className="w-3 h-3 text-blue-600" />
                                                        <span>Edit</span>
                                                    </button>

                                                    <button
                                                        onClick={() => handleDeleteUserListing(item.id, item.title)}
                                                        className="py-2 px-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-black flex items-center justify-center transition-all cursor-pointer"
                                                        title="Delete Listing"
                                                    >
                                                        <TrashIcon className="w-3.5 h-3.5 text-rose-600" />
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    {/* VIEW 2: CATEGORIES & SERVICES MANAGER */}
                    {activeTab === "categories" && (
                        <div className="space-y-6">
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
                )}

                {/* TAB 2: SPECIAL ADVERTISEMENTS MANAGER */}
                {activeTab === "special-ads" && (
                    <div className="space-y-6">
                        {/* Header Bar */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                                        Special Advertisements Manager
                                    </h1>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-[#d95100] border border-orange-300/60 shadow-2xs">
                                        (विशेष विज्ञापन)
                                    </span>
                                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md">
                                        Homepage Live Sync
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">
                                    होमपेज पर दिखने वाले पोस्टर व क्लासिफाइड विज्ञापन जोड़ें, एडिट करें या हटाएं। यहाँ किया गया बदलाव तुरंत होमपेज पर दिखता है।
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                <button
                                    onClick={handleOpenAddAd}
                                    className="bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-md flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
                                >
                                    <span className="text-base leading-none font-black">+</span>
                                    <span>Add Special Advertisement (+ नया विज्ञापन जोड़ें)</span>
                                </button>
                            </div>
                        </div>

                        {/* KPI Metrics */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Total Advertisements
                                </div>
                                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                    {specialAds.length}
                                </div>
                                <div className="text-[10px] text-emerald-600 font-bold mt-1">
                                    ● Live on Homepage
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Poster Flyers
                                </div>
                                <div className="text-2xl sm:text-3xl font-black text-orange-600 mt-1">
                                    {specialAds.filter((a) => a.type === "poster").length}
                                </div>
                                <div className="text-[10px] text-orange-500 font-bold mt-1">
                                    ● Event / Photo Posters
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Text Classifieds
                                </div>
                                <div className="text-2xl sm:text-3xl font-black text-blue-600 mt-1">
                                    {specialAds.filter((a) => a.type === "text").length}
                                </div>
                                <div className="text-[10px] text-blue-500 font-bold mt-1">
                                    ● Property / Services
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Regional Coverage
                                </div>
                                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                                    {new Set(specialAds.map((a) => a.city || "Gorakhpur")).size} Cities
                                </div>
                                <div className="text-[10px] text-slate-500 font-bold mt-1">
                                    Target Regional Locations
                                </div>
                            </div>
                        </div>

                        {/* Search & Type Filter Bar */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                            <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3 flex-1">
                                <span className="text-slate-400 pl-2">
                                    <SearchIcon className="w-4 h-4" />
                                </span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search ads by title, owner, phone, city, or category..."
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

                            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-2xs shrink-0 overflow-x-auto">
                                <button
                                    onClick={() => setAdFilterType("all")}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                        adFilterType === "all"
                                            ? "bg-slate-900 text-white shadow-2xs"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    All ({specialAds.length + userListings.length})
                                </button>
                                <button
                                    onClick={() => setAdFilterType("poster")}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                        adFilterType === "poster"
                                            ? "bg-orange-600 text-white shadow-2xs"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    🖼️ Posters ({specialAds.filter((a) => a.type === "poster").length})
                                </button>
                                <button
                                    onClick={() => setAdFilterType("text")}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                        adFilterType === "text"
                                            ? "bg-blue-600 text-white shadow-2xs"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    📄 Classifieds ({specialAds.filter((a) => a.type === "text").length})
                                </button>
                                <button
                                    onClick={() => setAdFilterType("user-listings")}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                        adFilterType === "user-listings"
                                            ? "bg-emerald-600 text-white shadow-2xs"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    🏢 User Listings ({userListings.length})
                                </button>
                            </div>
                        </div>

                        {/* Special Advertisements Cards Grid */}
                        {filteredSpecialAds.length === 0 ? (
                            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl mx-auto flex items-center justify-center mb-3">
                                    <SparklesIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-base font-black text-slate-800">
                                    कोई विज्ञापन नहीं मिला (No Advertisements Found)
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                                    {searchQuery
                                        ? `"${searchQuery}" से कोई विज्ञापन मैच नहीं हुआ।`
                                        : "वर्तमान में इस फ़िल्टर में कोई विज्ञापन नहीं है।"}
                                </p>
                                <button
                                    onClick={handleOpenAddAd}
                                    className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                                >
                                    + नया विज्ञापन जोड़ें
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filteredSpecialAds.map((ad) => {
                                    const isUserAd = ad.isUserListing;
                                    const isPending = ad.status === "pending" || !ad.status;

                                    return (
                                        <div
                                            key={ad.id}
                                            className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
                                        >
                                            <div>
                                                {/* Tag / Header Bar */}
                                                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold">
                                                    <div className="flex items-center gap-1.5">
                                                        <span
                                                            className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                                                                isUserAd
                                                                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                                                    : ad.type === "poster"
                                                                    ? "bg-orange-100 text-orange-700 border border-orange-200"
                                                                    : "bg-blue-100 text-blue-700 border border-blue-200"
                                                            }`}
                                                        >
                                                            {isUserAd
                                                                ? "🏢 User Business"
                                                                : ad.type === "poster"
                                                                ? "🖼️ Poster Flyer"
                                                                : "📄 Text Classified"}
                                                        </span>
                                                        {isUserAd && (
                                                            <span
                                                                className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase border ${
                                                                    isPending
                                                                        ? "bg-amber-100 text-amber-800 border-amber-300"
                                                                        : "bg-emerald-100 text-emerald-800 border-emerald-300"
                                                                }`}
                                                            >
                                                                {isPending ? "Pending" : "Active"}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[11px] text-slate-500 font-semibold truncate max-w-[150px]">
                                                        📍 {ad.city || "Gorakhpur"} • {ad.category || "General"}
                                                    </span>
                                                </div>

                                                {/* Visual Preview */}
                                                {ad.type === "poster" ? (
                                                    <div className="relative w-full aspect-[3/4] bg-slate-900 overflow-hidden">
                                                        <img
                                                            src={ad.image || "/dandiya-poster.jpg"}
                                                            alt={ad.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="p-4 bg-[#f0f6ff] min-h-[160px] flex flex-col justify-start border-b border-blue-100/60 overflow-hidden">
                                                        <div className="w-7 h-7 rounded-lg bg-white/95 text-blue-600 flex items-center justify-center mb-2 shadow-2xs shrink-0">
                                                            <DocumentListingIcon className="w-4 h-4 text-blue-600" />
                                                        </div>
                                                        <p className="text-xs text-slate-700 leading-relaxed font-normal line-clamp-5">
                                                            {ad.text || ad.fullText}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Card Info */}
                                                <div className="p-4 bg-white">
                                                    <h3 className="font-black text-sm text-slate-900 line-clamp-2 leading-snug">
                                                        {ad.title}
                                                    </h3>
                                                    <p className="text-xs text-slate-400 font-medium mt-1 capitalize truncate">
                                                        Listed by: <span className="text-slate-700 font-bold">{ad.author || "SN Business Vendor"}</span>
                                                    </p>
                                                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 mt-2">
                                                        <PhoneIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                                        <span>{ad.phone}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Admin Action Buttons */}
                                            <div className="p-3 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-2">
                                                {isUserAd ? (
                                                    <>
                                                        {isPending && (
                                                            <button
                                                                onClick={() => handleApproveListing(ad.id, ad.title)}
                                                                className="flex-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                                                            >
                                                                <CheckIcon className="w-3 h-3" />
                                                                <span>Approve</span>
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleOpenEditListing(ad.rawListing)}
                                                            className="flex-1 py-2 px-3 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-2xs hover:border-blue-400 cursor-pointer"
                                                        >
                                                            <PencilIcon className="w-3 h-3 text-blue-600" />
                                                            <span>Edit</span>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteUserListing(ad.id, ad.title)}
                                                            className="py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition-all cursor-pointer"
                                                            title="Delete Listing"
                                                        >
                                                            <TrashIcon className="w-3.5 h-3.5 text-rose-600" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleOpenEditAd(ad)}
                                                            className="flex-1 py-2 px-3 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-2xs hover:border-blue-400 cursor-pointer"
                                                        >
                                                            <PencilIcon className="w-3 h-3 text-blue-600" />
                                                            <span>Edit (एडिट करें)</span>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteAd(ad.id, ad.title)}
                                                            className="py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition-all cursor-pointer"
                                                            title="Delete Advertisement"
                                                        >
                                                            <TrashIcon className="w-3.5 h-3.5 text-rose-600" />
                                                            <span>Delete</span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
                </main>
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

            {/* Modal 3: Create or Edit Special Advertisement */}
            {isAdModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                    <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-150 max-h-[92vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => setIsAdModalOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center cursor-pointer transition-colors"
                        >
                            <CloseXIcon className="w-3.5 h-3.5" />
                        </button>

                        <div className="mb-5">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/60">
                                    {editingAd ? "Edit Advertisement" : "New Advertisement"}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">
                                    (विशेष विज्ञापन)
                                </span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                                {editingAd ? "विशेष विज्ञापन एडिट करें" : "नया विशेष विज्ञापन जोड़ें"}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                यहाँ किया गया बदलाव तुरंत होमपेज के &quot;Special Advertisement&quot; सेक्शन में लाइव दिखेगा।
                            </p>
                        </div>

                        <form onSubmit={handleSaveAd} className="space-y-4">
                            {/* Advertisement Type Selector */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    विज्ञापन का प्रकार (Advertisement Type) *
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setAdForm({ ...adForm, type: "poster" })}
                                        className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                                            adForm.type === "poster"
                                                ? "border-orange-500 bg-orange-50/80 ring-2 ring-orange-200"
                                                : "border-slate-200 bg-white hover:border-slate-300"
                                        }`}
                                    >
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                            adForm.type === "poster" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-600"
                                        }`}>
                                            <PhotoIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-black text-slate-900">
                                                🖼️ Poster Flyer
                                            </div>
                                            <div className="text-[10px] text-slate-500">
                                                इवेंट / बैनर फ़ोटो
                                            </div>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setAdForm({ ...adForm, type: "text" })}
                                        className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                                            adForm.type === "text"
                                                ? "border-blue-500 bg-blue-50/80 ring-2 ring-blue-200"
                                                : "border-slate-200 bg-white hover:border-slate-300"
                                        }`}
                                    >
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                            adForm.type === "text" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                                        }`}>
                                            <DocumentListingIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-black text-slate-900">
                                                📄 Text Classified
                                            </div>
                                            <div className="text-[10px] text-slate-500">
                                                प्रॉपर्टी, सर्विस टेक्स्ट
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    विज्ञापन का शीर्षक (Advertisement Title) *
                                </label>
                                <input
                                    type="text"
                                    value={adForm.title}
                                    onChange={(e) => setAdForm({ ...adForm, title: e.target.value })}
                                    placeholder="उदा: Dandiya Garba Utsav 2026 या 2 BHK Flat on Rent"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                                />
                            </div>

                            {/* 2-col inputs: Author / Vendor & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        विज्ञापनदाता / दुकान का नाम (Owner / Vendor)
                                    </label>
                                    <input
                                        type="text"
                                        value={adForm.author}
                                        onChange={(e) => setAdForm({ ...adForm, author: e.target.value })}
                                        placeholder="उदा: SN Events / R.K. Associates"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-orange-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        संपर्क नंबर (Phone Number) *
                                    </label>
                                    <input
                                        type="text"
                                        value={adForm.phone}
                                        onChange={(e) => setAdForm({ ...adForm, phone: e.target.value })}
                                        placeholder="+91 98765 43210"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-orange-500 outline-none"
                                    />
                                </div>
                            </div>

                            {/* 2-col inputs: City & Category */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        शहर / स्थान (City / Location)
                                    </label>
                                    <input
                                        type="text"
                                        value={adForm.city}
                                        onChange={(e) => setAdForm({ ...adForm, city: e.target.value })}
                                        placeholder="उदा: Gorakhpur, Lucknow, Basti"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-orange-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        कैटेगरी (Category)
                                    </label>
                                    <input
                                        type="text"
                                        value={adForm.category}
                                        onChange={(e) => setAdForm({ ...adForm, category: e.target.value })}
                                        placeholder="उदा: Events & Festivities, Real Estate"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-orange-500 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Conditional Fields based on Type */}
                            {adForm.type === "poster" ? (
                                <div className="space-y-3 p-3.5 bg-orange-50/50 rounded-2xl border border-orange-200/80">
                                    <label className="block text-xs font-black text-orange-950">
                                        पोस्टर इमेज सेटिंग्स (Poster Image Options)
                                    </label>

                                    {/* Quick Presets */}
                                    <div>
                                        <span className="text-[11px] font-bold text-slate-600 block mb-1.5">
                                            रेडीमेड पोस्टर चुनें (Presets):
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setAdForm({ ...adForm, image: "/dandiya-poster.jpg" })}
                                                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                    adForm.image === "/dandiya-poster.jpg"
                                                        ? "bg-orange-600 text-white shadow-2xs"
                                                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                                                }`}
                                            >
                                                🪘 Dandiya Garba Poster
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setAdForm({ ...adForm, image: "/stranger-talkmeet-poster.jpg" })}
                                                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                    adForm.image === "/stranger-talkmeet-poster.jpg"
                                                        ? "bg-orange-600 text-white shadow-2xs"
                                                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                                                }`}
                                            >
                                                ☕ TalkMeet / Cafe Poster
                                            </button>
                                        </div>
                                    </div>

                                    {/* Upload from Device */}
                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                            कंप्यूटर / मोबाइल से नई फ़ोटो अपलोड करें:
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-orange-600 file:text-white hover:file:bg-orange-700 cursor-pointer"
                                        />
                                        <p className="text-[10px] text-slate-400 mt-1">
                                            अधिकतम साइज़: 2.5MB (JPG, PNG, WebP)
                                        </p>
                                    </div>

                                    {/* Custom Image URL */}
                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                            या इमेज URL डालें (Image URL):
                                        </label>
                                        <input
                                            type="text"
                                            value={adForm.image}
                                            onChange={(e) => setAdForm({ ...adForm, image: e.target.value })}
                                            placeholder="https://example.com/poster.jpg या /dandiya-poster.jpg"
                                            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 bg-white focus:border-orange-500 outline-none"
                                        />
                                    </div>

                                    {/* Poster Image Preview */}
                                    {adForm.image && (
                                        <div className="pt-1 flex items-center gap-3">
                                            <div className="w-16 h-20 rounded-xl overflow-hidden border-2 border-orange-300 shadow-sm shrink-0 bg-slate-900">
                                                <img
                                                    src={adForm.image}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.src = "/dandiya-poster.jpg";
                                                    }}
                                                />
                                            </div>
                                            <div className="text-xs">
                                                <div className="font-bold text-slate-800">
                                                    पोस्टर प्रीव्यू (Live Preview)
                                                </div>
                                                <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                                                    ✓ इमेज सफलतापूर्वक सिलेक्ट हो गई है
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-3 p-3.5 bg-blue-50/50 rounded-2xl border border-blue-200/80">
                                    <label className="block text-xs font-black text-blue-950">
                                        टेक्स्ट क्लासिफाइड विवरण (Classified Text Content)
                                    </label>

                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                            संक्षिप्त विवरण / टेक्स्ट (Short Text / Listing Details) *
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={adForm.text}
                                            onChange={(e) => setAdForm({ ...adForm, text: e.target.value, fullText: e.target.value })}
                                            placeholder="उदा: 2 BHK Furnished Flat available with car parking near Golghar Gorakhpur..."
                                            required={adForm.type === "text"}
                                            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:border-blue-500 outline-none resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                            विस्तृत विवरण (Full Details / Optional)
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={adForm.fullText}
                                            onChange={(e) => setAdForm({ ...adForm, fullText: e.target.value })}
                                            placeholder="अतिरिक्त जानकारी, नियम व शर्तें आदि..."
                                            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:border-blue-500 outline-none resize-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsAdModalOpen(false)}
                                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white text-xs font-black shadow-md cursor-pointer active:scale-95 transition-all"
                                >
                                    {editingAd ? "Save Changes (अपडेट करें)" : "+ Publish Advertisement (विज्ञापन जोड़ें)"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal 3: Add or Edit Business Listing */}
            {isListingModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                    <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-150 max-h-[92vh] overflow-y-auto">
                        <button
                            onClick={() => setIsListingModalOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center cursor-pointer"
                        >
                            <CloseXIcon className="w-3.5 h-3.5" />
                        </button>

                        <div className="mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                                {editingListing ? "Edit Business Listing" : "New Business Listing"}
                            </span>
                            <h3 className="text-lg font-black text-slate-900 mt-1">
                                {editingListing ? "बिजनेस लिस्टिंग विवरण संपादित करें" : "नई बिजनेस लिस्टिंग जोड़ें"}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                यहाँ किया गया बदलाव तुरंत वेबसाइट और यूज़र डैशबोर्ड में अपडेट हो जाएगा।
                            </p>
                        </div>

                        <form onSubmit={handleSaveListing} className="space-y-3.5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Business Name (व्यवसाय का नाम) *
                                </label>
                                <input
                                    type="text"
                                    value={listingForm.title}
                                    onChange={(e) => setListingForm({ ...listingForm, title: e.target.value })}
                                    placeholder="उदा: khalilbad / SN Studio"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Category (कैटेगरी) *
                                    </label>
                                    <select
                                        value={listingForm.category}
                                        onChange={(e) => setListingForm({ ...listingForm, category: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none bg-white"
                                    >
                                        <option value="B2B Deals & Wholesale">B2B Deals &amp; Wholesale</option>
                                        <option value="EDUCATIONAL HUB">Educational Hub</option>
                                        <option value="OFFERS & EVENTS">Offers &amp; Events</option>
                                        <option value="NEARBY LOCAL SERVICES">Nearby Local Services</option>
                                        <option value="RENTAL PROPERTIES">Rental Properties</option>
                                        <option value="PROPERTIES & ASSETS FOR SALE">Properties for Sale</option>
                                        <option value="TOUR AND TRAVELS">Tour and Travels</option>
                                        <option value="REPAIR & HOME SERVICES">Repair &amp; Home Services</option>
                                        <option value="BUSINESS & PROFESSIONAL SERVICES">Business Services</option>
                                        <option value="General Business">General Business</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Approval Status (स्थिति) *
                                    </label>
                                    <select
                                        value={listingForm.status}
                                        onChange={(e) => setListingForm({ ...listingForm, status: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none bg-white"
                                    >
                                        <option value="active">Active &amp; Live (सत्यापित व लाइव)</option>
                                        <option value="pending">Pending (समीक्षा लंबित)</option>
                                        <option value="rejected">Rejected (अस्वीकृत)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Owner / Contact Person (मालिक का नाम)
                                    </label>
                                    <input
                                        type="text"
                                        value={listingForm.owner}
                                        onChange={(e) => setListingForm({ ...listingForm, owner: e.target.value })}
                                        placeholder="उदा: Abhishek / SN Business Vendor"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Phone / Mobile (फ़ोन नंबर) *
                                    </label>
                                    <input
                                        type="text"
                                        value={listingForm.phone}
                                        onChange={(e) => setListingForm({ ...listingForm, phone: e.target.value })}
                                        placeholder="91XXXXXXXX"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        City (शहर)
                                    </label>
                                    <input
                                        type="text"
                                        value={listingForm.city}
                                        onChange={(e) => setListingForm({ ...listingForm, city: e.target.value })}
                                        placeholder="Sant Kabir Nagar / Gorakhpur"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Address / Landmark (पता)
                                    </label>
                                    <input
                                        type="text"
                                        value={listingForm.address}
                                        onChange={(e) => setListingForm({ ...listingForm, address: e.target.value })}
                                        placeholder="उदा: Main Road, Khalilabad"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Description (विवरण)
                                </label>
                                <textarea
                                    rows={3}
                                    value={listingForm.description}
                                    onChange={(e) => setListingForm({ ...listingForm, description: e.target.value })}
                                    placeholder="व्यवसाय या सेवाओं का संक्षिप्त विवरण..."
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none resize-none"
                                />
                            </div>

                            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsListingModalOpen(false)}
                                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-md cursor-pointer active:scale-95 transition-all"
                                >
                                    {editingListing ? "Save Changes (अपडेट करें)" : "+ Add Listing (लिस्टिंग जोड़ें)"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
