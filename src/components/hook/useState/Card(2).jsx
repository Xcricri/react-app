import { useState } from 'react'

function Card(){
    const [mood, setMood] = useState("Happy")
    return(
        <div>
            <h1>{mood}</h1>
            <button onClick={()=>setMood("Sad")}>Ubah Mood</button>
        </div>
    )
}

export default Card