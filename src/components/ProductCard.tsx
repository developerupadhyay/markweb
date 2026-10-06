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
            ? "border-amber-400 shadow-xl ring-2 ring-amber-400/20 hover:shadow-2xl"
            : "border-slate-200 hover:border-sky-400 shadow-md hover:shadow-xl"
        }`}
      >
        {/* Card Header Media */}
        <div className="relative h-64 w-full bg-gradient-to-b from-slate-50 to-slate-100/80 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
          {/* Top Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
            <span className="bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow">
              {product.category}
            </span>
            {featured && (
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="bg-sky-50 text-sky-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-sky-200 shadow-sm flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-sky-600" />
              {product.speed}
            </span>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.primaryImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <Link href={`/our-products/${product.slug}`} className="block">
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 leading-snug">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
              {product.tagline}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-xl">
                <Layers className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span className="truncate text-[11px]">{product.fillingSystem}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-xl">
                <Zap className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                <span className="truncate text-[11px]">Power: {product.powerRequired}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-xl">
                <Weight className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate text-[11px]">{product.machineWeight}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-xl">
                <Cpu className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                <span className="truncate text-[11px]">Film: {product.filmWidth}</span>
              </div>
            </div>

            {/* Suitable For */}
            <div className="mt-3.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Ideal For Packaging:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.targetMaterials.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
                {product.targetMaterials.length > 3 && (
                  <span className="text-[10px] font-bold text-slate-400 px-1 py-0.5">
                    +{product.targetMaterials.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Pricing & Footer Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  Ex-Factory Price Range
                </span>
                <span className="text-base sm:text-lg font-black text-amber-600">
                  {product.priceRange}
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                MOQ: {product.minOrderQuantity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/our-products/${product.slug}`}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1 text-center"
              >
                <span>Full Specs</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <button
                onClick={() => setQuoteOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
              >
                <FileText className="w-3 h-3" />
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
