"use client";

import { useEffect, useState } from "react";
import { FlexHumanLoader } from "./FlexHumanLoader";

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

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
      {showLoader && <FlexHumanLoader onComplete={handleComplete} />}
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
