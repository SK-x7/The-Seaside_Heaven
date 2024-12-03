"use client"
import { useState, useEffect } from "react";



export function useIsMobile(breakpoint = 425) { // Default to 425 if no breakpoint is passed
    // const MOBILE_BREAKPOINT = 425;
  const [isMobile, setIsMobile] = useState(null); // Start as null to avoid SSR issues

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
      const onChange = (e) => {
        setIsMobile(e.matches);
      };

      mql.addEventListener("change", onChange);
      setIsMobile(mql.matches); // Set the initial value after mount

      return () => {
        mql.removeEventListener("change", onChange);
      };
    }
  }, [breakpoint]); // Dependency array includes breakpoint

  return !!isMobile;
}

