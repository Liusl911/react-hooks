import React, { useState, useEffect } from "react";
import axios from "axios";

const DogShow = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] = useState(true)
    const style = {
        width: 200
    }
    useEffect(() => {
        setLoading(true);
        axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
            setUrl(res.data.message);
            setLoading(false)
        })
    }, [fetch])

    return (
        <>
            {loading ? <p>图片读取中...</p>
                : <img src={url} alt="狗狗" style={style} />
            }
            <button onClick={() => {setFetch(!fetch)}}>换一张</button>
        </>
    )

}

export default DogShow