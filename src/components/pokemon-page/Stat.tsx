import {ReactNode} from "react";
import {Card} from "@/components";

type Props = {
    label: string;
    value: ReactNode
};

export const Stat = ({ label, value }: Props) => {
    return (
        <Card>
            <p className="text-xs font-bold uppercase tracking-wider text-leaf-600 mb-1">
                {label}
            </p>

            <div className="text-base font-medium">
                {value}
            </div>
        </Card>
    );
}