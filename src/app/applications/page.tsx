import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Package,
  ShieldCheck,
} from "lucide-react";
import { productsData } from "@/data/products";

export const metadata: Metadata = {
  title: "Industry Applications & Packaging Solutions | Krishna Packaging Industry",
  description:
    "Explore our specialized packaging machinery solutions for Food & Snacks, Spices, Bakery & Biscuits, Flour & Powders, Granules, and Non-Food industrial products.",
};

export default function ApplicationsPage() {
  const applicationSectors = [
    {
      id: "snacks",
      name: "Food & Snack Industry",
      subtitle: "Namkeen, Potato Chips, Kurkure, Fryums, Roasted Snacks & Extruded Foods",
      image: "/images/p2.jpg",
      description:
        "High-velocity packaging solutions designed for fragile and bulk snacks. Features optional Nitrogen Flushing systems for crispness retention and multi-head computerized weighing for high accuracy.",
      recommendedMachines: [
        "fully-automatic-multi-head-weighing-packaging",
        "collar-type-cup-filler-packaging-machine",
        "normal-ffs-packaging-machine",
      ],
      features: [
        "Nitrogen flush gas injection for extended shelf-life",
        "Gentle bucket elevators to prevent snack chipping",
        "Pillow pouches, gusset bags, and chain pouches",
        "Speeds up to 100 pouches per minute",
      ],
    },
    {
      id: "powders",
      name: "Spices & Sticky Powders",
      subtitle: "Besan, Turmeric, Chili Powder, Sattu, Maida, Milk Powder & Chemical Reagents",
      image: "/images/p7.jpg",
      description:
        "Specialized screw auger dosing mechanisms built to handle non-free-flowing, sticky, and dusting powders without powder puffing or seal contamination.",
      recommendedMachines: [
        "collar-auger-filling-packaging-machine",
        "ffs-half-pneumatic-packaging-machine",
        "ffs-high-speed-packaging-machine",
      ],
      features: [
        "SS-316 food-grade auger screw & dosing funnel",
        "Servo-driven dosing with independent agitation motor",
        "Dust collection shroud and hermetic pneumatic sealing",
        "Grammage from 10 gm up to 10 kg bags",
      ],
    },
    {
      id: "bakery",
      name: "Bakery & Confectionery",
      subtitle: "Biscuits, Rusk Toasts, Cake Loaves, Cookies, Bread, Chocolates & Chikki",
      image: "/images/G7.png",
      description:
        "Continuous horizontal flow wrapping lines with automatic infeed conveyors and gentle auto-feeders tailored for discrete bakery items and family multipacks.",
      recommendedMachines: [
        "horizontal-flow-wrap-pillopack-packaging",
        "horizontal-flow-wrap-pillopack-high-speed-packaging",
        "automatic-family-pack-biscuit-or-rusk-packaging-machine",
      ],
      features: [
        "High speed rotary cutters up to 200 packs/min",
        "Synchronized 8-foot infeed conveyor with pushers",
        "Airtight bottom fin seal and rotary crimp end seals",
        "Gentle transfer prevents biscuit or cake crumbling",
      ],
    },
    {
      id: "granules",
      name: "Granules, Tea & Seeds",
      subtitle: "Tea, Instant Coffee, Sugar, Salt, Dry Fruits, Seeds, Pulses & Rice",
      image: "/images/p3.jpg",
      description:
        "Volumetric cup dosing and load cell weigher systems offering rapid, consistent sachet packaging for granular commodities.",
      recommendedMachines: [
        "ffs-high-speed-packaging-machine",
        "ffs-half-pneumatic-packaging-machine",
        "fully-automatic-multi-head-weighing-packaging",
      ],
      features: [
        "Telescopic cup volume adjustment",
        "3-side or 4-side sachet sealing",
        "High speed continuous cycle operation",
        "Compact footprint with high packaging output",
      ],
    },
    {
      id: "non-food",
      name: "Non-Food & FMCG Items",
      subtitle: "Detergent Bars, Soaps, Scrub Pads, Cycle Tubes, Bearings, Hardware & Gauze",
      image: "/images/m2.jpg",
      description:
        "Robust mechanical packaging for consumer non-food goods, hardware components, and industrial parts in durable pillow packs.",
      recommendedMachines: [
        "horizontal-flow-wrap-pillopack-packaging",
        "ffs-half-pneumatic-packaging-machine",
      ],
      features: [
        "Accommodates thicker laminated and BOPP film rolls",
        "Heavy MS powder-coated body for dusty environments",
        "Customizable forming boxes for varied part dimensions",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Package className="w-4 h-4 text-amber-400" />
            <span>Tailored Industrial Packaging Systems</span>
          </span>
          <h1 className="h1-fluid font-black tracking-tight text-white leading-tight">
            Industry Applications We Serve
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Discover how Krishna Packaging machines solve packaging automation challenges across food processing, spices, bakeries, FMCG, and industrial goods.
          </p>
        </div>
      </section>

      {/* Applications Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {applicationSectors.map((sec, idx) => (
          <div
            key={sec.id}
            id={sec.id}
            className={`bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Media */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
              <Image
                src={sec.image}
                alt={sec.name}
                fill
                sizes="500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-1 rounded-md">
                  {sec.name}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {sec.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-sky-700">
                {sec.subtitle}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {sec.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {sec.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Recommended Krishna Packaging Models:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sec.recommendedMachines.map((slug) => {
                    const matched = productsData.find((p) => p.slug === slug);
                    if (!matched) return null;
                    return (
                      <Link
                        key={matched.id}
                        href={`/our-products/${matched.slug}`}
                        className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-700 border border-slate-200 hover:border-sky-300 text-xs font-bold px-3 py-1.5 rounded-xl transition-all"
                      >
                        <span>{matched.name}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
