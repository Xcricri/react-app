import { useState, useEffect } from 'react'
import axios from 'axios'

function Card() {
  const [search, setSearch] = useState('') 
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search.trim() === '') {//untuk mengecek isi inputan
      setData([])//mengosongkan data
      return
    }

    axios.get(`https://api.jikan.moe/v4/anime?q=${search}`)//ambil api
      .then(res => {//konsisi data berhasil di ambil
        setData(res.data.data)//mengambil data
        setLoading(false)
        console.log(res.data.data)
      })
      .catch(err => {//kondisi data gagal di ambil
        console.log("Error: " + err)//memunculkan error
        setLoading(false)
      })
  }, [search])//merender setiap kali ada inputan

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Cari Anime</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Ketik judul anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading && (
        <p className="text-center text-gray-600">Loading...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {data.map((anime) => (//merender data
          <div
            key={anime.mal_id}//uniqe key
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={anime.images.jpg.image_url}//mengambil data gamber
              alt={anime.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">{anime.title}{/*Mengambil data nama*/}</h1>
              <h2 class="text-lg font-semibold text-gray-800">{anime.score}{/*Mengambil data score*/}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card