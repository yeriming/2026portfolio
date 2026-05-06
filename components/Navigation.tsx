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
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap rounded-full border border-primary/50 px-3 py-1 text-[0.86rem] font-bold tracking-[-0.01em] text-primary md:text-[0.92rem]"
        >
          Yerim Lee
        </Link>
        <ul className="flex items-center gap-1 text-[0.78rem] text-text-secondary md:gap-3 md:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="whitespace-nowrap rounded-full px-2 py-1 tracking-[0.01em] transition hover:bg-primary-subtle hover:text-primary md:px-3"
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
