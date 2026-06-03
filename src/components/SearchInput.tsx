interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder = 'Search by name…' }: Props) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border-2 border-sand-200 bg-white px-5 py-2.5 text-sm shadow-sm focus:outline-none focus:border-leaf-400 focus:ring-2 focus:ring-leaf-300"
    />
  );
}
