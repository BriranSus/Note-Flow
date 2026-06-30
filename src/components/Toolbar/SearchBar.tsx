function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <input
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0046FF] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20 sm:min-w-[240px]"
            type="text"
            placeholder="Search tasks"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar;