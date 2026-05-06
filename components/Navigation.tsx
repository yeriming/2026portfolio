"use client";

import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="rounded-full border border-primary/50 px-3 py-1 text-[0.92rem] font-bold tracking-[-0.01em] text-primary"
        >
          Yerim Lee
        </Link>
        <ul className="flex items-center gap-2 text-sm text-text-secondary md:gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1 tracking-[0.01em] transition hover:bg-primary-subtle hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
