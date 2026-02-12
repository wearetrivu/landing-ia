"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
    return (
        <section id="contacto" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-bg-primary -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                        ¿Listo para transformar <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
                            tu negocio?
                        </span>
                    </h2>

                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                        Deja de perder tiempo en tareas manuales. Agenda una consultoría gratuita de 30 minutos y descubre dónde puedes automatizar.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="mailto:hola@wearetrivu.com" // Placeholder link
                            className="px-10 py-5 rounded-full bg-white text-bg-primary font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow flex items-center gap-3"
                        >
                            <Calendar className="w-5 h-5" />
                            Agenda tu Auditoría Gratis
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    <div className="mt-12 text-sm text-text-muted">
                        Sin compromiso. Solo estrategia pura.
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
