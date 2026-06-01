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
                <h2 className="font-display text-xl font-bold text-leaf-800 flex items-center gap-2">
                    <span className="h-5 w-1.5 rounded-full bg-leaf-400" />
                    {title}
                </h2>

                {hint && <p className="text-sm text-sand-500 ml-3.5">{hint}</p>}
            </div>

            {children}
        </section>
    );
}