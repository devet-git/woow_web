import './Header.scss'
import { Link } from 'react-router-dom'
import { GlobalState } from 'App'
import { useContext } from 'react'
import localData from 'user/utils/localData'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const logout = () => {
   localData.remove('user')
   localData.remove('tokens')
}
export default function Header() {
   let { isLogin, setIsLogin } = useContext(GlobalState)
   const AccountButton = () => {
      return (
         <Menu isLazy className='flex'>
            <MenuButton >
               {localData.get('user').username}
            </MenuButton>
            <MenuList>
               {/* MenuItems are not rendered unless Menu is open */}
               <Link to='tai-khoan'>
                  <MenuItem>
                     Tài khoản của tui
                  </MenuItem>
               </Link>
               <MenuItem onClick={() => {
                  logout()
                  setIsLogin(false)
               }}
               >
                  Đăng xuất
               </MenuItem>
            </MenuList>
         </Menu>
      )
   }

   return (
      <header className="app-header">
         <Link className='flex ver-center' to='/'>
            <div className='logo'>Woow</div>
         </Link>
         <nav className='flex ver-center'>
            <div className='nav-link-wrapper'>
               <Link to={isLogin ? '/' : 'tim-viec'} className='nav-link'>Tìm việc</Link>
               <Link to='dang-viec' className='nav-link'>Đăng việc</Link>
               {isLogin && <Link to='gioi-thieu' className='nav-link'>Giới thiệu</Link>}
            </div>
            <div className='flex ver-center'>
               {isLogin ? (<AccountButton />) : (
                  <Link to='dang-nhap' className='login-link flex ver-center sp-between'>Đăng nhập</Link>
               )}
            </div>
         </nav>
      </header >
   )
}
