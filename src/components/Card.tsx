'use client';

import {ReactNode} from "react";

type Props = {
    href?: string;
    children: ReactNode;
}

export const Card = ({ children, href }: Props) => {
    const STYLE_CLASSES = "rounded-2xl border-2 border-sand-200 bg-white/90 p-4 shadow-[0_2px_0_0_rgba(193,170,121,0.4)]";

    if (href) {
        return (
            <button
                onClick={() => window.open(href, "_self")}
                className={`${STYLE_CLASSES} group cursor-pointer text-left hover:-translate-y-0.5 hover:border-leaf-400 hover:shadow-[0_6px_0_0_rgba(107,178,62,0.35)] transition flex flex-col gap-3`}
            >
                {children}
            </button>
        )
    }

    return (
        <div className={STYLE_CLASSES}>
            {children}
        </div>
    )
}