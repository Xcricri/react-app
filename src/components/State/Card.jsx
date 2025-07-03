import { useState } from 'react'

function Card() {
  const [angka, setAngka] = useState(0)
  return (
    <div> 
      <h1 className="p-2">angka :{angka}</h1>
      <button onClick={()=> setAngka(angka + 1)} className="p-2">Tambah</button>
      <button onClick={()=> setAngka(angka - 1)} className="p-2">Kurang</button>
    </div>
  )
}

export default Card
