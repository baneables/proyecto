"use client"

import Link from "next/link"

const footerLinks = {
  Game: ["Overview", "Characters", "Maps", "Perks", "Cosmetics"],
  Community: ["Forums", "Discord", "Reddit", "Fan Art", "Tournaments"],
  Support: ["Help Center", "Bug Report", "Contact Us", "Server Status"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Settings", "EULA"],
}

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_hsl(0_85%_45%/0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blood rounded-sm flex items-center justify-center">
                <span className="font-horror text-xl text-primary-foreground leading-none">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-horror text-lg text-foreground tracking-wider">DREAD</span>
                <span className="text-[9px] tracking-[0.3em] text-blood uppercase font-semibold -mt-1">
                  By Blood
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed max-w-xs">
              Face your darkest fears in the ultimate asymmetric multiplayer horror experience.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {["X", "YT", "DC", "TW"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground text-xs font-bold hover:border-blood hover:text-blood transition-colors"
                  aria-label={`${social} social link`}
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground text-sm font-bold uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-muted-foreground text-sm hover:text-blood transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            {"2026 Dread By Blood. All rights reserved. Not affiliated with any existing game."}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Rated</span>
            <span className="px-2 py-0.5 bg-blood text-primary-foreground text-xs font-bold">
              M
            </span>
            <span className="text-xs text-muted-foreground ml-1">Mature 17+</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
