'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/button'
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";


export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center ml-10">
      {
        theme === "dark" ? (
         <FiMoon cursor="pointer" onClick={() => setTheme('light')} className='w-6 h-6'/>
        ):(
        <BsSun cursor="pointer" onClick={() => setTheme('dark')} className='w-6 h-6'/>
        )
       }
    </div>

  )
}
