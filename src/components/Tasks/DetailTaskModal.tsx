import type { Task } from "../../types/TaskType";

function DetailTaskModal({ isOpen, onClose, task }: { isOpen: boolean; onClose: () => void; task?: Task | null }) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="z-10 w-full max-w-[760px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <div className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-slate-700">Status</p>
                        <p className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">{task?.status}</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    <p className="text-sm font-semibold text-slate-700">Title</p>
                    <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">{task?.title}</p>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                    <p className="text-sm font-semibold text-slate-700">Description</p>
                    <textarea disabled className="min-h-[220px] resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm">{task?.description}</textarea>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 flex justify-end">
                    <button type="button" onClick={onClose} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">Close</button>
                </form>
            </div>
        </div>
    )
}

export default DetailTaskModal;