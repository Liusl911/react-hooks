import React, { useState, useEffect } from "react";

const useMousePosition = () => {
    const [positions, setPositions] = useState({ x: 0, y :0 })
    useEffect(() => {
        const mouseMove = (event) => {
            setPositions({ x: event.clientX, y: event.clientY })
        }
        document.addEventListener('mousemove', mouseMove)
        return () => {
            document.removeEventListener('mousemove', mouseMove)
        }
    })
    return positions
}

export default useMousePosition;