'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <Button
      size="sm"
      variant="ghost"
      type="button"
      aria-label="Botão para mudar o tema da aplicação"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'dark' ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} onClick={() => setTheme('dark')} />
      )}
    </Button>
  )
}
