"use client";

import { CheckCircle2, Zap, Brain, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const solutions = [
    {
        icon: Zap,
        title: "Automatización Total",
        description: "Conectamos tus herramientas (CRM, Email, Marketing) para que los datos fluyan sin intervención humana.",
        color: "text-accent-blue",
        bg: "bg-accent-blue/10",
    },
    {
        icon: Brain,
        title: "Agentes de IA",
        description: "Empleados digitales que trabajan 24/7. Analizan documentos, responden correos y toman decisiones.",
        color: "text-accent-purple",
        bg: "bg-accent-purple/10",
    },
    {
        icon: MessageSquare,
        title: "Chatbots Inteligentes",
        description: "Atención al cliente instantánea y personalizada que cualifica leads y cierra ventas automáticamente.",
        color: "text-accent-cyan",
        bg: "bg-accent-cyan/10",
    },
    {
        icon: CheckCircle2,
        title: "Integraciones Robustas",
        description: "Unificamos tu stack tecnológico. WhatsApp, Notion, Hubspot y Stripe hablando el mismo idioma.",
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
];

export default function SolutionSection() {
    return (
        <section id="soluciones" className="py-24 bg-bg-secondary/50 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <AnimatedSection className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Transformamos el caos en{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-cyan">
                                eficiencia pura.
                            </span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                            No solo implementamos herramientas; diseñamos ecosistemas digitales que trabajan por ti.
                            Nuestras soluciones liberan hasta el 40% del tiempo operativo de tu equipo desde el primer mes.
                        </p>
                        <ul className="space-y-4">
                            {["Implementación rápida", "Escalabilidad garantizada", "Soporte técnico continuo"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-text-primary font-medium">
                                    <div className="w-6 h-6 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {solutions.map((sol, index) => (
                            <AnimatedSection
                                key={index}
                                delay={index * 0.1}
                                className="p-6 rounded-2xl bg-bg-card border border-white/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-white/10"
                            >
                                <div className={`w-12 h-12 rounded-xl ${sol.bg} flex items-center justify-center mb-4`}>
                                    <sol.icon className={`w-6 h-6 ${sol.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {sol.description}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
