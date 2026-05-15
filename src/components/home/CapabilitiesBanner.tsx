import Image from "next/image";
import { brand } from "@/lib/content";

const CAPABILITIES_STRIPE = [
  "Human Augmentation",
  "Robotics",
  "Prosthetics",
  "Synthetic Skin",
  "Wearable Intelligence",
] as const;

/** Same copy as the stacked “Capabilities” block, in corporate banner layout (logo | divider | slogan + services). */
export function CapabilitiesBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(180deg, black 0%, black 35%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(180deg, black 0%, black 35%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute right-[8%] top-24 hidden h-32 w-32 border-l border-t border-slate-200/80 sm:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <div className="flex shrink-0 flex-col items-center gap-4 lg:w-[280px] lg:items-start">
            <Image
              src="/flex-human-logo.png"
              alt="Flex Human LLC"
              width={260}
              height={95}
              className="logo h-auto max-w-[220px] object-contain lg:max-w-[260px]"
            />
            <p className="text-center text-[0.7rem] font-semibold tracking-[0.35em] text-[var(--accent)] sm:text-xs lg:text-left">
              — LLC —
            </p>
          </div>

          <div className="hidden h-[min(280px,50vh)] w-px shrink-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block" />
          <div className="h-px w-full bg-slate-200 lg:hidden" />

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Capabilities
            </p>

            <div className="mt-5 space-y-1">
              <h2 className="text-2xl font-bold uppercase leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-[2rem] xl:text-[2.25rem]">
                What We Engineer<span className="text-[var(--accent)]">.</span>
              </h2>
              <p className="text-2xl font-bold uppercase leading-[1.15] tracking-tight text-[var(--accent)] sm:text-3xl lg:text-[2rem] xl:text-[2.25rem]">
                Engineering Human Augmentation<span className="text-[#1e3a5f]">.</span>
              </p>
            </div>

            <div className="my-8 h-px max-w-xl bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />

            <p className="max-w-3xl text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-[var(--accent)] sm:text-xs sm:tracking-[0.16em]">
              {CAPABILITIES_STRIPE.join(" • ")}
            </p>

            <p className="mt-4 max-w-2xl text-base font-normal normal-case leading-relaxed tracking-normal text-[var(--muted)] lg:text-[1.05rem]">
              {brand.primaryStatement}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-2 h-[112px] w-full overflow-hidden sm:h-[136px]" aria-hidden>
        <svg
          className="absolute bottom-0 left-1/2 min-w-[122%] -translate-x-1/2"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
              <stop offset="42%" stopColor="#1e40af" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="waveEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
            <pattern id="waveDots" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1.2" cy="1.2" r="0.7" fill="#93c5fd" />
            </pattern>
          </defs>
          <path
            d="M0 158 C 260 70, 480 206, 720 146 C 960 86, 1120 34, 1440 114 L1440 200 L0 200 Z"
            fill="url(#waveGlow)"
          />
          <path
            d="M0 146 C 302 58, 498 176, 720 128 C 948 78, 1098 42, 1440 120"
            stroke="url(#waveEdge)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.9"
          />
          <rect x="940" y="88" width="480" height="115" fill="url(#waveDots)" opacity="0.1" />
          <circle cx="1250" cy="152" r="44" stroke="#94a3b8" strokeOpacity="0.14" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </section>
  );
}
