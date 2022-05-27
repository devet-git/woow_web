import Header from 'user/components/Header/Header'
import { Outlet } from 'react-router-dom'
import './Layout.scss'


export default function UserLayout() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}
