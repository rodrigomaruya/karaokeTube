import  { useState } from 'react'
import YouTubeEmbed from '../../components/karokeComponents'
import './maispedidas.css'
import  {youTube}  from '../../components/teste/array'
import Input from '../../components/Input'
import Footer from '../../components/Footer'

export default function MaisPedidas(){
  type itemProps={
    id: string | number
    titulo: string
    videoId: string
  }

  const [pesquisar,setPesquisar]=useState('')
  
  const filteredVideos:itemProps[] = youTube.filter((item) => item.titulo.toLowerCase().startsWith(pesquisar.toLowerCase()));

  return (
    <div className='container'>
      <div className='content-input'>

        <Input onChange={(e) => setPesquisar(e.target.value)} value={pesquisar}/>
      </div>

      <main className='main main_content'>
        {filteredVideos.map(item => (
          <div className='componentsYouTube' key={item.id}>
            <YouTubeEmbed videoId={item.videoId} titulo={item.titulo}/>
          </div>
        ))}
    
   
      </main>
      <Footer/>
    </div>
  )
}