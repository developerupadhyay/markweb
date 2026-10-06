"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Factory,
} from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Call to Action Strip */}
      <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-amber-950 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
              <Factory className="w-4 h-4" /> Ready to Upgrade Your Production Line?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Custom Industrial Packaging Machinery Tailored to Your Products
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              From high-speed pillow wrapping to computerized multihead weighers, get heavy-duty machines built in Faridabad with full warranty and on-site setup.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact-us"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm"
            >
              <span>Speak to Chief Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${companyData.phones[0]}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3 rounded-xl transition-all flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{companyData.displayPhones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About Krishna Packaging */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-md">
                <Image
                  src="/images/cropped-kpi-logo-60x59.png"
                  alt="Krishna Packaging Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white tracking-tight">
                  KRISHNA PACKAGING INDUSTRY
                </h4>
                <p className="text-xs text-sky-400 font-semibold tracking-wider uppercase">
                  Machinery Exporter, Manufacturer & Supplier
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Established in Faridabad, Haryana, Krishna Packaging Industry is a premier manufacturer of heavy-duty Form-Fill-Seal, Auger Fillers, Collar Type Cup Fillers, and Horizontal Flow Wrapping automation systems built to strict GMP guidelines.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Food Grade SS-316 & SS-304 Stainless Steel Construction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Festo / Janatics Pneumatics & Bonfiglioli Drive Powertrains</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Export Packaging with Pre-Shipment Factory Trials</span>
              </div>
            </div>

            {/* Newsletter / Catalog Request */}
            <div className="pt-3">
              <span className="text-xs font-bold text-slate-200 block mb-2">
                Get Machine Spec Sheets & Updates
              </span>
              {subscribed ? (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! Our catalog link has been sent to your email.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3.5 py-2.5 flex-1 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Machinery Models */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-2.5">
              Packaging Machinery
            </h4>
            <ul className="space-y-2 text-xs">
              {productsData.slice(0, 7).map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/our-products/${prod.slug}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 line-clamp-1"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/our-products"
                  className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 pt-1"
                >
                  View All 9+ Models <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Applications & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-sky-500 pl-2.5">
              Industry Applications
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/applications#snacks" className="hover:text-amber-400 transition-colors">
                  Spices, Masala & Seasonings
                </Link>
              </li>
              <li>
                <Link href="/applications#snacks" className="hover:text-amber-400 transition-colors">
                  Namkeen, Sev & Fryums
                </Link>
              </li>
              <li>
                <Link href="/applications#bakery" className="hover:text-amber-400 transition-colors">
                  Biscuits, Rusks & Bakery Packs
                </Link>
              </li>
              <li>
                <Link href="/applications#powders" className="hover:text-amber-400 transition-colors">
                  Besan, Atta, Maida & Sattu
                </Link>
              </li>
              <li>
                <Link href="/applications#granules" className="hover:text-amber-400 transition-colors">
                  Tea, Coffee & Dry Fruits
                </Link>
              </li>
              <li>
                <Link href="/applications#non-food" className="hover:text-amber-400 transition-colors">
                  Soaps, Detergent & Hardware
                </Link>
              </li>
            </ul>

            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-sky-500 pl-2.5 pt-3">
              Explore Site
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/about-us" className="hover:text-amber-400">About Our Company</Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-amber-400">Manufacturing Plant</Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-amber-400">Compare Specifications</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-amber-400">Factory Location & Map</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Factory Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5">
              Manufacturing Unit
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white block">Krishna Packaging Industry</strong>
                  {companyData.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${companyData.phones[0]}`} className="hover:text-amber-400 font-semibold">
                    {companyData.displayPhones[0]}
                  </a>
                  <a href={`tel:${companyData.phones[1]}`} className="hover:text-amber-400 font-semibold text-slate-400">
                    {companyData.displayPhones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-sky-300">
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{companyData.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Jeevan+nagar+Wazirpur+HUDA+Road+Greater+Faridabad+Faridabad+121002+Haryana+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-slate-900/80 border-t border-slate-800/80 py-6 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © 2026 <strong className="text-slate-200">Krishna Packaging Industry</strong>. All Rights Reserved. Engineered with Pride in Faridabad, Haryana, India.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/about-us" className="hover:text-slate-200">About Us</Link>
            <Link href="/our-products" className="hover:text-slate-200">Products Catalog</Link>
            <Link href="/contact-us" className="hover:text-slate-200">Contact Support</Link>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-medium">GMP Certified Machine Fabrication</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
