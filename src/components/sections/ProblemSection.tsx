"use client";

import { AlertTriangle, Clock, Users, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const problems = [
    {
        icon: Clock,
        title: "Tiempo Desperdiciado",
        description: "Tu equipo pierde horas en tareas repetitivas manuales que no aportan valor estratégico.",
    },
    {
        icon: DollarSign,
        title: "Costes Operativos Altos",
        description: "Escalar tu negocio implica contratar más personal linealmente, aumentando los gastos fijos.",
    },
    {
        icon: AlertTriangle,
        title: "Errores Humanos",
        description: "Pérdida de datos, olvidos en seguimiento de leads y fallos en procesos críticos por fatiga.",
    },
    {
        icon: Users,
        title: "Equipos Saturados",
        description: "Talento creativo atrapado en burocracia administrativa en lugar de innovar y vender.",
    },
];

export default function ProblemSection() {
    return (
        <section id="problemas" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        El modelo tradicional <br />
                        <span className="text-accent-pink">ya no escala.</span>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Las empresas modernas no pueden permitirse procesos lentos y manuales en un mercado que exige velocidad.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((prob, index) => (
                        <AnimatedSection
                            key={index}
                            delay={index * 0.1}
                            className="p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-accent-pink/30 hover:bg-white/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent-pink/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <prob.icon className="w-6 h-6 text-accent-pink" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {prob.description}
                            </p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
