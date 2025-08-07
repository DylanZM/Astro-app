import * as React from "react"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle"

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-background border-l border-border transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Enlaces de navegación */}
          <nav className="flex flex-col space-y-6">
            <a
              href="/"
              onClick={closeMenu}
              className="text-lg font-semibold transition-colors duration-200 hover:text-[rgb(var(--hover))]"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={closeMenu}
              className="text-lg font-semibold transition-colors duration-200 hover:text-[rgb(var(--hover))]"
            >
              About
            </a>
            <a
              href="/blog"
              onClick={closeMenu}
              className="text-lg font-semibold transition-colors duration-200 hover:text-[rgb(var(--hover))]"
            >
              Blog
            </a>
          </nav>

          {/* Divisor */}
          <div className="border-t border-border my-6" />

          {/* Acciones */}
          <div className="flex flex-col space-y-4">
            <a
              href="https://github.com/DylanZM/Astro-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium transition-colors duration-200 hover:text-[rgb(var(--hover))]"
              onClick={closeMenu}
            >
              <Github size={24} />
              GitHub
            </a>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Theme</span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}