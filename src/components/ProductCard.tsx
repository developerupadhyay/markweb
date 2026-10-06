"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Gauge,
  Zap,
  Weight,
  ArrowRight,
  FileText,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { Product } from "@/data/products";
import QuoteModal from "./QuoteModal";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <div
        className={`group bg-white rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden ${
          featured
            ? "border-amber-400 shadow-xl ring-2 ring-amber-400/25 hover:shadow-2xl"
            : "border-slate-200 hover:border-sky-400 shadow-md hover:shadow-xl"
        }`}
      >
        {/* Card Header Media */}
        <div className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-slate-50 to-slate-100/90 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
          {/* Top Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
            <span className="bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-xl shadow-md border border-slate-700/50">
              {product.category}
            </span>
            {featured && (
              <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Popular
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="bg-white/95 backdrop-blur-sm text-sky-800 text-xs font-black px-3 py-1 rounded-xl border border-sky-200 shadow-sm flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-sky-600" />
              <span>{product.speed}</span>
            </span>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.primaryImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <Link href={`/our-products/${product.slug}`} className="block">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 leading-snug">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
              {product.tagline}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                <Layers className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="truncate text-xs font-semibold">{product.fillingSystem}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                <Zap className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span className="truncate text-xs font-semibold">{product.powerRequired}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                <Weight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="truncate text-xs font-semibold">{product.machineWeight}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                <Cpu className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="truncate text-xs font-semibold">Film: {product.filmWidth}</span>
              </div>
            </div>

            {/* Target Materials */}
            <div className="pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Packaging Materials:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.targetMaterials.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
                {product.targetMaterials.length > 3 && (
                  <span className="text-[11px] font-bold text-slate-400 px-1 py-0.5">
                    +{product.targetMaterials.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Pricing & Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3.5">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">
                  Ex-Factory Price
                </span>
                <span className="text-lg sm:text-xl font-black text-amber-600">
                  {product.priceRange}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-xl">
                MOQ: {product.minOrderQuantity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <Link
                href={`/our-products/${product.slug}`}
                className="btn-secondary py-3 text-xs"
              >
                <span>Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-primary py-3 text-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={product.name}
      />
    </>
  );
}
