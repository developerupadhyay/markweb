"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowRight,
  Gauge,
  Zap,
  Weight,
  Cpu,
  Layers,
  FileText,
  SlidersHorizontal,
  ArrowUpDown,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { productsData, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"default" | "speed" | "name">("default");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState("");

  const categories = [
    "All",
    "FFS Machines",
    "Collar Type",
    "Flow Wrap",
    "Multi-Head Weigher",
    "Bakery & Special",
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData.filter((prod) => {
      const matchesCat =
        selectedCategory === "All" || prod.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        prod.name.toLowerCase().includes(q) ||
        prod.tagline.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.targetMaterials.some((m) => m.toLowerCase().includes(q)) ||
        prod.applications.some((a) => a.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });

    if (sortBy === "speed") {
      result = [...result].sort((a, b) => {
        const speedA = parseInt(a.speed.match(/\d+/)?.[0] || "0", 10);
        const speedB = parseInt(b.speed.match(/\d+/)?.[0] || "0", 10);
        return speedB - speedA;
      });
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Catalog Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Complete Packaging Machinery Portfolio • {productsData.length} Models</span>
          </div>

          <h1 className="h1-fluid font-black tracking-tight text-white leading-tight">
            Packaging Machinery Catalog
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our heavy-duty Form-Fill-Seal, Auger Powder Fillers, Multi-Head Weighers, and Flow Wrap machines with complete technical specifications and ex-factory pricing.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 z-20 relative">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="md:col-span-7 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by product name, spices, namkeen, biscuit, powder..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sorting */}
            <div className="md:col-span-5 flex items-center justify-end gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                <span>Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-300 text-xs font-bold text-slate-800 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="default">Default Order</option>
                <option value="speed">Speed Output (High to Low)</option>
                <option value="name">Alphabetical (A - Z)</option>
              </select>

              <Link
                href="/compare"
                className="hidden sm:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2.5 rounded-xl transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
                <span>Compare Matrix</span>
              </Link>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Showing <strong className="text-slate-900">{filteredAndSortedProducts.length}</strong> packaging machinery models
          </p>

          <button
            onClick={() => {
              setSelectedProductForQuote("General Packaging Machinery Catalog");
              setQuoteModalOpen(true);
            }}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Full Catalog Price List</span>
          </button>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Layers className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No machinery found matching your criteria</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We fabricate custom tooling for unique pouch shapes, grammages, and speeds. Please contact our engineering desk.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((prod, idx) => (
              <ProductCard key={prod.id} product={prod} featured={idx === 0 || idx === 8} />
            ))}
          </div>
        )}
      </section>

      {/* Trade Information & Export Standards Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">1-Year Factory Warranty</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Complete warranty covering all mechanical linkages, PLC controllers, and gear motors with on-call support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Custom Sizing & Tooling</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Forming collars, sealing jaws, and hoppers custom engineered to your exact film roll and pouch grammage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Factory Test Video Trial</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Every machine undergoes live testing with your sample film and product before dispatch from Faridabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={selectedProductForQuote}
      />
    </div>
  );
}
