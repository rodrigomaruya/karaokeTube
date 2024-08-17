import { AppContext } from "./AppContext"
import { useState } from "react"
import { youTubeProps } from "../components/teste/array"

interface childrenProps{
  children: React.ReactNode
}

export default function Provider({children}:childrenProps) {

  const [searchVideo, setSearchVideo] = useState<youTubeProps[]>([])

  const value = {
    searchVideo, 
    setSearchVideo
  }

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}