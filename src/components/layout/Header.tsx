"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Problemas", href: "#problemas" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-bg-primary/80 backdrop-blur-md border-b border-glass-border py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tight flex items-center gap-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-cyan">
                        Trivu
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        className="group px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all flex items-center gap-2"
                    >
                        Agenda una llamada
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-glass-border p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-text-secondary hover:text-text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contacto"
                            className="mt-4 w-full py-3 rounded-lg bg-accent-blue text-white text-center font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Agenda una llamada
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
