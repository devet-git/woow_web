import 'assets/scss/classes.scss'
import 'assets/scss/fonts.scss'
import 'assets/scss/setting.scss'

import LoginPage from 'user/pages/Login/Login'
import RegisterPage from 'user/pages/Register/Register'
import HomePage from 'user/pages/Home/Home'
import WorkPage from 'user/pages/Work/Work'
import WorkPostingPage from 'user/pages/Work/Post/WorkPost'
import AccountManagementPage from 'user/pages/AccountManagement/AccountManagement'
import NotFoundPage from 'user/pages/NotFound/NotFound'
import UserLayout from 'user/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
// import authService from 'api/authService'
import localData from 'user/utils/localData'


export const GlobalState = createContext()
export default function App() {
   const [isLogin, setIsLogin] = useState(false)

   useEffect(() => {
      localData.get('user') ? setIsLogin(true) : setIsLogin(false)
   }, [setIsLogin])

   return (
      <GlobalState.Provider value={{ isLogin, setIsLogin }} >
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<UserLayout />} >
               <Route path='/tim-viec' element={<WorkPage />} />
               <Route path='/dang-viec' element={<WorkPostingPage />} />
               {
                  isLogin ?
                     (<Route path='/tai-khoan' element={<AccountManagementPage />} />)
                     :
                     (
                        <>
                           <Route path='/dang-ky' element={<RegisterPage />} />
                           <Route path='/dang-nhap' element={<LoginPage />} />
                        </>
                     )
               }
               <Route path='*' element={<NotFoundPage />} />
            </Route>
         </Routes>
      </ GlobalState.Provider>
   )
}


