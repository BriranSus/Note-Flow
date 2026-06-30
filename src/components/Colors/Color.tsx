import type { Color as ColorType } from "../../types/ColorType";

function isValidHex(hex?: string) {
    if (!hex) return false;
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

function Color({ color, onDelete, onClick }: { color: ColorType; onDelete?: (id: number) => void; onClick?: () => void }) {
    return (
        <div className="relative flex flex-col items-start gap-2 rounded-[24px] border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-md">
            <button type="button" onClick={() => onDelete && onDelete(color.id)} className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600">
                -
            </button>
            <div className="mt-6 h-[96px] w-[96px] overflow-hidden rounded-[20px] border border-slate-200" style={{ backgroundColor: isValidHex(color.hex) ? color.hex : "#f8fafc" }} onClick={onClick}>
                {!isValidHex(color.hex) && (
                    <div className="flex h-full w-full items-center justify-center px-2 text-center text-xs font-medium text-slate-500">No preview available</div>
                )}
            </div>
            <div className="w-full px-1">
                <p className="truncate text-sm font-semibold text-slate-800">{color.hex}</p>
            </div>
        </div>
    )
}

export default Color;