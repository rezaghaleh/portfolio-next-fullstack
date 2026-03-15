import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="navbar">
      <Link href="#top" className="logo-link" aria-label="Back to top">
        <Image src="/assets/rg-logo.png" alt="RG Logo" width={44} height={44} priority />
      </Link>

      <nav aria-label="Main navigation" className="nav-scroll">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
