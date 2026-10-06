"use client";

import React, { useState } from "react";
import { X, Send, Phone, MessageSquare, CheckCircle, ShieldCheck, Factory } from "lucide-react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultProduct }: QuoteModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct || productsData[0].name);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [productMaterial, setProductMaterial] = useState("");
  const [pouchWeight, setPouchWeight] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `*New Machine Quotation Request - Krishna Packaging Industry*\n\n` +
      `*Machine:* ${selectedProduct}\n` +
      `*Customer Name:* ${name || "Prospective Buyer"}\n` +
      `*Phone:* ${phone || "Not specified"}\n` +
      `*Email:* ${email || "Not specified"}\n` +
      `*City/State:* ${city || "India"}\n` +
      `*Item to Pack:* ${productMaterial || "General"}\n` +
      `*Pouch Size/Weight:* ${pouchWeight || "Standard"}\n` +
      `*Notes:* ${comments || "Please share price quotation, delivery timeline and video trial."}`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 p-5 sm:p-6 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">Request Factory Direct Quotation</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Get best FOB / Ex-Factory pricing with custom tooling specifications
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Quotation Inquiry Received!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name || "Valued Customer"}</strong>. Our technical engineering team at Faridabad will review your pouch dimensions and contact you at <strong>{phone || email}</strong> shortly with technical drawings and quote breakdown.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp Follow-up
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-2xl text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Packaging Machine Model *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {productsData.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name} ({prod.priceRange})
                    </option>
                  ))}
                  <option value="Custom Machine Consultation">Custom Packaging Machine Inquiry</option>
                </select>
              </div>

              {/* Grid 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rajesh Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., +91 98185 42091"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Product / Material to Pack
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Spices, Namkeen, Besan, Biscuits"
                    value={productMaterial}
                    onChange={(e) => setProductMaterial(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Pouch Weight / Grammage
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 50g, 250g, 1kg pouches"
                    value={pouchWeight}
                    onChange={(e) => setPouchWeight(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Need pneumatic batch cutting, nitrogen flush, extra pouch collar, or delivery schedule..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-2.5 text-xs text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>
                  All machines manufactured with food-grade SS-316/304 parts & 1-Year comprehensive factory warranty.
                </span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-primary flex-1 py-3.5 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
