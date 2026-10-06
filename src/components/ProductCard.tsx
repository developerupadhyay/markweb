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
        className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${
          featured
            ? "border-amber-400/80 shadow-lg ring-1 ring-amber-400/30 hover:shadow-xl"
            : "border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md"
        }`}
      >
        {/* Card Header Media */}
        <div className="relative h-60 sm:h-64 w-full bg-gradient-to-b from-slate-50 to-slate-100/80 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
          {/* Top Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
            <span className="bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-sm">
              {product.category}
            </span>
            {featured && (
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Popular
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="bg-white/95 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-sky-200/80 shadow-sm flex items-center gap-1">
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
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <Link href={`/our-products/${product.slug}`} className="block">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 min-h-[2.75rem] leading-snug">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-slate-500 line-clamp-2 min-h-[2rem] leading-relaxed">
              {product.tagline}
            </p>

            {/* Quick Specs 2-Column Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <Layers className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span className="truncate text-[11px] font-medium">{product.fillingSystem}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <Zap className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                <span className="truncate text-[11px] font-medium">{product.powerRequired}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <Weight className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate text-[11px] font-medium">{product.machineWeight}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <Cpu className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                <span className="truncate text-[11px] font-medium">Film: {product.filmWidth}</span>
              </div>
            </div>

            {/* Target Materials */}
            <div className="pt-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Packaging Materials:
              </span>
              <div className="flex flex-wrap gap-1">
                {product.targetMaterials.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/70"
                  >
                    {item}
                  </span>
                ))}
                {product.targetMaterials.length > 3 && (
                  <span className="text-[10px] text-slate-400 px-1 py-0.5">
                    +{product.targetMaterials.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Pricing & Actions */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
                  Ex-Factory Price
                </span>
                <span className="text-base font-extrabold text-amber-600 tracking-tight leading-none block mt-0.5">
                  {product.priceRange}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
                  Min Order
                </span>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 inline-block mt-0.5">
                  {product.minOrderQuantity}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/our-products/${product.slug}`}
                className="btn-secondary py-2.5 text-xs"
              >
                <span>Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-primary py-2.5 text-xs"
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
