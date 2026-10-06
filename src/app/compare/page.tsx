"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
  FileText,
  Gauge,
  Zap,
  Weight,
  Layers,
  Sparkles,
} from "lucide-react";
import { productsData, Product } from "@/data/products";
import QuoteModal from "@/components/QuoteModal";

export default function ComparePage() {
  const [machine1Id, setMachine1Id] = useState<string>(productsData[0].id);
  const [machine2Id, setMachine2Id] = useState<string>(productsData[1].id);
  const [machine3Id, setMachine3Id] = useState<string>(productsData[8].id);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");

  const m1 = productsData.find((p) => p.id === machine1Id) || productsData[0];
  const m2 = productsData.find((p) => p.id === machine2Id) || productsData[1];
  const m3 = productsData.find((p) => p.id === machine3Id) || productsData[8];

  const comparedMachines = [m1, m2, m3];

  const comparisonRows = [
    { label: "Category", getVal: (p: Product) => p.category },
    { label: "Price Range (INR)", getVal: (p: Product) => p.priceRange },
    { label: "Packaging Speed", getVal: (p: Product) => p.speed },
    { label: "Filling System", getVal: (p: Product) => p.fillingSystem },
    { label: "Sealing Mechanism", getVal: (p: Product) => p.sealingType },
    { label: "Maximum Film Width", getVal: (p: Product) => p.filmWidth },
    { label: "Power Requirement", getVal: (p: Product) => p.powerRequired },
    { label: "Machine Gross Weight", getVal: (p: Product) => p.machineWeight },
    { label: "Minimum Order Qty", getVal: (p: Product) => p.minOrderQuantity },
    { label: "Delivery Lead Time", getVal: (p: Product) => p.deliveryTime },
    { label: "Supply Ability", getVal: (p: Product) => p.supplyAbility },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>Interactive Machine Comparison Matrix</span>
          </span>
          <h1 className="h1-fluid font-black tracking-tight text-white leading-tight">
            Compare Krishna Packaging Machines
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Evaluate technical specifications, packaging speeds, motor powertrains, and prices side by side to pick the ideal model for your factory.
          </p>
        </div>
      </section>

      {/* Comparison Selectors & Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-900 text-white border-b border-slate-800">
            <div className="flex flex-col justify-center">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                Select Machines
              </span>
              <h3 className="text-lg font-black text-white">Side-by-Side Analysis</h3>
              <p className="text-slate-400 text-xs mt-1">Choose any 3 machines from our 9+ models to compare.</p>
            </div>

            {/* Select 1 */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-300 uppercase">Machine Slot 1</label>
              <select
                value={machine1Id}
                onChange={(e) => setMachine1Id(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-400"
              >
                {productsData.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Select 2 */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-300 uppercase">Machine Slot 2</label>
              <select
                value={machine2Id}
                onChange={(e) => setMachine2Id(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-400"
              >
                {productsData.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Select 3 */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-300 uppercase">Machine Slot 3</label>
              <select
                value={machine3Id}
                onChange={(e) => setMachine3Id(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-400"
              >
                {productsData.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Machine Header Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-6 bg-slate-50 flex items-center justify-center font-black text-slate-400 text-sm uppercase tracking-wider">
              Machine Preview & Pricing
            </div>

            {comparedMachines.map((m) => (
              <div key={m.id} className="p-6 text-center space-y-3 flex flex-col justify-between">
                <div>
                  <div className="relative h-36 w-full rounded-xl bg-slate-50 border border-slate-200 overflow-hidden mb-3 flex items-center justify-center p-2">
                    <Image
                      src={m.primaryImage}
                      alt={m.name}
                      fill
                      sizes="200px"
                      className="object-contain p-2"
                    />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-snug">{m.name}</h4>
                  <span className="text-base font-black text-amber-600 block mt-1">{m.priceRange}</span>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href={`/our-products/${m.slug}`}
                    className="btn-secondary py-2.5 text-xs"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => {
                      setQuoteProduct(m.name);
                      setQuoteOpen(true);
                    }}
                    className="btn-primary py-2.5 text-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-slate-200 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 md:grid-cols-4 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                }`}
              >
                <div className="p-4 font-bold text-slate-800 bg-slate-100/60 md:bg-transparent flex items-center">
                  {row.label}
                </div>
                {comparedMachines.map((m) => (
                  <div key={m.id} className="p-4 text-slate-700 border-l border-slate-100 flex items-center">
                    <span className="font-semibold text-slate-900">{row.getVal(m)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
