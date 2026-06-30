import { useState } from "react";

function isValidHex(hex?: string) {
    if (!hex) return false;
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

function NewColorModal({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (hex: string) => void }) {
    const [hex, setHex] = useState("");

    const handleAdd = () => {
        const value = hex.trim();
        if (!value) return;
        onAdd(value);
        setHex("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-950/70" onClick={onClose}></div>
            <div className="z-10 w-full max-w-[560px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <div className="space-y-3">
                    <p className="text-lg font-semibold text-slate-900">Add a new color</p>
                    <p className="text-sm leading-6 text-slate-600">Use a hex code to create a fresh color option for your task board.</p>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">Color</label>
                        <input
                            value={hex}
                            onChange={(e) => setHex(e.target.value)}
                            placeholder="#RRGGBB"
                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0046FF] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-slate-700">Preview</p>
                        <div className="flex h-24 w-24 items-center justify-center rounded-[24px] border border-slate-200" style={{ backgroundColor: isValidHex(hex) ? hex : "#f8fafc" }}>
                            {!isValidHex(hex) && <div className="px-3 text-center text-xs font-medium text-slate-500">No preview available</div>}
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end gap-3">
                    <button type="button" onClick={() => { setHex(""); onClose(); }} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">Cancel</button>
                    <button type="button" onClick={handleAdd} className="rounded-full bg-[#0046FF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0038d4] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/30">Save</button>
                </div>
            </div>
        </div>
    );
}

export default NewColorModal;