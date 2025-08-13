import { useState, useEffect } from 'react'

function Card() {
  const [search, setSearch] = useState('') 
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const delayedFetch = setTimeout(() => {
      if (search.trim() === ''){
        setData([]) // Menghapus data jika tidak ada inputan
        return
      }

      setLoading(true)

      fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
        .then(response => response.json())
        .then(result=>{{
          setData(result.data); // Menampilkan data jika ada inputan
          setLoading(false); // Menghentikan loading setelah data diterima 
          console.log(result.data); // Menampilkan data di console untuk debugging
        }})

        .catch((err)=>{
          console.error('Error fetching data:', err);
          setLoading(false); // Menghentikan loading jika terjadi error
        })
    }, 500); // Delay 500ms sebelum melakukan fetch

    return () => clearTimeout(delayedFetch); // Membersihkan timeout jika komponen unmount atau search berubah
  }, [search]); // Menjalankan efek setiap kali search berubah
  

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Cari Anime</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Ketik judul anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Mengupdate state search saat input berubah
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading && (
        <p className="text-center text-gray-600">Loading...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {data.map((anime) => (//merendering data anime
          <div
            key={anime.mal_id}//untuk mengambil id dari anime
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={anime.images.webp.image_url}//mengambil data gambar
              alt={anime.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">{anime.title}{/*Mengambil data nama*/}</h1>
              <h2 class="text-lg font-semibold text-gray-800">{anime.score}{/*Mengambil data score*/}</h2>
              <p>{anime.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card