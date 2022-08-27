import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";

const LikeButton = () => {
    const position = useMousePosition()
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    useEffect(() => {
        document.title = `一共点击了${like}次`
    })
    return (
        <>
            <p>{position.y}</p>
            <button onClick={() => {setLike( like + 1 )}}>
                {like}赞
            </button>
            <button onClick={() => {setOn( !on )}}>
                { on ? 'On' : 'Off' }
            </button>
        </>
    )
}

export default LikeButton;