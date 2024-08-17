import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import './search.css'
import { FaSearch } from "react-icons/fa";
import { youTube, youTubeProps } from '../teste/array';


export default function Search() {
  const [search, setSearch] = useState('')
  const context = useContext(AppContext)

  if (!context){
    throw new Error('AppContext must be used within an AppProvider')
  }
  const { setSearchVideo} = context

  useEffect(()=>{
    if(search === ''){
      setSearchVideo(youTube)
    }
 
  },[search, setSearchVideo])  
  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const filtrar:Array<youTubeProps> = youTube.filter((item)=>item.titulo.toLowerCase().startsWith(search.toLowerCase()))
    setSearchVideo(filtrar)
    console.log(filtrar)
  }


  return (      
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="search"
        placeholder="Search videos"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  )
}