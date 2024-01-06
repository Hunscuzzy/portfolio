"use client";
import React, { ReactNode } from "react";
import { useDarkMode } from "../contexts/darkModeContext";

export default function Body({
  children,
}: {
  children: JSX.Element | JSX.Element[] | ReactNode;
}) {
  const { darkMode } = useDarkMode();
  return <body className={darkMode ? "dark" : ""}>{children}</body>;
}
