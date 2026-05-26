import {ReactNode} from "react";
import Link from "next/link";

type Props = {
    href?: string;
    children: ReactNode;
}

export const Card = ({ children, href }: Props) => {
    const STYLE_CLASSES = "rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4";

    if (href) {
        return (
            <Link
                href={href}
                className={`${STYLE_CLASSES} group hover:border-emerald-400 hover:shadow-md transition flex flex-col gap-3`}
            >
                {children}
            </Link>
        )
    }

    return (
        <div className={STYLE_CLASSES}>
            {children}
        </div>
    )
}