import { PLATFORM_TRUST_METRICS, TRUST_FACTS } from "@/lib/constants";
import { ShieldCheck, Lock, Globe, RefreshCcw } from "lucide-react";

export function TrustSection() {
  return (
    <section className="w-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-xl">
      {/* Metric Counters */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 border-b border-slate-800/80 pb-8 text-center">
        {PLATFORM_TRUST_METRICS.map((metric, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl font-black sm:text-3xl text-white">
              <span className="gradient-text-emerald">{metric.value}</span>
            </span>
            <span className="mt-1 text-xs sm:text-sm font-bold text-slate-200">
              {metric.label}
            </span>
            <span className="text-[11px] text-slate-500">{metric.sub}</span>
          </div>
        ))}
      </div>

      {/* Trust Details Grid */}
      <div className="mt-8">
        <h3 className="text-center text-sm font-bold uppercase tracking-wider text-slate-400">
          왜 겜스고를 통한 구독 공유가 안전한가요?
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 transition-all hover:border-slate-700"
            >
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                {idx === 0 && <Globe className="h-4 w-4" />}
                {idx === 1 && <ShieldCheck className="h-4 w-4" />}
                {idx === 2 && <Lock className="h-4 w-4" />}
                {idx === 3 && <RefreshCcw className="h-4 w-4" />}
                <span className="text-xs font-bold text-white">{fact.title}</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
