import { useState } from "react";
import { FaHome, FaCog, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { SidebarType } from "../types/SidebarType";
import { useNavigate } from "react-router-dom";
import BinusFlow from "../assets/binusflow.png"

function Sidebar(props: SidebarType) {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const options = [
        {
            Icon: <FaHome className="min-h-[18px] min-w-[18px]" />,
            title: "Dashboard",
            isActive: props.currentPage === "Dashboard",
            link: "/",
        },
        {
            Icon: <FaCog className="min-h-[18px] min-w-[18px]" />,
            title: "Configuration",
            isActive: props.currentPage === "Configuration",
            link: "/configuration",
        },
    ]

    return (
        <>
            {open && (
                <div className="flex min-h-screen w-full max-w-[250px] flex-col rounded-[28px] border border-slate-200 bg-slate-900/95 p-5 text-white shadow-sm transition-all duration-200 sm:p-6">
                    <button type="button" onClick={() => setOpen(false)} className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                        <FaArrowLeft className="h-4 w-4" />
                    </button>
                    <div className="mt-4 flex items-center gap-3">
                        <img src={BinusFlow} className="h-10 w-10" alt="Binus Flow logo" />
                        <h1 className="text-lg font-semibold tracking-tight">Note Flow</h1>
                    </div>

                    <div className="mt-8 space-y-2">
                        {options.map((option) => (
                            <button key={option.title} type="button" className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${option.isActive ? "bg-[#0046FF]/80 text-white shadow-sm" : "text-slate-200"}`} onClick={() => navigate(option.link)}>
                                {option.Icon}
                                <span>{option.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {!open && (
                <div className="flex min-h-screen w-20 flex-col rounded-[28px] border border-slate-200 bg-slate-900/95 p-4 text-white shadow-sm transition-all duration-200">
                    <button type="button" onClick={() => setOpen(true)} className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                        <FaArrowRight className="h-4 w-4" />
                    </button>
                    <img src={BinusFlow} className="mb-6 h-8 w-8 self-center" alt="Binus Flow logo" />
                    <div className="space-y-3">
                        {options.map((option) => (
                            <button key={option.title} type="button" className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${option.isActive ? "bg-[#0046FF]/80" : ""}`} onClick={() => navigate(option.link)}>
                                {option.Icon}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Sidebar;