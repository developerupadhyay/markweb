import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Target,
  Sparkles,
  Users,
  Compass,
  Layers,
} from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Krishna Packaging Industry Faridabad",
  description:
    "Learn about Krishna Packaging Industry, our journey since 2010, mission, core values, manufacturing infrastructure in Faridabad, and commitment to packaging automation excellence.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Factory className="w-4 h-4 text-amber-400" />
            <span>Excellence in Packaging Automation Since 2010</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            About Krishna Packaging Industry
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            A premier manufacturer, exporter, and supplier of heavy-duty Form-Fill-Seal, Auger, Multi-Head Weigher, and Flow Wrap packaging machines based in Faridabad, Haryana (India).
          </p>
        </div>
      </section>

      {/* Main Story & Cloned About Us Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/ABOUT-US-3.webp"
                  alt="About Krishna Packaging Industry"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/images/2099ed0a96b44ee9aebe57fc21e44743-1024x631.jpg"
                    alt="Packaging Machinery Infrastructure"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/images/our-history-1024x481.jpg"
                    alt="Our History & Growth"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-sky-700 bg-sky-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl font-black text-slate-900 leading-tight">
                Pioneering Precision Packaging Solutions for Over a Decade
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Welcome to <strong>Krishna Packaging Industry</strong>, a leading provider of innovative and reliable packaging solutions for the food and beverage industry. With a strong commitment to quality and customer satisfaction, we specialize in delivering a range of sturdy and functionally efficient packaging machines designed to meet the diverse needs of our clients.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Located at a prime location in Greater Faridabad, Haryana (India), we are a renowned Packaging machinery exporter, manufacturer, and supplier. Our product line features <strong>Food Packing Machines, Pouch Packaging Machines, Namkeen Packing Machines, Snacks Packing Machines, Liquid Packing Machines, Tea Packing Machines, Flour Packing Machines, and Spices Packing Machines</strong>.
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                  <span className="text-2xl font-black text-amber-600">2010</span>
                  <span className="text-[11px] text-slate-500 block font-medium">Established</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                  <span className="text-2xl font-black text-sky-700">500+</span>
                  <span className="text-[11px] text-slate-500 block font-medium">Installations</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                  <span className="text-2xl font-black text-emerald-600">9+</span>
                  <span className="text-[11px] text-slate-500 block font-medium">Machine Models</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                  <span className="text-2xl font-black text-purple-600">100%</span>
                  <span className="text-[11px] text-slate-500 block font-medium">GMP Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & HISTORY (Cloned from old website) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="mission">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
              <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                At Krishna Packaging Industry, our mission is to revolutionize the packaging process by providing cutting-edge machinery that enhances productivity and ensures the highest standards of packaging quality. We aim to be a trusted partner for businesses seeking advanced and customizable packaging solutions.
              </p>
              <div className="pt-2">
                <Image
                  src="/images/mission.webp"
                  alt="Our Mission"
                  width={380}
                  height={180}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4" id="vision">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Our vision is to be recognized as a world-class manufacturing benchmark in automatic packaging technology. We continuously upgrade our engineering methodologies, incorporate smart PLC controls, and fabricate machines that maximize output while minimizing energy consumption and maintenance overhead.
              </p>
              <div className="pt-2">
                <Image
                  src="/images/vision.webp"
                  alt="Our Vision"
                  width={380}
                  height={180}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values (Cloned from old website) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md" id="values">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span>Guiding Principles</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Our Core Values
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sky-600" />
                      Integrity
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      We conduct our business with the highest level of integrity, ensuring complete transparency and honesty in all our dealings, from genuine metal thickness to honest component sourcing.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                      Excellence
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      We strive for excellence in everything we do, from precision CNC tooling and product development to prompt pre-sales trials and lifetime customer service.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Collaboration
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      We believe in building strong, long-lasting partnerships with our clients, working hand-in-hand to engineer tailored solutions for unique pouch styles and throughput requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/Our-Values3-1024x575.png"
                  alt="Our Values & Team Commitment"
                  fill
                  sizes="450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Our History (Cloned from old website) */}
          <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Legacy & Milestones
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Our History & Evolution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Founded in 2010 and scaling rapidly by 2015, Krishna Packaging Industry has grown from a specialized fabrication workshop into a renowned name in the packaging machinery sector. Over the years, we have expanded our product portfolio from simple mechanical vertical form fill sealers to multi-track sachet packing, high-precision auger screw dosing, and high-velocity multi-head computerized weighing systems.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our journey is marked by a relentless pursuit of innovation, robust structural mechanics, and a deep commitment to empowering food entrepreneurs and industrial manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Ready to Partner with Krishna Packaging Industry?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            We invite you to explore our range of products and discover how our packaging automation can help streamline your manufacturing facility.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/our-products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow transition-all flex items-center gap-2 text-sm"
            >
              <span>Explore Products Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact-us"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow transition-all flex items-center gap-2 text-sm"
            >
              <span>Contact Factory Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
