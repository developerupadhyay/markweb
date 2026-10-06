"use client";

import React, { useState } from "react";
import { ProductSpec } from "@/data/products";
import { Search, Copy, Check, ShieldCheck } from "lucide-react";

interface MachineSpecsTableProps {
  specs: ProductSpec;
  machineName: string;
}

export default function MachineSpecsTable({ specs, machineName }: MachineSpecsTableProps) {
  const [filter, setFilter] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const specEntries = Object.entries(specs);
  const filteredSpecs = specEntries.filter(([key, val]) =>
    key.toLowerCase().includes(filter.toLowerCase()) ||
    val.toLowerCase().includes(filter.toLowerCase())
  );

  const copyToClipboard = (key: string, val: string) => {
    navigator.clipboard.writeText(`${key}: ${val}`);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
      {/* Table Top Controls */}
      <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Official Technical Specifications
          </h3>
          <p className="text-xs text-slate-300">
            Factory tested engineering parameters for {machineName}
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter parameters..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-slate-800/90 border border-slate-700 text-slate-100 text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-5 w-2/5">Technical Parameter</th>
              <th className="py-3.5 px-5 w-3/5">Specification & Engineering Standard</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredSpecs.length === 0 ? (
              <tr>
                <td colSpan={2} className="py-8 text-center text-slate-400 text-xs">
                  No parameters matching &ldquo;{filter}&rdquo;
                </td>
              </tr>
            ) : (
              filteredSpecs.map(([param, value], idx) => (
                <tr
                  key={param}
                  className={`hover:bg-sky-50/50 transition-colors group ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                  }`}
                >
                  <td className="py-3 px-5 font-semibold text-slate-800 align-top">
                    {param}
                  </td>
                  <td className="py-3 px-5 text-slate-600 align-top flex items-center justify-between gap-2">
                    <span className="font-medium whitespace-pre-line text-slate-900">
                      {value}
                    </span>
                    <button
                      onClick={() => copyToClipboard(param, value)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-slate-700 rounded transition-opacity"
                      title="Copy spec value"
                    >
                      {copiedKey === param ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>* Custom electrical voltage (e.g. 110V/220V/440V) available on request for export orders.</span>
        <span className="font-semibold text-slate-700">Total Parameters: {filteredSpecs.length}</span>
      </div>
    </div>
  );
}
