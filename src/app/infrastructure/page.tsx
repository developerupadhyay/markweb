import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Factory,
  ShieldCheck,
  Cpu,
  Settings,
  CheckCircle2,
  Layers,
  Zap,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure & Quality Standards | Krishna Packaging Industry",
  description:
    "Explore Krishna Packaging Industry's precision engineering plant in Faridabad, featuring CNC machining, food-grade SS-316 fabrication, Festo pneumatics, and rigorous pre-dispatch testing.",
};

export default function InfrastructurePage() {
  const infraHighlights = [
    {
      title: "Precision Metal Fabrication & CNC Milling",
      description:
        "Our Faridabad engineering facility houses precision turning lathes, CNC milling machines, laser cutting, and argon arc welding bays dedicated to fabricating vibration-free, heavy-duty machine bodies.",
      image: "/images/2099ed0a96b44ee9aebe57fc21e44743-1024x631.jpg",
    },
    {
      title: "Food-Grade SS-316 & SS-304 Sanitary Build",
      description:
        "All contact parts, including hoppers, telescopic cups, auger screws, and product chutes, are fabricated from food-grade SS-316/304 stainless steel with electropolished surfaces to comply with stringent GMP regulations.",
      image: "/images/p7.jpg",
    },
    {
      title: "Top-Tier Global Component Integration",
      description:
        "We never compromise on component reliability. We integrate industrial gear motors from Bonfiglioli and Crompton Greaves, pneumatic cylinders from Festo and Janatics, and PLCs from L&T and Delta.",
      image: "/images/p2.jpg",
    },
    {
      title: "100% Pre-Shipment Trial & Dry-Run Testing",
      description:
        "Before any packaging machine leaves our factory floor, it undergoes a mandatory 48-hour continuous dry run and sample film trial to verify seal integrity, optical eye mark tracking, and mechanical synchronization.",
      image: "/images/aboutsec1.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Factory className="w-4 h-4 text-amber-400" />
            <span>State-of-the-Art Faridabad Plant</span>
          </span>
          <h1 className="h1-fluid font-black tracking-tight text-white leading-tight">
            Manufacturing Infrastructure & Quality Control
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Tour our engineering workshop, assembly bays, and stringent testing methodologies that make Krishna Packaging machines the most reliable choice across India.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {infraHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-5 bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="500px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-sky-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standardized Quality Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Methodology */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Zero-Defect Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Our 5-Stage Quality Assurance Matrix
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every machine built at Krishna Packaging Industry must pass five critical verification gates prior to customer dispatch:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", name: "Raw Material Inspection", desc: "Spectrometric testing of SS-316 & SS-304 sheets" },
              { step: "02", name: "Precision Machining", desc: "CNC tolerance check on forming collars and shafts" },
              { step: "03", name: "Panel & PLC Integration", desc: "Wiring insulation and thermal dissipation tests" },
              { step: "04", name: "48-Hour Dry Run", desc: "Continuous high-speed cycle test for mechanical wear" },
              { step: "05", name: "Live Pouch Trial", desc: "Air-leakage and weight consistency trial with client product" },
            ].map((st) => (
              <div key={st.step} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
                <span className="text-amber-400 text-2xl font-black block">{st.step}</span>
                <h4 className="font-bold text-white text-sm">{st.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-sky-50 border border-sky-200 rounded-3xl p-8 sm:p-10 space-y-4">
          <h3 className="h3-fluid font-black text-slate-900">
            Schedule a Physical Factory Visit & Live Machine Demo
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Witness our manufacturing standards firsthand at our Greater Faridabad facility. Bring your packaging film and raw materials for live speed and sealing trials.
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us"
              className="btn-secondary"
            >
              <span>Book a Plant Visit</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
