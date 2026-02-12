"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    end: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
}

export default function CountUp({
    end,
    prefix = "",
    suffix = "",
    duration = 2000,
    className = "",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = Date.now();
        const absEnd = Math.abs(end);

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * absEnd));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {end < 0 ? "-" : "+"}
            {count}
            {suffix}
        </span>
    );
}
