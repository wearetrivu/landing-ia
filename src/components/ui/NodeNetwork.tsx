"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

export default function NodeNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const nodesRef = useRef<Node[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        const initNodes = () => {
            const rect = canvas.getBoundingClientRect();
            const count = Math.min(Math.floor((rect.width * rect.height) / 12000), 80);
            nodesRef.current = Array.from({ length: count }, () => ({
                x: Math.random() * rect.width,
                y: Math.random() * rect.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3,
            }));
        };

        const draw = () => {
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);
            const nodes = nodesRef.current;
            const maxDist = 150;
            const mouse = mouseRef.current;

            // Update & draw nodes
            for (const node of nodes) {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > rect.width) node.vx *= -1;
                if (node.y < 0 || node.y > rect.height) node.vy *= -1;

                // Mouse repulsion
                const dx = node.x - mouse.x;
                const dy = node.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    node.vx += dx * 0.001;
                    node.vy += dy * 0.001;
                }

                // Clamp velocity
                const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
                if (speed > 1) {
                    node.vx = (node.vx / speed) * 1;
                    node.vy = (node.vy / speed) * 1;
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${node.opacity})`;
                ctx.fill();

                // Glow
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.radius * 3
                );
                gradient.addColorStop(0, `rgba(59, 130, 246, ${node.opacity * 0.3})`);
                gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };

        resize();
        initNodes();
        draw();

        window.addEventListener("resize", () => {
            resize();
            initNodes();
        });
        canvas.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.6 }}
        />
    );
}
