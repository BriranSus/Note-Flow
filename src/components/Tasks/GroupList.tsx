import Card from "./Card";
import { FaBolt, FaRunning, FaCheck } from "react-icons/fa";
import type { Task } from "../../types/TaskType";

function GroupList({ tasks, onMove, onDelete, onDeletePopUp, onDetailPopUp }: { tasks: Task[]; onMove: (id: number, newStatus: Task["status"]) => void; onDelete: (id: number) => void; onDeletePopUp: (id: number) => void; onDetailPopUp: (id: number) => void }) {
    const listName = [
        {
            name: "To Do",
            Icon: <FaBolt className="min-h-5 min-w-5" />
        },
        {
            name: "In Progress",
            Icon: <FaRunning className="min-h-5 min-w-5" />
        },
        {
            name: "Done",
            Icon: <FaCheck className="min-h-5 min-w-5" />
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            {listName.map((data) => (
                <Card key={data.name} Icon={data.Icon} title={data.name} tasks={tasks.filter(t => t.status === data.name)} onMove={onMove} onDelete={onDelete} onRequestDelete={onDeletePopUp} onRequestDetail={onDetailPopUp} />
            ))}
        </div>
    );
}

export default GroupList;