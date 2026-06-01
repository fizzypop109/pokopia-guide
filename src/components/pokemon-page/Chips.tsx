type Props = {
    items: readonly string[];
}

export const Chips = ({ items }: Props) => {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((i) => (
                <li
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-sand-100 text-sand-700 ring-1 ring-sand-200"
                >
                    {i}
                </li>
            ))}
        </ul>
    );
}