"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavLink {
  name: string;
  path?: string;
  children?: { name: string; path: string }[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Events", path: "/event" },
    {
      name: "Our Work",
      children: [
        { name: "Workshop", path: "/workshops" },
        { name: "Project", path: "/project" },
      ],
    },
    { name: "Our Team",
      children:[
        { name:"Team", path: "/ourteam" },
        { name:"Logn", path: "/logn" },
        
      ],
       },

    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg w-[90%] max-w-6xl px-6 py-3 flex items-center justify-between z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-white">
        {navLinks.map((link) =>
          link.children ? (
            <div key={link.name} className="relative group">
              <span className="flex items-center cursor-pointer font-medium group-hover:text-cyan-400">
                {link.name}
                <ChevronDown size={16} className="ml-1" />
              </span>
              <div className="absolute left-0 mt-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hidden group-hover:block z-50">
                {link.children.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    className="block px-4 py-2 text-white hover:text-cyan-400"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.path}
              href={link.path!}
              className="relative group"
            >
              <span
                className={`transition ${
                  pathname === link.path
                    ? "text-cyan-400 font-semibold"
                    : "font-medium"
                }`}
              >
                {link.name}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 
                  ${
                    pathname === link.path
                      ? "w-full shadow-[0_0_8px_#22d3ee]"
                      : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#22d3ee]"
                  }`}
              />
            </Link>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/70 backdrop-blur-lg flex flex-col items-center space-y-4 py-6 rounded-b-2xl md:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="w-full px-4">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex justify-between items-center w-full text-white text-lg font-medium"
                >
                  {link.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      submenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {submenuOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={() => {
                          setIsOpen(false);
                          setSubmenuOpen(false);
                        }}
                        className="block text-white text-base hover:text-cyan-400"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path!}
                onClick={() => setIsOpen(false)}
                className={`relative text-white text-lg font-medium transition group ${
                  pathname === link.path ? "text-cyan-400" : "hover:text-cyan-300"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 
                    ${
                      pathname === link.path
                        ? "w-full shadow-[0_0_8px_#22d3ee]"
                        : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#22d3ee]"
                    }`}
                />
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}