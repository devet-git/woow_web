import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import localData from 'user/utils/localData'
import { Menu, MenuButton, MenuItem, MenuList, Tooltip } from '@chakra-ui/react'
import { AuthContext } from 'contexts/AuthContext'
import authService from 'services/authService'
export default function Header() {
   function AccountButton() {
      return (
         <Menu isLazy>
            <Tooltip hasArrow bg='#237060' label={localData.get('user').real_name}>
               <MenuButton
                  style={{
                     width: '40px', height: '40px',
                     borderRadius: '50%',
                     overflow: 'hidden',
                     boxShadow: '0 0 3px 2px #5e9a8e'
                  }}>
                  <img src={require('assets/images/join.jpg')} alt="avt" style={{ width: '100%', transform: 'scale(1.5)' }} />
               </MenuButton>
            </Tooltip>

            <MenuList style={{ backgroundColor: '#afdad1' }}>
               <Link to='tai-khoan'>
                  <MenuItem style={{ backgroundColor: 'transparent' }}>
                     Quản lý tài khoản
                  </MenuItem>
               </Link>
               <MenuItem
                  style={{ backgroundColor: 'transparent' }}
                  onClick={() => {
                     authService.signout()
                     setIsSignout(true)
                  }}
               >Đăng xuất</MenuItem>
            </MenuList>
         </Menu >
      )
   }
   const { isSignin, setIsSignout } = useContext(AuthContext)
   let currentRoute = useLocation().pathname
   return (
      <header className="app-header">
         <Link className='flex ver-center' to='/'>
            <div className='logo'>Woow</div>
         </Link>
         <nav className='flex ver-center'>
            <div className='nav-link-wrapper'>
               <Link to={isSignin ? '/' : 'tim-viec'} className={((currentRoute === '/' || currentRoute === '/tim-viec') && 'active') + ' nav-link'}>Tìm việc</Link>
               <Link to='dang-viec' className={(currentRoute === '/dang-viec' && 'active') + ' nav-link'}>Đăng việc</Link>
               {isSignin && <Link to='gioi-thieu' className='nav-link'>Giới thiệu</Link>}
            </div>
            <div className='flex ver-center'>
               {isSignin ? (<AccountButton />) : (
                  <Link to='dang-nhap' className='login-link flex ver-center sp-between'>Đăng nhập</Link>
               )}
            </div>
         </nav>
      </header >
   )
}
