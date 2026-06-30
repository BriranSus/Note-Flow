import { useState } from "react";
import type { Task, ListType } from "../../types/TaskType";
import useColors from "../../hooks/useColors";

function NewTaskModal({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (t: Omit<Task, "id">) => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<ListType>("To Do");
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const { colors } = useColors();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd({ title: title.trim(), description: description.trim(), status, color: selectedColor || undefined });
        setTitle("");
        setDescription("");
        setStatus("To Do");
        setSelectedColor(null);
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="z-10 w-full max-w-[760px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col gap-2 sm:min-w-[180px]">
                            <label className="text-sm font-semibold text-slate-700">Status</label>
                            <select value={status} onChange={e => setStatus(e.target.value as ListType)} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm focus:border-[#0046FF] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20">
                                <option>To Do</option>
                                <option>In Progress</option>
                                <option>Done</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">Color</label>
                            <div className="flex flex-wrap gap-2">
                                {colors.map(c => (
                                    <button key={c.id} type="button" onClick={() => setSelectedColor(c.hex)} className={`h-8 w-8 rounded-full border-2 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20 ${selectedColor === c.hex ? "border-slate-900" : "border-white"}`} style={{ backgroundColor: c.hex }}></button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">Title</label>
                        <input
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            placeholder="Task title"
                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0046FF] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            placeholder="Task description"
                            className="min-h-[150px] resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0046FF] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/20"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button type="button" onClick={onClose} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">Cancel</button>
                        <button className="rounded-full bg-[#0046FF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0038d4] focus:outline-none focus:ring-2 focus:ring-[#0046FF]/30" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTaskModal;