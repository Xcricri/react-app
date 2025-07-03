import { useState } from 'react'

function Card({nama, kelas}) {
  
  return (
    <div>
      <h1 className="">Hello, aku {nama}</h1>
      <h1 className="">aku Kelas {kelas}</h1>
    </div>
  )
}

export default Card
