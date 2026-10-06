"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Search,
  FileText,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Settings,
  Sparkles,
  Layers,
} from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import QuoteModal from "./QuoteModal";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "All Products", href: "/our-products", hasDropdown: true },
    { name: "Applications", href: "/applications" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Compare Machines", href: "/compare" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header className="w-full z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6">
              <a
                href={`tel:${companyData.phones[0]}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>{companyData.displayPhones[0]}</span>
              </a>
              <a
                href={`tel:${companyData.phones[1]}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>{companyData.displayPhones[1]}</span>
              </a>
              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>{companyData.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-xs">
              <div className="hidden lg:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Faridabad, Haryana (India)</span>
              </div>
              <div className="hidden xl:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:30 PM</span>
              </div>
              <div className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-amber-500/30">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>ISO 9001:2015 Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg sticky top-0 border-b border-slate-200"
              : "bg-white border-b border-slate-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo & Brand Identity */}
              <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                <div className="relative w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-md p-1 border border-slate-800 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/cropped-kpi-logo-60x59.png"
                    alt="Krishna Packaging Industry Logo"
                    width={48}
                    height={48}
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                    KRISHNA
                  </span>
                  <span className="text-[10px] sm:text-xs tracking-widest font-extrabold text-sky-700 uppercase">
                    Packaging Industry
                  </span>
                  <span className="text-[9px] text-slate-500 font-medium">
                    Since 2010 • Faridabad (India)
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                            isActive
                              ? "text-sky-700 bg-sky-50 shadow-sm"
                              : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180 text-sky-600" : "opacity-70"}`} />
                        </Link>

                        {/* Mega Dropdown Menu */}
                        {productsDropdownOpen && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                              <div className="flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-amber-600" />
                                <span className="font-extrabold text-slate-900 text-sm">
                                  Packaging Machinery Catalog ({productsData.length} Models)
                                </span>
                              </div>
                              <Link
                                href="/our-products"
                                className="text-xs text-sky-700 hover:text-sky-800 font-bold flex items-center gap-1 bg-sky-50 px-3 py-1 rounded-lg hover:bg-sky-100 transition-colors"
                              >
                                View All Products <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2">
                              {productsData.map((prod) => (
                                <Link
                                  key={prod.id}
                                  href={`/our-products/${prod.slug}`}
                                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                                >
                                  <div className="w-16 h-16 relative bg-slate-100 rounded-xl flex-shrink-0 overflow-hidden border border-slate-200 flex items-center justify-center p-1">
                                    <Image
                                      src={prod.primaryImage}
                                      alt={prod.name}
                                      fill
                                      sizes="64px"
                                      className="object-contain p-1 group-hover:scale-105 transition-transform"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-700 truncate leading-snug">
                                      {prod.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                      Speed: {prod.speed}
                                    </p>
                                    <span className="text-xs font-extrabold text-amber-600 block mt-0.5">
                                      {prod.priceRange}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-3xl flex items-center justify-between text-xs text-slate-700">
                              <span className="flex items-center gap-2 font-semibold">
                                <Settings className="w-4 h-4 text-sky-600" />
                                Custom engineering available for unique pouch dimensions
                              </span>
                              <button
                                onClick={() => {
                                  setProductsDropdownOpen(false);
                                  setQuoteModalOpen(true);
                                }}
                                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-3.5 py-1.5 rounded-xl shadow-sm transition-all text-xs"
                              >
                                Request Custom Specs
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? "text-sky-700 bg-sky-50 shadow-sm"
                          : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="hidden sm:flex items-center gap-3">
                {/* Search Trigger */}
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-colors border border-slate-200 shadow-sm"
                  aria-label="Search Machinery"
                  title="Search Machines & Applications"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Instant Quote CTA */}
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>Get Instant Quote</span>
                </button>
              </div>

              {/* Mobile Menu & Search buttons */}
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="p-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    pathname === link.href
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full btn-primary py-3.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Machinery Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <a
                    href={`tel:${companyData.phones[0]}`}
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-2xl text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    Call Us
                  </a>
                  <a
                    href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Krishna%20Packaging%20Industry,%20I%20want%20to%20inquire%20about%20packaging%20machines`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-2xl text-xs font-bold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
