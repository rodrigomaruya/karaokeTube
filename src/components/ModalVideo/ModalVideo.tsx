import React from 'react';
import './ModalVideo.css'
import { IoMdClose } from "react-icons/io";

type ModalVideoProps= {
  data:{
    videoId: string
    titulo: string
  }
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  
}

  function ModalVideo({ setOpen,data }:ModalVideoProps){
  console.log(data)
  return (
    <div className="modal-video">
      <button className="modal-video--close" onClick={() => setOpen(false)}>
        <IoMdClose />

      </button>

      <iframe className="modal-video--iframe"
        width="100%" 
        height="100%"        
        src={`https://www.youtube.com/embed/${data.videoId}`}    
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen />

        <div className='modal-video--title'>
          <h3>{data.titulo}</h3>
        </div>
    </div>
  )
}     

export default ModalVideo