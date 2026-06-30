import { useState } from "react";
import NewColorModal from "./NewColorModal";
import { FaPlus } from "react-icons/fa"

function AddColor({ onAdd }: { onAdd: (hex: string) => void }) {
    const [open, setOpen] = useState(false);

    const handleAdd = (hex: string) => {
        onAdd(hex);
        setOpen(false);
    };

    return (
        <div className="mt-2">
            {!open ? (
                <button className="flex min-h-[112px] min-w-[112px] flex-col items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-white text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:border-[#0046FF] hover:text-[#0046FF] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20" onClick={() => setOpen(true)}>
                    <FaPlus className="mb-2 h-6 w-6" />
                    Add color
                </button>
            ) : (
                <NewColorModal isOpen={open} onClose={() => setOpen(false)} onAdd={handleAdd} />
            )}
        </div>
    )
}

export default AddColor;