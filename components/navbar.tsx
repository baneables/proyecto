"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Game", href: "#gameplay" },
  { label: "Characters", href: "#characters" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-blood/20 shadow-[0_4px_30px_hsl(0_85%_45%/0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 bg-blood rounded-sm flex items-center justify-center animate-pulse-red">
              <span className="font-horror text-xl text-primary-foreground leading-none">D</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-horror text-xl text-foreground tracking-wider group-hover:text-blood transition-colors">
              DREAD
            </span>
            <span className="text-[10px] tracking-[0.3em] text-blood uppercase font-semibold -mt-1">
              By Blood
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blood transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#play"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-blood text-primary-foreground font-bold uppercase text-sm tracking-wider hover:bg-blood-dark transition-all duration-300 animate-pulse-red"
          >
            Play Now
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground hover:text-blood transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 bg-background/98 backdrop-blur-md border-t border-blood/20">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold uppercase tracking-widest text-muted-foreground hover:text-blood transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#play"
            onClick={() => setMenuOpen(false)}
            className="px-8 py-3 bg-blood text-primary-foreground font-bold uppercase text-sm tracking-wider hover:bg-blood-dark transition-all"
          >
            Play Now
          </Link>
        </div>
      </div>
    </header>
  )
}
