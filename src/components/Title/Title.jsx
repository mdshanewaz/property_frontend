import { useEffect } from "react";

export const Title = (title) => {
    useEffect(() => {
        document.title = `Luxora Estate${title}`;
    }, [])
} 