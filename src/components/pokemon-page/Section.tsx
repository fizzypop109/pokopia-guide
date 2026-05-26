import {ReactNode} from "react";

type Props = {
    title: string;
    hint?: string;
    children: ReactNode;
}

export const Section = ({
                     title,
                     hint,
                     children,
                 }: Props) => {
    return (
        <section className="flex flex-col gap-3">
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>

                {hint && <p className="text-sm text-zinc-500">{hint}</p>}
            </div>

            {children}
        </section>
    );
}