"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  Phone,
  Settings,
  Cpu,
  Zap,
  TrendingUp,
  FileText,
  Clock,
  Sparkles,
  ChevronRight,
  Filter,
} from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import MachineCalculator from "@/components/MachineCalculator";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const categories = [
    "All",
    "FFS Machines",
    "Collar Type",
    "Flow Wrap",
    "Multi-Head Weigher",
    "Bakery & Special",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white pt-14 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Grid & Ambient Lights */}
        <div className="absolute inset-0 dark-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-4 py-1.5 rounded-full text-xs font-bold text-amber-400 shadow-inner">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Premier Packaging Machinery Exporter & Manufacturer Faridabad</span>
              </div>

              {/* Headline */}
              <h1 className="h1-fluid text-white font-black tracking-tight leading-tight">
                High-Speed Packaging Machinery{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-sky-400">
                  Built to Last
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Delivering a sturdy and functionally efficient range of Form-Fill-Seal, Collar Type, Flow Wrap, Auger Fillers, and Computerized Multi-Head Weighing packaging machines for food, spices, snacks, and bakery industries since 2010.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>Request Machine Quote</span>
                </button>

                <Link
                  href="/our-products"
                  className="btn-outline"
                >
                  <span>Explore 9+ Models</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </Link>

                <a
                  href={`tel:${companyData.phones[0]}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 text-xs font-bold px-4 py-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: {companyData.displayPhones[0]}</span>
                </a>
              </div>

              {/* Highlights Pill Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {companyData.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 shadow-sm">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 block leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-bold text-slate-300 block line-clamp-1 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Media Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-5 bg-gradient-to-b from-slate-800/80 to-slate-900/95 border border-slate-700 shadow-2xl overflow-hidden group">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950/70 flex items-center justify-center p-4">
                  <Image
                    src="/images/m-123.png"
                    alt="Multihead Weighing Packaging Machine"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs shadow-md">
                    <span className="text-amber-400 font-bold block text-[10px] uppercase">Featured Model</span>
                    <span className="text-white font-bold text-xs">Multi-Head Weigher Line</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-emerald-950/90 border border-emerald-500/40 px-3.5 py-1.5 rounded-xl text-xs text-emerald-300 font-bold flex items-center gap-1.5 shadow-md">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Up to 100 PPM</span>
                  </div>
                </div>

                <div className="mt-4 p-3.5 bg-slate-800/90 rounded-2xl flex items-center justify-between text-xs border border-slate-700/60">
                  <div>
                    <h4 className="font-extrabold text-white text-sm">Fully Automatic Multihead Packaging</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Chips, Namkeen, Spices & Dry Fruits</p>
                  </div>
                  <Link
                    href="/our-products/fully-automatic-multi-head-weighing-packaging"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs flex items-center gap-1 shadow-sm transition-all"
                  >
                    View <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLONED HOMEPAGE SECTION: WELCOME & ABOUT US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Media on Left */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-72 sm:h-84 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/aboutsec1.jpg"
                  alt="Krishna Packaging Industry Manufacturing Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-lg">
                      Faridabad, Haryana
                    </span>
                    <h4 className="text-white text-lg font-black mt-1.5">
                      Advanced Machine Assembly & Testing Plant
                    </h4>
                  </div>
                </div>
              </div>

              {/* Sub Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/images/p2.jpg"
                    alt="Packaging Machine Testing"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/images/p3.jpg"
                    alt="Pouch Packing Assembly"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-sky-100">
                <Factory className="w-4 h-4 text-sky-600" />
                <span>Since 2010 • Renowned Machinery Exporter</span>
              </div>

              <h2 className="h2-fluid text-slate-900 font-black tracking-tight leading-tight">
                Welcome to <span className="text-sky-700">Krishna Packaging Industry</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Delivering a range of sturdy and functionally efficient Packaging Machines for the food & beverage industry… Our offering products are <strong>Food Packing Machine, Pouch Packaging Machine, Namkeen Packing Machine, Snacks Packing Machine, Liquid Packing Machine, Tea Packing Machine, Flour Packing Machine, Spices Packing Machine</strong>, and more.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Packaging plays a vital role in almost every sector, among which the Food & Beverage Industry requires superior sanitary standards and airtight hermetic sealing. Adhering to this, we, <strong>Krishna Packaging Industry</strong>, are an eminent manufacturer, exporter, and supplier based in Faridabad (Haryana, India).
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-amber-400 transition-colors shadow-sm">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold mb-2.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm">GMP Standards</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Food-grade SS-316/304 contact parts prevent cross-contamination.</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-sky-400 transition-colors shadow-sm">
                  <div className="w-10 h-10 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center font-bold mb-2.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm">PLC Automation</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Delta / L&T digital touch controls with photocell eye-mark sensors.</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-400 transition-colors shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold mb-2.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm">High Output</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Speeds from 30 up to 200 pouches/min with minimal maintenance.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="btn-secondary"
                >
                  <span>Read Company History & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sky-700 hover:text-sky-800 font-bold text-sm inline-flex items-center gap-1"
                >
                  <span>Visit Our Factory</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLONED VISION, MISSION & VALUES CARDS (From old website) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
              Core Principles & Direction
            </span>
            <h2 className="h2-fluid text-slate-900 font-black">
              Our Vision, Mission & Values
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Guided by engineering precision and customer-first service across India and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src="/images/vision.webp"
                    alt="Our Vision"
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-black text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  To be globally recognized as India’s leading designer of robust, energy-efficient, and accessible packaging machinery that drives economic growth for small, medium, and large-scale manufacturing enterprises.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link
                  href="/about-us#vision"
                  className="text-sky-700 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src="/images/mission.webp"
                    alt="Our Mission"
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-black text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  To revolutionize packaging operations by providing cutting-edge machinery that maximizes client productivity, minimizes downtime, and guarantees zero leakage with superior aesthetics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link
                  href="/about-us#mission"
                  className="text-sky-700 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src="/images/values.webp"
                    alt="Our Values"
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-black text-slate-900">Our Values</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  <strong>Integrity:</strong> Unwavering honesty in component quality.
                  <br />
                  <strong>Excellence:</strong> Precision CNC fabrication.
                  <br />
                  <strong>Collaboration:</strong> Direct engineering partnership and lifetime service support.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link
                  href="/about-us#values"
                  className="text-sky-700 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLONED PRODUCTS CATALOG SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Most Popular Machinery Catalog</span>
              </div>
              <h2 className="h2-fluid text-slate-900 font-black mt-1">
                Industrial Packaging Solutions
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1 leading-relaxed">
                We provide the best quality products to our customers including High-Speed Servo Cup Filler Machines, Pneumatic Collar Type Packing Machines with Multihead Load Cells, and more.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 flex-shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                featured={idx === 0 || idx === 8 || idx === 5}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/our-products"
              className="btn-secondary px-8 py-4 text-sm"
            >
              <span>View All Machinery Models & Price Comparison</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR SECTION */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <MachineCalculator />
        </div>
      </section>

      {/* CLONED ACHIEVEMENTS & THREE PILLARS SECTION (From old website) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
              Our Core Strengths & Heritage
            </span>
            <h2 className="h2-fluid text-slate-900 font-black">
              Why Krishna Packaging Industry Leads the Market
            </h2>
            <p className="text-slate-600 text-sm">
              Our achievements are built on three solid pillars: uncompromising quality assurance, versatile product breadth, and advanced manufacturing infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Quality Assurance */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-6">
                <Image
                  src="/images/qualty1.png"
                  alt="Quality Assurance"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-black text-slate-900">Quality Assurance</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Every machine undergoes rigorous dry and wet test runs at our Faridabad plant. We test film tension, jaw sealing pressure, volumetric repeatability, and electrical heat dissipation before crate dispatch.
              </p>
              <ul className="mt-4 text-left text-xs space-y-2 text-slate-600 w-full pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Pre-Shipment Pouch Trial Video</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>SS-316 & SS-304 Food Contact Parts</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Products We Offer */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-6">
                <Image
                  src="/images/product-we.png"
                  alt="Products We Offer"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-black text-slate-900">Products We Offer</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                A comprehensive ecosystem covering Form-Fill-Seal, Multi-Track Sachet lines, High-Speed Servo Cup Fillers, Auger Powder Fillers, Horizontal Flow Wrappers, and Multi-Head Weighing Combinations.
              </p>
              <ul className="mt-4 text-left text-xs space-y-2 text-slate-600 w-full pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Grammage range: 2 gm up to 10 kg</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Speeds: 30 PPM up to 200 PPM</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Team & Infrastructure */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-6">
                <Image
                  src="/images/team-work1.png"
                  alt="Team and Infrastructure"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-black text-slate-900">Team & Infrastructure</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Located at a prime location in Greater Faridabad, Haryana, our engineering workshop is equipped with precision turning, CNC milling, welding bays, and an in-house electronic panel assembly line.
              </p>
              <ul className="mt-4 text-left text-xs space-y-2 text-slate-600 w-full pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Experienced Packaging Machine Technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Ready Inventory of Spare Parts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLONED WHY CHOOSE US SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h3 className="h3-fluid font-black text-white leading-snug">
                  We Consistently Strive To Exceed Expectations By Delivering Top-Quality Service That You Can Depend On
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Whether you are launching a new spice brand, scaling high-speed biscuit lines, or automating bulk dry fruit packaging, Krishna Packaging Industry provides custom engineering, genuine spare parts, and on-site operator training.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Heavy MS fabricated chassis with powder coat finish</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>L&T / Festo / Bonfiglioli industrial components</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>1-Year comprehensive warranty & on-site support</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>PAN India dispatch & seaworthy export crating</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary w-full py-4 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Quotation in 1 Hour</span>
                </button>
                <a
                  href={`tel:${companyData.phones[0]}`}
                  className="btn-outline w-full py-3.5 text-xs text-center"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Direct: {companyData.displayPhones[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL FACTORY FLOOR GALLERY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
              Manufacturing in Action
            </span>
            <h3 className="h3-fluid font-black text-slate-900">
              Factory Floor & Machine Installations
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Real machine snapshots from our Faridabad engineering workshop and client plant deployments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { src: "/images/p7.jpg", title: "Auger Filling Machine Assembly" },
              { src: "/images/m2.jpg", title: "Horizontal Flow Wrap Line" },
              { src: "/images/p2.jpg", title: "Cup Filler Testing Bay" },
              { src: "/images/p3.jpg", title: "Collar Former & Pneumatic Unit" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-48 sm:h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-md group bg-slate-900"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm font-bold leading-snug">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
