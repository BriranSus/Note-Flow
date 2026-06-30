function DeleteAllModal({ isOpen, onClose, onDeleteAll }: { isOpen: boolean; onClose: () => void; onDeleteAll: () => void }) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onDeleteAll();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="z-10 w-full max-w-[560px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <div className="space-y-3">
                    <p className="text-lg font-semibold text-slate-900">Delete all tasks?</p>
                    <p className="text-sm leading-6 text-slate-600">This will remove every existing task from the board. This action cannot be undone.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">Cancel</button>
                    <button className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300" type="submit">Delete</button>
                </form>
            </div>
        </div>
    )
}

export default DeleteAllModal;