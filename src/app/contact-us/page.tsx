"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Factory,
  ExternalLink,
  Truck,
  Building,
} from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedMachine, setSelectedMachine] = useState(productsData[0].name);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `*Factory Contact Inquiry - Krishna Packaging Industry*\n` +
      `*Name:* ${name || "Visitor"}\n` +
      `*Phone:* ${phone || "Not provided"}\n` +
      `*City:* ${city || "India"}\n` +
      `*Interested In:* ${selectedMachine}\n` +
      `*Message:* ${message || "Please provide address directions, machine price list and trial timings."}`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Factory className="w-4 h-4 text-amber-400" />
            <span>Manufacturing Plant & Corporate Office</span>
          </span>
          <h1 className="h1-fluid font-black tracking-tight text-white leading-tight">
            Contact Krishna Packaging Industry
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch with our packaging automation engineers for factory visits, live machine trials, pricing quotations, and customized pouch tooling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Address Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Official Contact Information
              </h2>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Factory & Office Address</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    <strong>Plot no -82</strong>, Jeevan nagar Wazirpur HUDA Road Greater Faridabad, Faridabad - 121002, Haryana, India.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Plot+no+82+Jeevan+nagar+Wazirpur+HUDA+Road+Greater+Faridabad+Faridabad+121002+Haryana+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sky-600 hover:text-sky-700 font-bold mt-2"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Direct Phone Lines</h3>
                  <div className="space-y-1 mt-1 text-xs sm:text-sm">
                    <div>
                      <a href={`tel:${companyData.phones[0]}`} className="text-slate-800 font-semibold hover:text-amber-600">
                        {companyData.displayPhones[0]}
                      </a>
                      <span className="text-slate-400 text-xs ml-2">(Technical Sales)</span>
                    </div>
                    <div>
                      <a href={`tel:${companyData.phones[1]}`} className="text-slate-800 font-semibold hover:text-amber-600">
                        {companyData.displayPhones[1]}
                      </a>
                      <span className="text-slate-400 text-xs ml-2">(Factory Direct)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Email Inquiries</h3>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-slate-800 text-xs sm:text-sm font-semibold hover:text-sky-600 block mt-1"
                  >
                    {companyData.email}
                  </a>
                  <span className="text-slate-400 text-xs">Replies within 2-4 business hours</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">{companyData.workingHours}</p>
                  <span className="text-slate-400 text-xs">Sunday by prior appointment</span>
                </div>
              </div>
            </div>

            {/* Factory Image & Banner */}
            <div className="relative h-60 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/contact-1024x394.jpg"
                alt="Krishna Packaging Industry Contact & Plant"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">
                  Pre-Book Live Factory Machinery Demonstration
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  Quick Response Desk
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">
                  Send Us a Direct Message
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Fill in your details below and our lead engineer will get back to you with machinery specifications, video trials, and pricing.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950">Thank You, {name || "Valued Client"}!</h3>
                  <p className="text-emerald-800 text-sm max-w-md mx-auto">
                    Your inquiry regarding <strong>{selectedMachine}</strong> has been registered. We will call you back at <strong>{phone}</strong> promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleWhatsAppChat}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 mx-auto shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat on WhatsApp Directly
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Rajesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., +91 98185 42091"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g., contact@business.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City & State
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Faridabad, Haryana"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Packaging Machine Model of Interest
                    </label>
                    <select
                      value={selectedMachine}
                      onChange={(e) => setSelectedMachine(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {productsData.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name} ({prod.priceRange})
                        </option>
                      ))}
                      <option value="Custom Machine Consultation">Custom Packaging Machine Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message & Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please tell us about what product you want to pack, target pouch size/weight, speed requirement, or factory trial schedule..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-primary flex-1 py-4 text-sm"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppChat}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
