"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
    {
      name: "Our Team",
      children: [
        { name: "Team", path: "/ourteam" },
        { name: "Login", path: "https://devops-malnad.github.io/DevopsAttendanceSystem/" },
      ],
    },
    { name: "Contact Us", path: "/contactus" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      let clickedInside = false;
      
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && ref.contains(target)) {
          clickedInside = true;
        }
      });
      
      if (!clickedInside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setActiveDropdown(prevActive => prevActive === name ? null : name);
  };

  const handleMobileMenuClose = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleMobileDropdownClick = (name: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDropdown(name, event);
  };

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
            <div 
              key={link.name} 
              className="relative group"
              ref={(el) => {
                dropdownRefs.current[link.name] = el;
              }}
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={(e) => toggleDropdown(link.name, e)}
                className="flex items-center cursor-pointer font-medium hover:text-cyan-400 transition-colors duration-200 py-2"
                aria-expanded={activeDropdown === link.name}
                aria-haspopup="true"
              >
                {link.name}
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-200 ${
                    activeDropdown === link.name ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Desktop Dropdown */}
              <div 
                className={`absolute left-0 top-full mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl min-w-[180px] overflow-hidden transition-all duration-300 origin-top ${
                  activeDropdown === link.name 
                    ? 'opacity-100 scale-100 visible translate-y-0' 
                    : 'opacity-0 scale-95 invisible translate-y-2'
                }`}
                style={{ zIndex: 60 }}
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-1">
                  {link.children.map((child, index) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-3 text-white hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/20 ${
                        pathname === child.path ? 'text-cyan-400 bg-white/10' : ''
                      } ${index !== 0 ? 'mt-1' : ''}`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.path}
              href={link.path!}
              className="relative group py-2"
            >
              <span
                className={`transition-colors duration-200 ${
                  pathname === link.path
                    ? "text-cyan-400 font-semibold"
                    : "font-medium hover:text-cyan-400"
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
        className="md:hidden text-white p-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <div 
        className={`absolute top-16 left-0 w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-b-2xl md:hidden overflow-hidden transition-all duration-300 ${
          isOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="flex flex-col py-4 space-y-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="w-full">
                <button
                  onClick={(e) => handleMobileDropdownClick(link.name, e)}
                  className="flex justify-between items-center w-full px-6 py-3 text-white text-lg font-medium hover:bg-white/5 transition-all duration-150"
                  aria-expanded={activeDropdown === link.name}
                  type="button"
                >
                  {link.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Mobile Submenu */}
                <div 
                  className={`overflow-hidden transition-all duration-300 bg-white/10 backdrop-blur-sm mx-4 rounded-xl ${
                    activeDropdown === link.name ? 'max-h-40 mb-2' : 'max-h-0'
                  }`}
                >
                  <div className="p-2">
                    {link.children.map((child, index) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={handleMobileMenuClose}
                        className={`block px-4 py-2 text-white text-base hover:text-cyan-400 hover:bg-white/10 transition-all duration-200 rounded-lg ${
                          pathname === child.path ? 'text-cyan-400 bg-white/10' : ''
                        } ${index !== 0 ? 'mt-1' : ''}`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path!}
                onClick={handleMobileMenuClose}
                className={`relative px-6 py-3 text-white text-lg font-medium transition-all duration-150 hover:bg-white/5 ${
                  pathname === link.path ? "text-cyan-400 bg-white/5" : "hover:text-cyan-300"
                }`}
              >
                <span className="relative">
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                  )}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}