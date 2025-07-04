import {useState} from 'react'

function Card(){
    const [teks, setTeks] = useState("Halo")
    
    function handlClick(){
      alert('Namaku Fahcri')
    }
    
    function ubahTeks(){
      setTeks("Halo juga")
    }
    
  return(
    <div className="text-center">

      <h1 className="py-2">{teks}</h1>

      <button onClick={()=> alert('Hallo')} className="py-2">Klik aku</button>
      <br/>

      <button onClick={handlClick} className="py-2">Klik aku untuk mengetahui namaku</button>
      <br/>

      <button className="py-2" onClick={ubahTeks}>ubah</button>
    </div>
  )
}

export default Card