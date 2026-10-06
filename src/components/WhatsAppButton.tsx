"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { companyData } from "@/data/company";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs p-3 rounded-2xl shadow-xl border border-slate-200 w-64 animate-in fade-in slide-in-from-bottom-2 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-slate-900 mb-1">Chat with Technical Sales</p>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Need urgent machinery pricing, pouch sizing advice, or factory trial videos? Message us on WhatsApp!
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Krishna%20Packaging%20Industry,%20I%20want%20to%20inquire%20about%20packaging%20machines%20and%20pricing.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative border-2 border-white/60"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></span>
      </a>
    </div>
  );
}
