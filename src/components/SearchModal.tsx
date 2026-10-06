"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Cpu, Layers } from "lucide-react";
import { productsData, Product } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ""
    ? productsData
    : productsData.filter((prod) => {
        const q = query.toLowerCase();
        return (
          prod.name.toLowerCase().includes(q) ||
          prod.category.toLowerCase().includes(q) ||
          prod.description.toLowerCase().includes(q) ||
          prod.targetMaterials.some((m) => m.toLowerCase().includes(q)) ||
          prod.applications.some((a) => a.toLowerCase().includes(q)) ||
          Object.values(prod.technicalSpecs).some((v) => v.toLowerCase().includes(q))
        );
      });

  const popularSearches = [
    "Spices",
    "Namkeen",
    "Biscuit",
    "Rusk",
    "Besan / Powder",
    "Multi-Head Weigher",
    "Pouch Machine",
    "Flow Wrap",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-6 h-6 text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search machines by name, material (e.g. Spices, Besan, Biscuit) or type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base sm:text-lg font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 rounded-xl transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-2.5 bg-slate-100/70 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-500 font-bold flex-shrink-0">Popular:</span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 border border-slate-200 rounded-lg text-slate-700 font-medium whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
            <span>Showing {filteredProducts.length} machines</span>
            {query && <span>Query: &ldquo;{query}&rdquo;</span>}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Layers className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-700">No machinery matching &ldquo;{query}&rdquo;</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We design custom packaging machines for any powder, granule, or solid product. Contact us directly for a custom quote!
              </p>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold"
              >
                Inquire for Custom Machine
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/our-products/${prod.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 relative bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                    <Image
                      src={prod.primaryImage}
                      alt={prod.name}
                      fill
                      sizes="64px"
                      className="object-contain p-1 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded-md">
                      {prod.category}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 truncate mt-1">
                      {prod.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 truncate">
                      Speed: {prod.speed}
                    </p>
                    <span className="text-xs font-extrabold text-amber-600 block mt-0.5">
                      {prod.priceRange}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
