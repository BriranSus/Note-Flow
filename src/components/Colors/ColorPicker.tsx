import Color from "./Color";
import type { Color as ColorType } from "../../types/ColorType";
import AddColor from "./AddColor";
import useColors from "../../hooks/useColors";

function ColorPicker({ colors, onDelete, onClick, onAdd }: { colors: ColorType[]; onDelete?: (id: number) => void; onClick?: (id: number) => void; onAdd?: (hex: string) => void;}) {

    const { addColor } = useColors();

    return (
        <div className="flex flex-wrap gap-4 rounded-[24px] border border-slate-200 bg-[#f7f3ea] p-4 sm:p-6">
            {colors.map(c => (
                <Color key={c.id} color={c} onDelete={onDelete} onClick={() => onClick && onClick(c.id)} />
            ))}
            <AddColor onAdd={(hex: string) => { addColor(hex); onAdd?.(hex); }} />
        </div>
    )
}

export default ColorPicker;