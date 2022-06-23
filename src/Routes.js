import { Route, Routes } from 'react-router-dom'
import UserLayout from 'user/layout/Layout'
import AccManagerPage from 'user/pages/AccManager/AccManager'
import HomePage from 'user/pages/Home/Home'
import LoginPage from 'user/pages/Login/Login'
import NotFoundPage from 'user/pages/NotFound/NotFound'
import RegisterPage from 'user/pages/Register/Register'
import WorkPostPage from 'user/pages/Work/Post/WorkPost'
import WorkPage from 'user/pages/Work/Work'
import WorkDetailsPage from 'user/pages/Work/Details/WorkDetails'
import { useContext } from 'react'
import { AuthContext } from 'contexts/AuthContext'
import { WorkContext } from 'contexts/WorkContext'

export default function WebRoutes() {
   const { isSignin } = useContext(AuthContext)
   const { selectingWorkId } = useContext(WorkContext)
   return (
      <Routes>
         {
            isSignin ? (<Route path={'/gioi-thieu'} element={<HomePage />} />) : (<Route path={'/'} element={<HomePage />} />)
         }
         <Route element={<UserLayout />} >
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/dang-viec' element={<WorkPostPage />} />
            {selectingWorkId && <Route path='/tim-viec/:workId' element={<WorkDetailsPage />} />}
            {isSignin ?
               (
                  <>
                     <Route path='/' element={<WorkPage />} />
                     <Route path={'/tim-viec'} element={<WorkPage />} />
                     <Route path='/tai-khoan' element={<AccManagerPage />} />
                  </>
               ) :
               (
                  <>
                     <Route path={'/tim-viec'} element={<WorkPage />} />
                     <Route path='/dang-nhap' element={<LoginPage />} />
                     <Route path='/dang-ky' element={<RegisterPage />} />
                  </>
               )
            }
         </Route>
      </Routes>
   )
}