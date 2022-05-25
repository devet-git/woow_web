import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
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
               {/* <Link to='/' className='signup-link'>Sign up</Link> */}
               <Link to='dang-nhap' className='login-link flex ver-center sp-between'>Đăng nhập</Link>
            </div>
         </nav>
      </header>
   )
}
