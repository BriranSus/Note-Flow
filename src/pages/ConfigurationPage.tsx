import Sidebar from "../components/Sidebar"
import GroupColor from "../components/Colors/GroupColor"

function ConfigurationPage() {
    return (
        <div className="min-h-screen bg-[#f5efe4] p-2 sm:p-4 lg:p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
                <Sidebar currentPage={"Configuration"} />
                <div className="flex-1 rounded-[28px] border border-slate-200 bg-white/80 p-4 shadow-sm sm:p-6 lg:p-8">
                    <div className="rounded-2xl bg-[#f7f3ea] p-5 sm:p-7">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Configuration</p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Manage your palette</h1>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Create and organize color options to keep each task visually distinct and easy to scan.</p>
                    </div>

                    <div className="mt-6">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-lg font-semibold text-slate-800">Color list</p>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500">Editable</span>
                        </div>
                        <GroupColor />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigurationPage;