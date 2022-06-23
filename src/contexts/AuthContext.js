import { createContext, useEffect, useState } from 'react'
import localData from 'user/utils/localData'


export const AuthContext = createContext()

export default function AuthProvider({ children }) {
   const [isSignin, setIsSignin] = useState(false)
   const [isSignout, setIsSignout] = useState(false)
   const [prevLocation, setPrevLocation] = useState(null)

   useEffect(() => {
      localData.get('accessToken') ? setIsSignin(true) : setIsSignin(false)
   }, [setIsSignin])

   const value = {
      isSignout, setIsSignout,
      isSignin, setIsSignin,
      prevLocation, setPrevLocation
   }


   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}