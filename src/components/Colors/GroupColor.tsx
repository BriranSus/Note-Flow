import ColorPicker from "./ColorPicker"
import DeleteColorModal from "./DeleteColorModal"
import useColors from "../../hooks/useColors"
import { useState } from "react"

function GroupColor() {
    const { colors, addColor, deleteColor } = useColors();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        setDeleteId(id);
        setIsDeleteOpen(true);
    };

    return (
        <div className="w-full rounded-[24px] border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <ColorPicker colors={colors} onDelete={(id) => handleDelete(id)} onAdd={(hex) => addColor(hex)} />
            <DeleteColorModal isOpen={isDeleteOpen} onClose={() => { setIsDeleteOpen(false); setDeleteId(null); }} onDelete={() => { if (deleteId !== null) deleteColor(deleteId); }} color={colors.find(c => c.id === deleteId) || null} />
        </div>
    )
}

export default GroupColor;