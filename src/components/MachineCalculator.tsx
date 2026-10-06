"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle, Zap, Clock, Package } from "lucide-react";
import Link from "next/link";
import { productsData } from "@/data/products";

export default function MachineCalculator() {
  const [dailyTarget, setDailyTarget] = useState<number>(25000);
  const [shiftHours, setShiftHours] = useState<number>(8);
  const [productType, setProductType] = useState<string>("spices");

  // Calculate required PPM
  const totalMinutes = shiftHours * 60;
  const requiredPPM = Math.ceil(dailyTarget / totalMinutes);

  // Recommend best machine
  let recommendedMachine = productsData[0];
  if (productType === "biscuit" || productType === "bakery") {
    recommendedMachine = requiredPPM > 100
      ? productsData.find((p) => p.id === "horizontal-flow-wrap-high-speed") || productsData[5]
      : productsData.find((p) => p.id === "automatic-family-pack-biscuit-rusk") || productsData[6];
  } else if (productType === "powder") {
    recommendedMachine = productsData.find((p) => p.id === "collar-auger-filling") || productsData[3];
  } else if (productType === "chips" || requiredPPM > 70) {
    recommendedMachine = productsData.find((p) => p.id === "fully-automatic-multihead-weighing") || productsData[8];
  } else if (requiredPPM > 50) {
    recommendedMachine = productsData.find((p) => p.id === "ffs-high-speed") || productsData[1];
  } else {
    recommendedMachine = productsData.find((p) => p.id === "normal-ffs") || productsData[0];
  }

  const hourlyOutput = requiredPPM * 60;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Factory Tool</span>
          </div>

          <div>
            <h3 className="h3-fluid font-black text-white leading-tight">
              Packaging Capacity & Machine ROI Calculator
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Input your target daily pouch volume to discover the optimal Krishna Packaging machine model and production throughput.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {/* Product Type */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                Select Your Product Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "spices", label: "Spices & Namkeen" },
                  { id: "powder", label: "Besan & Powders" },
                  { id: "biscuit", label: "Biscuits & Bakery" },
                  { id: "chips", label: "Chips & Dry Fruits" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProductType(item.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      productType === item.id
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-[1.02]"
                        : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Target Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                <span>Target Daily Pouches:</span>
                <span className="text-amber-400 text-sm sm:text-base font-black">
                  {dailyTarget.toLocaleString()} pouches / day
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={dailyTarget}
                onChange={(e) => setDailyTarget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>5,000 / day</span>
                <span>50,000 / day</span>
                <span>100,000 / day</span>
              </div>
            </div>

            {/* Shift Hours */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                <span>Operating Shift Hours:</span>
                <span className="text-sky-400 text-sm sm:text-base font-black">{shiftHours} Hours / Shift</span>
              </div>
              <div className="flex gap-2 sm:gap-3">
                {[6, 8, 10, 12, 16].map((hrs) => (
                  <button
                    key={hrs}
                    type="button"
                    onClick={() => setShiftHours(hrs)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      shiftHours === hrs
                        ? "bg-sky-500 text-white border-sky-400 shadow-md"
                        : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
                    }`}
                  >
                    {hrs} hrs
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Recommended Machine
            </span>
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Optimal Match
            </span>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              {recommendedMachine.name}
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {recommendedMachine.tagline}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[10px] block uppercase font-bold">
                Required Speed
              </span>
              <span className="text-base font-black text-slate-900">
                {requiredPPM} PPM
              </span>
              <span className="text-[10px] text-slate-500 block">pouches / min</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[10px] block uppercase font-bold">
                Machine Rating
              </span>
              <span className="text-base font-black text-sky-700">
                {recommendedMachine.speed}
              </span>
              <span className="text-[10px] text-slate-500 block">designed output</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[10px] block uppercase font-bold">
                Hourly Output
              </span>
              <span className="text-base font-black text-slate-900">
                {hourlyOutput.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-500 block">packs / hour</span>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
              <span className="text-amber-800 text-[10px] block uppercase font-bold">
                Price Estimate
              </span>
              <span className="text-xs sm:text-sm font-black text-amber-700">
                {recommendedMachine.priceRange}
              </span>
              <span className="text-[10px] text-amber-800/80 block">Ex-Factory</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href={`/our-products/${recommendedMachine.slug}`}
              className="btn-secondary w-full py-3.5 text-xs text-center"
            >
              <span>View Machine Details & Video Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
