import { createContext, useState } from 'react'


export const AccManagerContext = createContext()

export default function AccManagerProvider({ children }) {
   const [watchingTab, setWatchingTab] = useState(0)

   const value = {
      watchingTab, setWatchingTab
   }
   return (
      <AccManagerContext.Provider value={value}>
         {children}
      </AccManagerContext.Provider>
   )
}