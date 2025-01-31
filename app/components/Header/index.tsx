"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Tent } from "lucide-react";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-100 bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="flex h-20 items-center justify-around">
        <div className="text-lg font-bold text-gray-300">Luís Lança</div>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-300 relative group flex items-center gap-1"
            aria-label="Home"
          >
            <Tent className="w-6 h-6" />
            Home
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gray-300 transition-all duration-300 ${
                pathName === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
          <Link
            href="/trips"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-300 relative group flex items-center gap-1"
            aria-label="Trips"
          >
            <Map className="w-6 h-6" />
            Trips
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gray-300 transition-all duration-300 ${
                pathName.startsWith("/trips") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
