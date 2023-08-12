'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
