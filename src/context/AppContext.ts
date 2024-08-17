import React, { createContext } from "react";
import { youTubeProps } from "../components/teste/array";


interface ContextProps {
  searchVideo:youTubeProps[]
  setSearchVideo: React.Dispatch<React.SetStateAction<youTubeProps[]>>
}

export const AppContext = createContext<ContextProps | undefined>(undefined)