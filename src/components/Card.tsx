import Link from 'next/link';
import {ReactNode} from "react";

type Props = {
    href?: string;
    label?: string;
    children: ReactNode;
}

export const Card = ({ children, href, label }: Props) => {
    const STYLE_CLASSES = "rounded-2xl border-2 border-sand-200 bg-white/90 p-4 shadow-[0_2px_0_0_rgba(193,170,121,0.4)]";

    if (href) {
        // Stretched-link pattern: an absolutely-positioned overlay link is the
        // primary click target so the whole card is clickable, while nested
        // interactive elements (e.g. habitat chips) opt above it with z-10.
        return (
            <div
                className={`${STYLE_CLASSES} group relative cursor-pointer text-left hover:-translate-y-0.5 hover:border-leaf-400 hover:shadow-[0_6px_0_0_rgba(107,178,62,0.35)] transition flex flex-col gap-3`}
            >
                <Link
                    href={href}
                    aria-label={label}
                    className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-400"
                />
                {children}
            </div>
        )
    }

    return (
        <div className={STYLE_CLASSES}>
            {children}
        </div>
    )
}