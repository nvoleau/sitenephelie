"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/analytics-utm";

export default function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
