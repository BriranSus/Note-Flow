import { FaPlus, FaTrash } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Toolbar({ onOpenNew, onDeleteAll, onSearch, searchValue }: { onOpenNew: () => void, onDeleteAll: () => void, onSearch: (v: string) => void, searchValue: string }) {
    return (
        <div className="flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white/90 p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-slate-900">Today’s focus</p>
                <p className="text-sm text-slate-500">Keep tasks moving with calm, focused controls.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <SearchBar value={searchValue} onChange={onSearch} />
                <div className="flex items-center gap-2">
                    <button type="button" onClick={onOpenNew} aria-label="Add Task" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0046FF] text-white shadow-sm transition-all duration-200 hover:scale-[1.01] hover:bg-[#0038d4] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/30 active:scale-[0.98]">
                        <FaPlus className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={onDeleteAll} aria-label="Delete all tasks" className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 active:scale-[0.98]">
                        <FaTrash className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;