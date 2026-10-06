"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, getRelatedProducts } from "@/data/products";
import { companyData } from "@/data/company";
import MachineSpecsTable from "@/components/MachineSpecsTable";
import QuoteModal from "@/components/QuoteModal";
import BrochureModal from "@/components/BrochureModal";
import ProductCard from "@/components/ProductCard";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Zap,
  Weight,
  Cpu,
  Layers,
  FileText,
  Phone,
  MessageSquare,
  Download,
  Factory,
  Package,
  Truck,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [activeImage, setActiveImage] = useState<string>(product.primaryImage);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  const related = getRelatedProducts(product.id, 3);

  const handleWhatsAppInquiry = () => {
    const msg = encodeURIComponent(
      `Hello Krishna Packaging Industry, I am interested in *${product.name}* (Price: ${product.priceRange}). Please send technical quotation and dispatch details.`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Strip */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link href="/our-products" className="hover:text-slate-900 font-medium">Our Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-slate-900 font-bold truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Product Images Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Active Image Box */}
            <div className="relative h-96 sm:h-[480px] bg-white rounded-3xl border border-slate-200 p-6 flex items-center justify-center shadow-lg overflow-hidden group">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl shadow">
                  {product.category}
                </span>
                <span className="bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-xl flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-sky-600" />
                  {product.speed}
                </span>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={activeImage || product.primaryImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-4 right-4 z-10 bg-slate-900/80 backdrop-blur-sm text-amber-400 text-[11px] font-semibold px-3 py-1 rounded-lg">
                Faridabad Factory Made
              </div>
            </div>

            {/* Thumbnail Carousel / List */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 bg-white rounded-2xl border-2 overflow-hidden flex-shrink-0 p-1 transition-all ${
                      (activeImage || product.primaryImage) === img
                        ? "border-amber-500 ring-2 ring-amber-500/20 shadow-md"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Factory Quality Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div className="text-[11px]">
                  <strong className="block text-slate-900">GMP Grade</strong>
                  <span className="text-slate-500">SS-316/304</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <div className="text-[11px]">
                  <strong className="block text-slate-900">Lead Time</strong>
                  <span className="text-slate-500">{product.deliveryTime}</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Truck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div className="text-[11px]">
                  <strong className="block text-slate-900">Dispatch</strong>
                  <span className="text-slate-500">PAN India & Export</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Details & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">
                Industrial Packaging Automation
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-1 leading-tight">
                {product.name}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                  Product Details / Price Range
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-600 block mt-0.5">
                  {product.priceRange}
                </span>
                <span className="text-xs text-slate-600 block mt-0.5">
                  (Official Listing: {product.priceRaw})
                </span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] font-semibold text-slate-500 block">
                  Minimum Order Quantity
                </span>
                <span className="text-sm font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 inline-block mt-0.5">
                  {product.minOrderQuantity}
                </span>
              </div>
            </div>

            {/* Quick Specs Matrix */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                  <Gauge className="w-3.5 h-3.5 text-sky-600" />
                  <span className="font-semibold text-[10px] uppercase">Packaging Speed</span>
                </div>
                <span className="font-extrabold text-slate-900 text-sm block">{product.speed}</span>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-semibold text-[10px] uppercase">Filling System</span>
                </div>
                <span className="font-extrabold text-slate-900 text-sm block">{product.fillingSystem}</span>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold text-[10px] uppercase">Power Rating</span>
                </div>
                <span className="font-extrabold text-slate-900 text-sm block">{product.powerRequired}</span>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                  <Weight className="w-3.5 h-3.5 text-purple-600" />
                  <span className="font-semibold text-[10px] uppercase">Machine Gross Weight</span>
                </div>
                <span className="font-extrabold text-slate-900 text-sm block">{product.machineWeight}</span>
              </div>
            </div>

            {/* Suitable Products / Target Materials */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Suitable Products & Materials:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.targetMaterials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-white text-slate-800 border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Request Quotation</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </button>

              <button
                onClick={() => setBrochureOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-4 rounded-2xl transition-all flex items-center justify-center gap-1.5 text-xs"
                title="Download Spec Sheet"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Data Sheet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLONED TECHNICAL SPECIFICATIONS & TRADE INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Full Interactive Specs Table */}
        <div>
          <div className="mb-4">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
              Engineering Blueprint
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Technical Specifications ({product.name})
            </h2>
          </div>

          <MachineSpecsTable specs={product.technicalSpecs} machineName={product.name} />
        </div>

        {/* Cloned Trade Information Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-600" />
            Trade Information & Supply Capability
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-slate-500 font-semibold block uppercase text-[10px]">Supply Ability</span>
              <strong className="text-slate-900 text-sm mt-1 block">{product.tradeInfo.supplyAbility}</strong>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-slate-500 font-semibold block uppercase text-[10px]">Delivery Time</span>
              <strong className="text-slate-900 text-sm mt-1 block">{product.tradeInfo.deliveryTime}</strong>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-slate-500 font-semibold block uppercase text-[10px]">Main Market</span>
              <strong className="text-slate-900 text-sm mt-1 block">{product.tradeInfo.mainDomesticMarket}</strong>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-slate-500 font-semibold block uppercase text-[10px]">Packaging Details</span>
              <strong className="text-slate-900 text-sm mt-1 block">{product.tradeInfo.packagingDetails}</strong>
            </div>
          </div>
        </div>

        {/* Product Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Product Overview & Design Architecture
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            <h4 className="text-base font-bold text-slate-900 pt-3">
              Key Engineering Features:
            </h4>
            <div className="space-y-2.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                Direct Manufacturer Advantage
              </span>
              <h3 className="text-2xl font-black text-white">
                Need Custom Tooling for Unique Pouch Formats?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We can customize the sealing jaw width, batch coder integration, nitrogen flushing system, multi-lane conveyor, or gas flushing attachments for this model.
              </p>

              <div className="space-y-2 text-xs text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Faridabad Workshop Trials Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>100% Genuine Spare Parts Guarantee</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow"
              >
                <span>Request Custom Machine Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyData.phones[0]}`}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Factory: {companyData.displayPhones[0]}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Packaging Machines */}
        <div className="pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                Explore More Machinery
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Related Packaging Equipment
              </h3>
            </div>
            <Link
              href="/our-products"
              className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
            >
              All Models <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Quotation & Brochure Modals */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={product.name}
      />

      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        product={product}
      />
    </div>
  );
}
