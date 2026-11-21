"use client";

import { Toaster } from "@kiraquest/ui/components/sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AutumnAppProvider } from "@/components/autumn-provider";
import { queryClient } from "@/utils/trpc";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AutumnAppProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
        <Toaster richColors />
      </QueryClientProvider>
    </AutumnAppProvider>
  );
}
