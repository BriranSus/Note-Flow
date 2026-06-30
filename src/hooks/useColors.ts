import { useEffect, useState } from "react";
import type { Color } from "../types/ColorType";

const STORAGE_KEY = "binusflow_colors";

const defaultColors: Color[] = [
    { id: 1, hex: "#FFFFFF" }, 
];

export default function useColors() {
    const [colors, setColors] = useState<Color[]>(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : defaultColors;
        } catch {
            return defaultColors;
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
    }, [colors]);

    const addColor = (hex: string) => {
        const id = colors.length ? Math.max(...colors.map(c => c.id)) + 1 : 1;
        setColors(prev => [{ id, hex }, ...prev]);
    };

    const deleteColor = (id: number) => {
        setColors(prev => prev.filter(c => c.id !== id));
    };

    return { colors, addColor, deleteColor };
}
