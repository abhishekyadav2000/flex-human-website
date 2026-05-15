"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FlexHumanLoader } from "./FlexHumanLoader";

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeRef = useRef(pathname);

  /** First paint shows loader before any route content is visible */
  const [showLoader, setShowLoader] = useState(true);

  // pathname updates in the same render as the new page — turn loader on synchronously,
  // so we never flash the destination page before the overlay (effects run too late).
  if (routeRef.current !== pathname) {
    routeRef.current = pathname;
    setShowLoader(true);
  }

  useEffect(() => {
    if (!showLoader) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  function handleComplete() {
    setShowLoader(false);
  }

  return (
    <>
      {showLoader && <FlexHumanLoader key={pathname} onComplete={handleComplete} />}
      <div
        aria-hidden={showLoader}
        className={showLoader ? "pointer-events-none select-none" : undefined}
        style={showLoader ? { visibility: "hidden" } : undefined}
      >
        {children}
      </div>
    </>
  );
}
