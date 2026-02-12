"use client";

import CountUp from "@/components/ui/CountUp";
import AnimatedSection from "@/components/ui/AnimatedSection";

const metrics = [
    {
        val: -40,
        prefix: "",
        suffix: "%",
        label: "Tiempo Administrativo",
        desc: "Reducción media en tareas manuales",
        gradient: "from-blue-500/20 to-cyan-500/20",
        textGradient: "text-cyan-400",
    },
    {
        val: 25,
        prefix: "+",
        suffix: "%",
        label: "Conversión de Leads",
        desc: "Mejora en tasa de cierre con chatbots",
        gradient: "from-purple-500/20 to-pink-500/20",
        textGradient: "text-purple-400",
    },
    {
        val: 60,
        prefix: "+",
        suffix: "%",
        label: "Eficiencia Operativa",
        desc: "Aumento en capacidad de gestión",
        gradient: "from-amber-500/20 to-orange-500/20",
        textGradient: "text-amber-400",
    },
];

export default function ResultsSection() {
    return (
        <section className="py-24 bg-bg-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Resultados tangibles
                    </h2>
                    <p className="text-text-secondary text-lg">
                        No vendemos humo. Vendemos tiempo y rentabilidad.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((m, index) => (
                        <AnimatedSection
                            key={index}
                            delay={index * 0.1}
                            className={`p-8 rounded-3xl bg-gradient-to-br ${m.gradient} border border-white/5 text-center backdrop-blur-sm`}
                        >
                            <div className={`text-5xl md:text-6xl font-bold font-heading mb-4 ${m.textGradient}`}>
                                <CountUp end={m.val} prefix={m.prefix} suffix={m.suffix} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{m.label}</h3>
                            <p className="text-text-muted">{m.desc}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
