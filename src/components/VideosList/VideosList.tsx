import { useContext, useEffect } from 'react'
import VideosCards from '../VideosCards/VideosCards'
import './VideosList.css'
import { youTube } from '../teste/array'
import { AppContext } from '../../context/AppContext'
import VideosNotFound from '../VideosNotFound/VideosNotFound'
export default function VideosList() {

  
  const context = useContext(AppContext)
  
  if (!context) {
    throw new Error('AppContext must be used within an AppProvider')  
  }
  const { searchVideo,setSearchVideo } = context  
  
  useEffect(()=>{
    setSearchVideo(youTube)
  },[setSearchVideo])

  if(searchVideo.length === 0) return <VideosNotFound/>
  return (
    <div className="videosList">
      
      {searchVideo.map((item) => (
        <VideosCards data={item} key={item.id}/>
      ))}
      
    </div>
  )

}