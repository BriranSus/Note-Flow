import { useState } from "react";
import type { Task } from "../../types/TaskType";

function Card({ Icon, title, tasks = [], onMove, onDelete, onRequestDelete, onRequestDetail }: { Icon: any; title: string; tasks?: Task[]; onMove?: (id: number, newStatus: Task["status"]) => void; onDelete?: (id: number) => void; onRequestDelete?: (id: number) => void; onRequestDetail?: (id: number) => void }) {

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        if (!id) return;
        const numericId = Number(id);
        onMove && onMove(numericId, title as Task["status"]);
    };

    return (
        <div className="rounded-[24px] border border-slate-200 bg-[#fcfaf6] p-4 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-md">
            <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                    {Icon}
                </div>
                <h1 className="text-sm font-semibold text-slate-800">{title}</h1>
            </div>
            <div className="mt-4 grid min-h-[320px] grid-cols-2 gap-3" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`relative rounded-2xl border border-slate-200 p-3 shadow-sm transition-all duration-200 hover:shadow-md ${selectedId === task.id ? "scale-[1.02] shadow-md" : ""}`}
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", String(task.id))}
                        style={{ backgroundColor: task.color || "#ffffff" }}
                    >
                        <div className="flex min-h-[74px] items-start overflow-hidden text-sm font-medium text-slate-800">
                            <h2 className="line-clamp-3 leading-5">{task.title}</h2>
                        </div>
                        <button
                            type="button"
                            className="absolute inset-0 z-10 cursor-pointer rounded-2xl bg-transparent"
                            onClick={(e) => { e.stopPropagation(); if (selectedId === task.id) { onRequestDetail && onRequestDetail(task.id); } else { setSelectedId(task.id); } }}
                        />
                        {selectedId === task.id && (
                            <button type="button" onClick={(e) => { e.stopPropagation(); onRequestDelete ? onRequestDelete(task.id) : (onDelete && onDelete(task.id)); }} className="absolute -right-1 -top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600">
                                -
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;