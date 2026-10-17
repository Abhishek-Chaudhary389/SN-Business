"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="mt-12 bg-white border-t border-slate-200 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-slate-100">
                    <div className="space-y-2">
                        <div className="flex items-center text-xl font-black">
                            <span className="text-red-600">SN</span>
                            <span className="text-[#0c1a2c]">business</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            India&apos;s fastest growing local search engine, connecting buyers with verified local sellers, institutes, and service providers.
                        </p>
                        <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
                            <span>© 2026 SN Business</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs text-slate-900 mb-2">Popular Categories</h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                            <li><a href="#" className="hover:text-blue-600">Schools &amp; Colleges</a></li>
                            <li><a href="#" className="hover:text-blue-600">B2B Quick Quotes</a></li>
                            <li><a href="#" className="hover:text-blue-600">Repairs &amp; Maintenance</a></li>
                            <li><a href="#" className="hover:text-blue-600">Advertising Services</a></li>
                            <li><a href="#" className="hover:text-blue-600">Coaching Centers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs text-slate-900 mb-2">Top Cities</h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                            <li><a href="#" className="hover:text-blue-600">Delhi NCR</a></li>
                            <li><a href="#" className="hover:text-blue-600">Mumbai</a></li>
                            <li><a href="#" className="hover:text-blue-600">Bangalore</a></li>
                            <li><a href="#" className="hover:text-blue-600">Lucknow</a></li>
                            <li><a href="#" className="hover:text-blue-600">Patna &amp; Bihar</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs text-slate-900 mb-2">For Businesses</h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                            <li><a href="#" className="hover:text-blue-600">Advertise on SN Business</a></li>
                            <li><a href="#" className="hover:text-blue-600">Free Business Listing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Lead Generation Services</a></li>
                            <li><a href="#" className="hover:text-blue-600">Customer Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
                    <p>© 2026 SN Business. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs">
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600">Terms of Use</a>
                        <a href="/admin" className="text-blue-600 hover:text-blue-800 font-bold">Admin Panel</a>
                        <a href="#" className="hover:text-blue-600">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
