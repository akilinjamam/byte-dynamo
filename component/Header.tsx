"use client"
import Link from "next/link";
import logo from '../public/Byte-Dynamo-Logo-without-text.png'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <div>
             {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center ">
            <Image width={50} height={50} src={logo} alt="company-logo" />
            <h1 className="text-xl font-bold tracking-wide text-white ml-3">
                Byte Dynamo
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#solutions" className="hover:text-white">Solutions</Link>
            <Link href="#projects" className="hover:text-white">Projects</Link>
            <Link href="#about" className="hover:text-white">About</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </nav>

          <a
            href="#contact"
            className="bg-linear-to-r from-blue-500 to-cyan-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 hidden md:block lg:block "
          >
            Get Demo
          </a>
           {/* Mobile Menu Button */}
            <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
            >
            <Menu size={28} />
            </button>
        </div>
      </header>
      {/* Mobile Overlay */}
    <div
    className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={() => setMenuOpen(false)}
    />

    {/* Mobile Drawer */}
    <div
    className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#0A0F1C] border-l border-white/10
    transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
    <div className="p-6 flex justify-between items-center border-b border-white/10">
        <span className="text-lg font-semibold text-white">Menu</span>
        <button onClick={() => setMenuOpen(false)}>
        <X size={24} className="text-white" />
        </button>
    </div>

    <nav className="flex flex-col p-6 gap-6 text-gray-300">
        {["services", "solutions", "projects", "about", "contact"].map((item) => (
        <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
        >
            {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
        ))}

        <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mt-6 bg-linear-to-r from-blue-500 to-cyan-400 text-black px-4 py-2 rounded-md text-center font-semibold"
        >
        Get Demo
        </a>
    </nav>
    </div>
        </div>
    );
};

export default Header;