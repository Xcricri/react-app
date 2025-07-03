import { useState } from 'react'

function Card() {
  const [mood, setMood] = useState("Senang")
  return (
    <div> 
      <h1 className="p-2">Moodku :{mood}</h1>
      <button className="p-2" onClick={()=>setMood("Sedih")}>Ubah mood</button>
    </div>
  )
}

export default Card