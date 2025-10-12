"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="
            relative flex items-center justify-center
            p-2 rounded-full 
            focus:outline-none
            transition-all
            hover:bg-transparent
            active:bg-transparent
            border-none
            shadow-none
            text-white
          "
        >
          <Sun className="h-6 w-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-white" />
          <Moon className="absolute h-6 w-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-white" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="
          bg-white text-gray-900 border border-gray-200
          dark:bg-gray-900 dark:text-white dark:border-gray-700
        "
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="
            hover:bg-gray-100 hover:text-gray-900
            dark:hover:bg-gray-800 dark:hover:text-white
          "
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="
            hover:bg-gray-100 hover:text-gray-900
            dark:hover:bg-gray-800 dark:hover:text-white
          "
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="
            hover:bg-gray-100 hover:text-gray-900
            dark:hover:bg-gray-800 dark:hover:text-white
          "
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
