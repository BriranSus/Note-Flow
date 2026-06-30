export type ListType = "To Do" | "In Progress" | "Done";

export type Task = {
    id: number;
    title: string;
    description: string;
    status: ListType;
    color?: string; 
}