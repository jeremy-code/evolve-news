"use client";

import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default AppProvider;
