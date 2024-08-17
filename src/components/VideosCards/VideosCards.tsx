import './VideosCards.css'
import { useState } from 'react'
import ModalVideo from '../ModalVideo/ModalVideo'
interface VideosCardsProps{
  data:{
    id?: string | number
    titulo: string
    videoId: string

  }
}
interface VideoProps{
  videoId: string
  titulo: string
}
export default function VideosCards({data}:VideosCardsProps){
 
  const [open, setOpen] = useState(false)
  const [modalPlay, setModalPlay] = useState<VideoProps>({
    videoId: '',
    titulo: ''})
    
  const {  titulo, videoId } = data

  
  const handleOpen = () =>{
    setOpen(true)
    setModalPlay({videoId, titulo})
    
  }

  return(
    (open && <ModalVideo setOpen={()=>setOpen(false)} data={modalPlay}/>) || (
    <div className="videos-cards" onClick={handleOpen}>
      <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="image YouTube" className='videos-cards--image'/>
      <div className='videos-cards--title'>
        <h3 className='videos-cards-title'>{titulo}</h3>
      </div>
    </div>
    )
  )
}