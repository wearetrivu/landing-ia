"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Bot, Workflow, Database, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
    {
        icon: Workflow,
        title: "Automatización de Procesos",
        desc: "Diseñamos workflows que eliminan tareas repetitivas. Desde facturación automática hasta gestión de leads.",
        grid: "md:col-span-2",
    },
    {
        icon: Bot,
        title: "Agentes IA Personalizados",
        desc: "Entrenamos cerebros digitales con tu conocimiento corporativo para asistir a tu equipo o clientes.",
        grid: "md:col-span-1",
    },
    {
        icon: MessageSquare,
        title: "Chatbots Inteligentes",
        desc: "Atención 24/7 que entiende el contexto, no solo keywords. Integrados en Web, WhatsApp o Telegram.",
        grid: "md:col-span-1",
    },
    {
        icon: Database,
        title: "Integraciones Técnicas",
        desc: "Conectamos APIs complejas para que tus sistemas hablen entre sí sin fricciones.",
        grid: "md:col-span-2",
    },
];

import { MessageSquare } from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="servicios" className="py-24 relative">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent-cyan text-sm font-bold tracking-widest uppercase mb-4 block">
                        Nuestros Servicios
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Tecnología punta al servicio
                        <br /> de tu productividad
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <AnimatedSection
                            key={index}
                            delay={index * 0.1}
                            className={`group relative p-8 rounded-3xl bg-bg-card border border-white/5 overflow-hidden transition-all hover:bg-white/5 hover:border-white/10 ${service.grid}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 via-accent-blue/0 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-7 h-7 text-text-primary" />
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
