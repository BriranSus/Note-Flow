import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import GroupList from "../components/Tasks/GroupList";
import Toolbar from "../components/Toolbar/Toolbar";
import NewTaskModal from "../components/Toolbar/NewTaskModal";
import type { Task } from "../types/TaskType";
import DeleteAllModal from "../components/Toolbar/DeleteAllModal";
import DeleteTaskModal from "../components/Tasks/DeleteTaskModal";
import DetailTaskModal from "../components/Tasks/DetailTaskModal";

const STORAGE_KEY = "binusflow_tasks";

function DashboardPage() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);
    const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
    const [isDetailTaskOpen, setIsDetailTaskOpen] = useState(false);
    const [detailTaskId, setDetailTaskId] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTasks = searchTerm.trim()
        ? tasks.filter(t => (
            t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.description.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        : tasks;

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (payload: Omit<Task, "id">) => {
        const id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        const t: Task = { ...payload, id };
        setTasks(prev => [t, ...prev]);
    };

    const moveTask = (id: number, newStatus: Task["status"]) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    const deleteAllTasks = () => {
        setTasks([]);
        localStorage.removeItem(STORAGE_KEY);
    }

    return (
        <div className="min-h-screen bg-[#f5efe4] p-2 sm:p-4 lg:p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
                <Sidebar currentPage={"Dashboard"} />
                <div className="flex flex-1 flex-col gap-4 rounded-[28px] border border-slate-200 bg-white/80 p-3 shadow-sm sm:p-5">
                    <Toolbar onOpenNew={() => setIsModalOpen(true)} onDeleteAll={() => setIsDeleteModalOpen(true)} onSearch={(v: string) => setSearchTerm(v)} searchValue={searchTerm} />

                    <GroupList tasks={filteredTasks} onMove={moveTask} onDelete={deleteTask} onDeletePopUp={(id: number) => { setDeleteTaskId(id); setIsDeleteTaskOpen(true); }} onDetailPopUp={(id: number) => { setDetailTaskId(id); setIsDetailTaskOpen(true) }} />

                    <NewTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addTask} />

                    <DeleteAllModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDeleteAll={deleteAllTasks} />

                    <DeleteTaskModal isOpen={isDeleteTaskOpen} onClose={() => { setIsDeleteTaskOpen(false); setDeleteTaskId(null); }} onDeleteTask={() => { if (deleteTaskId !== null) deleteTask(deleteTaskId); setIsDeleteTaskOpen(false); setDeleteTaskId(null); }} task={tasks.find(t => t.id === deleteTaskId) || null}
                    />

                    <DetailTaskModal isOpen={isDetailTaskOpen} onClose={() => { setIsDetailTaskOpen(false); setDetailTaskId(null); }} task={tasks.find(t => t.id === detailTaskId) || null} />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;