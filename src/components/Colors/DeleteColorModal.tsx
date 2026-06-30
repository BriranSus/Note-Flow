import type { Color } from "../../types/ColorType";

function DeleteColorModal({ isOpen, onClose, onDelete, color }: { isOpen: boolean; onClose: () => void; onDelete: () => void; color?: Color | null }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="z-10 w-full max-w-[560px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <div className="space-y-3">
                    <p className="text-lg font-semibold text-slate-900">Delete this color?</p>
                    <p className="text-sm leading-6 text-slate-600">This removes the color from your palette and will no longer be available for tasks.</p>
                </div>
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="h-16 w-16 rounded-2xl border border-slate-200" style={{ backgroundColor: color?.hex || "transparent" }}></div>
                    <div className="text-sm text-slate-700">{color?.hex || "Selected color"}</div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <button onClick={onClose} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">Cancel</button>
                    <button onClick={() => { onDelete(); onClose(); }} className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteColorModal;