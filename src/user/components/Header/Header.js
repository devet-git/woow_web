import './Header.scss'
import { Link } from 'react-router-dom'
import { GlobalState } from 'App'
import { useContext } from 'react'
import localData from 'user/utils/localData'

const logout = () => {
   localData.remove('user')
   localData.remove('tokens')
}
export default function Header() {
   let { isLogin, setIsLogin } = useContext(GlobalState)
   return (
      <header className="app-header">
         <Link className='flex ver-center' to='/'>
            <div className='logo'> Woow </div>
         </Link>
         <nav className='flex ver-center'>
            <div className='nav-link-wrapper'>
               <Link to='tim-viec' className='nav-link'>Tìm việc</Link>
               <Link to='dang-viec' className='nav-link'>Đăng việc</Link>
            </div>
            <div className='flex ver-center'>
               {isLogin ?
                  (
                     <>
                        <Link to='/tai-khoan'>{localData.get('user').username}</Link>
                        <button onClick={() => {
                           logout()
                           setIsLogin(false)
                        }}>Đăng xuất</button>
                     </>
                  ) :
                  (
                     <Link to='dang-nhap' className='login-link flex ver-center sp-between'>Đăng nhập</Link>
                  )
               }
            </div>
         </nav>
      </header>
   )
}
