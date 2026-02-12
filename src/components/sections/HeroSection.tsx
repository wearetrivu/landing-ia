"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";
import Link from "next/link";
import NodeNetwork from "@/components/ui/NodeNetwork";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <NodeNetwork />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-bg-primary/80 to-bg-primary z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-accent-cyan animate-pulse"></span>
                        <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                            Automatización Inteligente v2.0
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6"
                    >
                        Automatiza tu negocio.
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple">
                            Multiplica resultados.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
                    >
                        Eliminamos tareas repetitivas con Agentes de IA y workflows inteligentes.
                        Recupera tu tiempo y escala sin aumentar costes fijos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#contacto"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow flex items-center justify-center gap-2 group"
                        >
                            Agenda una consulta gratuita
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#proceso"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-text-primary font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            <Zap className="w-5 h-5 text-accent-purple" />
                            Ver cómo funciona
                        </Link>
                    </motion.div>

                    {/* Abstract metrics visualization */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-70"
                    >
                        {[
                            { label: "Procesos", val: "Automáticos" },
                            { label: "Disponibilidad", val: "24/7" },
                            { label: "Errores", val: "0%" },
                            { label: "Setup", val: "< 2 Semanas" },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-4 border-r last:border-0 border-white/10">
                                <div className="text-sm text-text-muted mb-1">{item.label}</div>
                                <div className="font-bold text-text-primary">{item.val}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
