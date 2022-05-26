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

export const GlobalState = createContext()
function App() {
   const [currentUser, setCurrentUser] = useState({})
   // useEffect(() => {
   //    authService.getCurrentUser((res) => {
   //       res.success && setCurrentUser(res.data)
   //    })
   // }, [])

   return (
      <GlobalState.Provider value={{ currentUser, setCurrentUser }} >
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<UserLayout />} >
               <Route path='/tim-viec' element={<WorkPage />} />
               <Route path='/dang-viec' element={<WorkPostingPage />} />
               <Route path='/dang-ky' element={<RegisterPage />} />
               <Route path='/dang-nhap' element={<LoginPage />} />
               <Route path='/tai-khoan' element={<AccountManagementPage />} />
               <Route path='*' element={<NotFoundPage />} />
            </Route>
         </Routes>
      </ GlobalState.Provider>
   )
}

export default App
