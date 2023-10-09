import {createContext,Dispatch, SetStateAction } from "react"

export interface ContextState {
    searchText: string;
    setSearchText: Dispatch<SetStateAction<string>>;
  }
  
export const searchContext=createContext<ContextState | null>(null)