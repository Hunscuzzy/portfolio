"use client";
import { ReactNode } from "react";
import { DarkModeProvider } from "./contexts/darkModeContext";

export function Providers({ children }: { children: ReactNode }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
