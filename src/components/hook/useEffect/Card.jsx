import {useState, useEffect} from 'react'

function Card(){
  const [angka, setAngka] = useState(0)
  
  useEffect(()=>{
    console.log("Angka yang berubah:"+ angka)
  },[angka])
  
  return(
    <div className="">
      <h1 className="">{angka}</h1>
      <button className="" onClick={()=> setAngka(angka + 1)}>Tambah</button>
      <button className="" onClick={()=> setAngka(angka - 1)}>Kurang</button>
    </div>
  )
}

export default Card

{/*
useEffect(() => {...})	Setiap kali render
useEffect(() => {...}, [])	Sekali saja (saat komponen muncul)
useEffect(() => {...}, [x])	Saat x berubah*/}