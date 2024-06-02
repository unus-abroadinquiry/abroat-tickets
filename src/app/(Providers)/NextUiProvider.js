"use client"
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes'



export default function Provider({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='light'
        themes={['light', 'dark', 'modern']}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}




