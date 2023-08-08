

import axios from 'axios';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [animes, setAnime] = useState([])

  const handleSubmit = (e) => {
    e?.preventDefault()
    const animeName = e.target.animeName.value;

    const url = `https://api.jikan.moe/v4/anime?q=${animeName}&limit=20`

    axios.get(url)
      .then(({data}) => setAnime(data.data))
      .catch((err) => console.log(err))
  }

  const [infoStart, setInfoStart] = useState([])

  const start = () => {
    // const animeName = e.target.animeName.value;
    console.log("aqui estoy");
    const url = `https://api.jikan.moe/v4/anime?q=one&limit=20`

    axios.get(url)
      .then(({data}) => setInfoStart(data.data))
      .catch((err) => console.log(err))
    }
    
    useEffect(()=> {
      start()
    }, [])



  return (
    <>
      <main className='bg-[url(/fon3.jpg)]  bg-cover min-h-screen text-white p-4 justify-center items-center'>
        <div className='flex justify-center hover:animate-pulse'>
        <h1 className='text-4xl font-bold text-center mb-4 text-sky-600 underline decoration-sky-600 cursor-text  hover:animate-pulse flex justify-center pt-5 '>Buscador de Anime</h1>
        <img src="/smile2.png" alt="" />
        </div>
        <form onSubmit={handleSubmit} autoComplete='off' className='flex rounded-md overflow-hidden max-w-max mx-auto '>
          <input id='animeName' type="text" placeholder='Buscar anime...' className='text-black p-2 focus:bg-gray-600 focus:border-0 focus:text-white'/>
          <button className='bg-red-500 px-4 active:scale-110'>Buscar</button>
        </form>



    <section className='grid gap-4 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] max-w-[1200px] mx-auto mt-4'>
    {
    animes ? 
    
    animes.map((anime) => (<> 
       <article key={anime?.mal_id}  className='bg-sky-600/50 flex-col max-w-xs mx-auto p-6 rounded-md my-3 hover:scale-[1.01] hover:bg-sky-600 hover:rotate-[-0.5deg]'>
      <div className='h-[320px] overflow-hidden'>
          <img src={anime?.images.jpg.large_image_url} alt="" className='rounded-md h-full block object-cover w-full'/>
      </div>
      <ul>
      {/* <li>Nombre: {user?.name.title}, {user?.name.first}, {user?.name.last}</li> */}
          <li className='text-2xl '>Nombre: {anime?.title}</li>
          <li>Episodios: {anime?.episodes}</li>
          <li>Puntuacion: {anime?.score}</li>
          <li>Duracion: {anime?.duration}</li>
          <li className='line-clamp-4'>{anime?.synopsis}</li>
      </ul>

  </article>


  </>
    ) )
    
    :
    
    infoStart.map((anime) => (<> 
       <article key={anime?.mal_id}  className='bg-gray-500 flex-col max-w-xs mx-auto p-6 rounded-md my-3'>
      <div className='h-[320px] overflow-hidden'>
          <img src={anime?.images.jpg.large_image_url} alt="" className='rounded-md h-full block object-cover w-full'/>
      </div>
      <ul>
      {/* <li>Nombre: {user?.name.title}, {user?.name.first}, {user?.name.last}</li> */}
          <li className='text-2xl '>Nombre: {anime?.title}</li>
          <li>Episodios: {anime?.episodes}</li>
          <li>Puntuacion: {anime?.score}</li>
          <li>Duracion: {anime?.duration}</li>
          <li className='line-clamp-4'>{anime?.synopsis}</li>
      </ul>

  </article>


  </>
    ) )
  }

  {
    !infoStart ? 
    
    ""
    
    :
    
    infoStart.map((anime) => (<> 
       <article key={anime?.mal_id}  className='bg-sky-600/50 flex-col max-w-xs mx-auto p-6 rounded-md my-3 hover:scale-[1.01] hover:bg-sky-600 hover:rotate-[-0.5deg]'>
      <div className='h-[320px] overflow-hidden'>
          <img src={anime?.images.jpg.large_image_url} alt="" className='rounded-md h-full block object-cover w-full'/>
      </div>
      <ul>
      {/* <li>Nombre: {user?.name.title}, {user?.name.first}, {user?.name.last}</li> */}
          <li className='text-2xl '>Nombre: {anime?.title}</li>
          <li>Episodios: {anime?.episodes}</li>
          <li>Puntuacion: {anime?.score}</li>
          <li>Duracion: {anime?.duration}</li>
          <li className='line-clamp-4'>{anime?.synopsis}</li>
      </ul>

  </article>


  </>
    ) )
  }
    </section>



        
      </main>
    </>
  )
}

export default App
