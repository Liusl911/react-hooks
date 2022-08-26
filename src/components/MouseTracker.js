import React, { useState, useEffect } from "react";

const MouseTracker = () => {
    const [ positions, setPositions ] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMouse = (event) => {
            console.log('点了哦！')
            setPositions({ x: event.clientX, y: event.clientY })
        }
        console.log('监听事件')
        document.addEventListener('click', updateMouse)
        return () => {
            console.log('消除事件')
            document.removeEventListener('click', updateMouse)
        }
    })
    return (
        <p>X: {positions.x}, Y: {positions.y}</p>
    )
}

export default MouseTracker;