import React, { useState } from "react";
import useURLLoader from "../hooks/useURLLoader";

const CatShowWithHook = () => {
    const style = {
        width: 200
    }
    const [category, setCatgory] = useState('1')
    const [data, loading] = useURLLoader(`https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category}`)
    console.log(data)
    return (
        <>
            {loading ? <p>图片读取中...</p>
                : <img src={data && data[0].url} alt="猫猫" style={style} />
            }
            <button onClick={() => {setCatgory('5')}}>盒子</button>
            <button onClick={() => {setCatgory('1')}}>帽子</button>
        </>
    )
}

export default CatShowWithHook;