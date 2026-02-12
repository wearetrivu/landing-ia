import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg-secondary border-t border-glass-border pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-heading mb-4 block">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-cyan">
                                Trivu
                            </span>
                        </Link>
                        <p className="text-text-muted max-w-sm mb-6">
                            Simplificamos negocios complejos mediante automatización inteligente, agentes de IA y flujos de trabajo eficientes.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-text-muted hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-text-muted hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-text-muted hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="mailto:hola@wearetrivu.com" className="text-text-muted hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white">Servicios</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Automatización de Procesos</Link></li>
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Chatbots IA</Link></li>
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Agentes Personalizados</Link></li>
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Integraciones CRM</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white">Legal</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Aviso Legal</Link></li>
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-accent-blue transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                    <p>© {new Date().getFullYear()} Trivu. Todos los derechos reservados.</p>
                    <p>Made with 🤖 in Spain.</p>
                </div>
            </div>
        </footer>
    );
}
