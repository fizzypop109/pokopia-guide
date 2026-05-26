type Props = {
    items: readonly string[];
}

export const Chips = ({ items }: Props) => {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((i) => (
                <li
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                    {i}
                </li>
            ))}
        </ul>
    );
}