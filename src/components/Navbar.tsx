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
    { name: "About", href: "/about-us" },
    { name: "Products", href: "/our-products", hasDropdown: true },
    { name: "Applications", href: "/applications" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Compare", href: "/compare" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      <header className="w-full z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 truncate">
              <a
                href={`tel:${companyData.phones[0]}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>{companyData.displayPhones[0]}</span>
              </a>
              <a
                href={`mailto:${companyData.email}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>{companyData.email}</span>
              </a>
              <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Faridabad, Haryana (India)</span>
              </span>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="hidden lg:inline text-slate-400">
                Mon - Sat: 9:00 AM - 7:30 PM
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-500/25">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>ISO 9001:2015</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-200 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md sticky top-0 border-b border-slate-200"
              : "bg-white border-b border-slate-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18">
              {/* Logo & Brand Identity */}
              <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center p-1 border border-slate-800 shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/cropped-kpi-logo-60x59.png"
                    alt="Krishna Packaging Industry Logo"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                    KRISHNA
                  </span>
                  <span className="text-[10px] tracking-wider font-bold text-sky-700 uppercase">
                    Packaging Industry
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden xl:flex items-center gap-0.5">
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
                          className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                            isActive
                              ? "text-sky-700 bg-sky-50"
                              : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180 text-sky-600" : "opacity-60"}`} />
                        </Link>

                        {/* Mega Dropdown Menu */}
                        {productsDropdownOpen && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                              <div className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-amber-600" />
                                <span className="font-bold text-slate-900 text-xs">
                                  Packaging Machinery Catalog ({productsData.length} Models)
                                </span>
                              </div>
                              <Link
                                href="/our-products"
                                onClick={() => setProductsDropdownOpen(false)}
                                className="text-xs text-sky-700 hover:text-sky-800 font-semibold flex items-center gap-1 bg-sky-50 px-2.5 py-1 rounded-md hover:bg-sky-100"
                              >
                                View All <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                              {productsData.map((prod) => (
                                <Link
                                  key={prod.id}
                                  href={`/our-products/${prod.slug}`}
                                  onClick={() => setProductsDropdownOpen(false)}
                                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                                >
                                  <div className="w-12 h-12 relative bg-slate-50 rounded-lg flex-shrink-0 overflow-hidden border border-slate-200 flex items-center justify-center p-1">
                                    <Image
                                      src={prod.primaryImage}
                                      alt={prod.name}
                                      fill
                                      sizes="48px"
                                      className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 truncate leading-snug">
                                      {prod.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                      Speed: {prod.speed}
                                    </p>
                                    <span className="text-[11px] font-bold text-amber-600 block">
                                      {prod.priceRange}
                                    </span>
                                  </div>
                                </Link>
                              ))}
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
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "text-sky-700 bg-sky-50"
                          : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="hidden sm:flex items-center gap-2.5">
                {/* Search Trigger */}
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                  aria-label="Search Machinery"
                  title="Search Machines & Applications"
                >
                  <Search className="w-4 h-4" />
                </button>

                {/* Instant Quote CTA */}
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary py-2.5 px-4 text-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-950" />
                  <span>Request Quote</span>
                </button>
              </div>

              {/* Mobile Menu & Search buttons */}
              <div className="flex items-center gap-2 xl:hidden">
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    pathname === link.href
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full btn-primary py-3 text-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Machinery Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <a
                    href={`tel:${companyData.phones[0]}`}
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    Call Us
                  </a>
                  <a
                    href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Krishna%20Packaging%20Industry,%20I%20want%20to%20inquire%20about%20packaging%20machines`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-bold"
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
