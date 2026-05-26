import {ReactNode} from "react";
import {Card} from "@/components";

type Props = {
    label: string;
    value: ReactNode
};

export const Stat = ({ label, value }: Props) => {
    return (
        <Card>
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                {label}
            </p>

            <p className="text-base font-medium">{value}</p>
        </Card>
    );
}