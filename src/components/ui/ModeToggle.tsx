import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
 
export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
 
  React.useEffect(() => { 
    setMounted(true)

    const savedTheme = localStorage.getItem("theme")
    const hasDarkClass = document.documentElement.classList.contains("dark")
    
    if (savedTheme === "dark" || hasDarkClass) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [])
 
  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
    
    console.log(`Tema cambiado a: ${newDarkMode ? 'oscuro' : 'claro'}`)
  }
  
  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon"
        className="border-none shadow-none bg-transparent"
      >
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="transition-all duration-300 hover:scale-105 border-none shadow-none hover:shadow-none focus:shadow-none active:shadow-none bg-transparent hover:bg-transparent"
    >
      {isDark ? (
        <Moon className="h-5 w-5 transition-all duration-300 text-slate-200" />
      ) : (
        <Sun className="h-5 w-5 transition-all duration-300 text-yellow-500" />
      )}
      <span className="sr-only">
        {isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      </span>
    </Button>
  )
}