"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
    {
        id: "01",
        title: "Diagnóstico",
        desc: "Auditamos tus flujos actuales para identificar cuellos de botella y oportunidades.",
        icon: Search,
    },
    {
        id: "02",
        title: "Diseño",
        desc: "Creamos la arquitectura de la solución: qué herramientas y qué lógica usaremos.",
        icon: PenTool,
    },
    {
        id: "03",
        title: "Implementación",
        desc: "Desarrollamos y conectamos las automatizaciones y agentes sin detener tu operación.",
        icon: Code2,
    },
    {
        id: "04",
        title: "Optimización",
        desc: "Monitorizamos los resultados y ajustamos para maximizar el rendimiento.",
        icon: TrendingUp,
    },
];

export default function ProcessSection() {
    return (
        <section id="proceso" className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Cómo trabajamos
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Un método probado para pasar del caos manual a la eficiencia automática en 4 semanas.
                    </p>
                </AnimatedSection>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <AnimatedSection
                                key={index}
                                delay={index * 0.2}
                                className="relative z-10 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-bg-primary border-4 border-bg-card flex items-center justify-center mb-6 relative group-hover:border-accent-blue/50 transition-colors duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                        <span className="absolute top-0 right-0 w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                                            {step.id}
                                        </span>
                                        <step.icon className="w-8 h-8 text-text-muted group-hover:text-accent-blue transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
