"use client";

import React, { useState } from "react";
import { X, Download, Printer, CheckCircle, FileText, Factory, ShieldCheck } from "lucide-react";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";
import Image from "next/image";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function BrochureModal({ isOpen, onClose, product }: BrochureModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSimulation = () => {
    setDownloaded(true);
    setTimeout(() => {
      // Create a printable text/markdown summary download
      const content = `KRISHNA PACKAGING INDUSTRY\nTECHNICAL SPECIFICATION SHEET\n\n` +
        `Machine Model: ${product.name}\n` +
        `Category: ${product.category}\n` +
        `Price Range: ${product.priceRange}\n` +
        `Packaging Speed: ${product.speed}\n` +
        `Filling System: ${product.fillingSystem}\n` +
        `Sealing Type: ${product.sealingType}\n` +
        `Electrical Power: ${product.powerRequired}\n` +
        `Machine Weight: ${product.machineWeight}\n` +
        `Maximum Film Roll Width: ${product.filmWidth}\n\n` +
        `APPLICATIONS:\n${product.targetMaterials.join('\n')}\n\n` +
        `TECHNICAL PARAMETERS:\n` +
        Object.entries(product.technicalSpecs).map(([k, v]) => `${k}: ${v}`).join('\n') +
        `\n\nMANUFACTURER CONTACT:\n` +
        `${companyData.name}\n` +
        `Address: ${companyData.address.full}\n` +
        `Phones: ${companyData.phones.join(', ')}\n` +
        `Email: ${companyData.email}\n`;

      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${product.slug}-specs-sheet.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Machine Technical Specification Brochure</h3>
              <p className="text-xs text-slate-400">Official Product Catalog Sheet • Krishna Packaging Industry</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs flex items-center gap-1"
              title="Print Specs"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brochure Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-800">
          {/* Header Branding */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">
                Official Engineering Document
              </span>
              <h2 className="text-2xl font-black text-slate-900">{product.name}</h2>
              <p className="text-xs text-slate-500">{product.tagline}</p>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 block uppercase">FOB Price</span>
              <span className="text-lg font-black text-amber-600">{product.priceRange}</span>
            </div>
          </div>

          {/* Machine Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-48 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-2">
              <Image
                src={product.primaryImage}
                alt={product.name}
                fill
                sizes="300px"
                className="object-contain p-2"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Packaging Output</span>
                <span className="font-bold text-slate-900 text-sm">{product.speed}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Filling System</span>
                <span className="font-bold text-slate-900 text-sm">{product.fillingSystem}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Power Requirement</span>
                <span className="font-bold text-slate-900 text-sm">{product.powerRequired}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Machine Gross Weight</span>
                <span className="font-bold text-slate-900 text-sm">{product.machineWeight}</span>
              </div>
              <div className="col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Sealing Mechanism</span>
                <span className="font-bold text-slate-900">{product.sealingType}</span>
              </div>
            </div>
          </div>

          {/* Full Parameters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Complete Technical Data Sheet
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs">
              {Object.entries(product.technicalSpecs).map(([param, val]) => (
                <div key={param} className="grid grid-cols-2 p-2.5 hover:bg-slate-50">
                  <span className="font-semibold text-slate-700">{param}</span>
                  <span className="text-slate-900">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Manufacturer Footer */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div>
              <p className="font-bold">{companyData.name}</p>
              <p className="text-slate-400 text-[11px]">{companyData.address.full}</p>
              <p className="text-amber-400 font-semibold mt-0.5">{companyData.displayPhones.join(" • ")}</p>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Tested & Verified</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            {downloaded ? "Brochure saved to your downloads folder!" : "Save or print this specification sheet"}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadSimulation}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Technical Sheet</span>
            </button>
            <button
              onClick={onClose}
              className="bg-white hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold px-4 py-2.5 rounded-xl text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
