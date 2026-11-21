"use client";

import { AutumnProvider } from "autumn-js/react";

export function AutumnAppProvider({ children }: { children: React.ReactNode }) {
  return <AutumnProvider useBetterAuth={true}>{children}</AutumnProvider>;
}
