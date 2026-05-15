import { reimbursementPartnersBanner } from "@/lib/content";

function PartnerMark({ id }: { id: string }) {
  switch (id) {
    case "uhc":
      return (
        <span className="mb-2 flex h-9 items-end gap-0.5" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-1 rounded-sm bg-[#0f4c81]"
              style={{ height: `${12 + i * 4}px` }}
            />
          ))}
        </span>
      );
    case "bcbs":
      return (
        <span className="mb-2 flex items-center gap-1.5 text-[#003d7a]" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
            <path d="M14 4L6 22h16L14 4z" fill="#003d7a" opacity="0.9" />
            <path d="M14 8l-4 12h8L14 8z" fill="white" opacity="0.35" />
          </svg>
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className="shrink-0">
            <path d="M11 2L3 24h16L11 2z" stroke="#003d7a" strokeWidth="2" fill="none" />
          </svg>
        </span>
      );
    case "medicaid-medicare":
      return (
        <span
          className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#102d66] text-[10px] font-bold text-[#102d66]"
          aria-hidden
        >
          CMS
        </span>
      );
    case "cigna":
      return (
        <span className="mb-2 text-[#39a96b]" aria-hidden>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 4c-2 4-6 7-6 12a6 6 0 1012 0c0-5-4-8-6-12z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M16 12v8M12 16h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      );
    case "va":
      return (
        <span className="mb-2 flex items-center gap-2 text-neutral-900" aria-hidden>
          <span className="text-2xl font-black tracking-tight">VA</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-neutral-800 text-[8px] font-bold leading-[1.05]">
            USA
          </span>
        </span>
      );
    case "humana":
      return <span className="mb-1 block h-1 w-full max-w-[5.5rem] rounded-full bg-[#86bc25]/40" aria-hidden />;
    default:
      return null;
  }
}

function PartnerName({
  id,
  name,
  multiline,
  shortName,
}: {
  id: string;
  name: string;
  multiline?: boolean;
  shortName?: string;
}) {
  if (id === "medicaid-medicare" && multiline) {
    return (
      <div className="text-center">
        <p className="text-sm font-bold italic text-[#102d66] sm:text-base">Medicaid</p>
        <p className="mt-1 text-sm font-bold italic text-[#102d66] sm:text-base">Medicare</p>
      </div>
    );
  }
  if (shortName && id === "va") {
    return (
      <div className="text-center">
        <p className="text-[11px] font-semibold leading-tight text-neutral-800 sm:text-xs">{name}</p>
      </div>
    );
  }
  if (id === "uhc") {
    return <p className="text-center font-serif text-base font-semibold tracking-tight text-[#0f4c81] sm:text-lg">{name}</p>;
  }
  if (id === "bcbs") {
    return (
      <p className="text-center text-sm font-bold leading-snug text-[#003d7a] sm:text-base">
        BlueCross <span className="font-extrabold">BlueShield</span>
      </p>
    );
  }
  if (id === "cigna") {
    return <p className="text-center text-lg font-semibold text-[#0066b3] sm:text-xl">{name}.</p>;
  }
  if (id === "humana") {
    return <p className="text-center text-2xl font-bold tracking-tight text-[#86bc25] sm:text-3xl">{name}</p>;
  }
  return <p className="text-center text-sm font-semibold text-neutral-800 sm:text-base">{name}</p>;
}

export function ReimbursementPartners() {
  const { heading, partners } = reimbursementPartnersBanner;
  return (
    <div className="mx-auto mt-16 max-w-6xl border-t border-[var(--border)] pt-14">
      <p className="text-center text-sm font-medium text-[var(--muted)] sm:text-base">{heading}</p>
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-10 sm:gap-x-10 lg:justify-between lg:gap-x-4">
        {partners.map((p) => (
          <li
            key={p.id}
            className="flex min-w-[140px] flex-col items-center justify-center px-2 sm:min-w-[160px]"
          >
            <PartnerMark id={p.id} />
            <PartnerName
              id={p.id}
              name={p.name}
              multiline={"multiline" in p ? p.multiline : undefined}
              shortName={"shortName" in p ? p.shortName : undefined}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
