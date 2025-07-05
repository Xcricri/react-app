import {useState, useEffect} from 'react'
import axios from 'axios'

function Card(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    axios.get('https://api.jikan.moe/v4/top/anime')//mengambil data
    .then(res=>{//kalau data berhasil diambil
      setData(res.data.data)
      setLoading(false)
      console.log(res.data.data) 
    })
    .catch(err=>{//Kalau gagal ambil data
      console.log("Error"+ err)
      setLoading(false)
    })
  })
  
  if(loading) return <p className="">Loading...</p>
  return(
    <div className="">
      <ul className="">
        {data.map(anime=>(
          <li className="" key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card