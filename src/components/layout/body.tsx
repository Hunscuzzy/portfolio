"use client";
import React, { ReactNode } from "react";
import { Kanit } from "next/font/google";
import clsx from "clsx";
import { useDarkMode } from "@/contexts/darkModeContext";

const nunito = Kanit({ subsets: ["latin"], weight: ["300", "700"] });

export default function Body({
  children,
}: {
  children: JSX.Element | JSX.Element[] | ReactNode;
}) {
  const { darkMode } = useDarkMode();
  return (
    <body className={clsx(darkMode ? "dark" : "", nunito.className)}>
      {children}
    </body>
  );
}
