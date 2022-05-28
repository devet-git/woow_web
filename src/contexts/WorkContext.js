import { createContext, useState } from 'react'


export const WorkContext = createContext()

export default function WorkProvider({ children }) {
   const [selectingWorkId, setSelectingWorkId] = useState(null)
   const [works, setWorks] = useState([])
   const [allWorks, setAllWorks] = useState([])

   const value = {
      selectingWorkId, setSelectingWorkId,
      works, setWorks,
      allWorks, setAllWorks
   }


   return (
      <WorkContext.Provider value={value}>
         {children}
      </WorkContext.Provider>
   )
}