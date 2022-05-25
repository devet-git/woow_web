import './Login.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
// import { Link } from 'react-router-dom'

export default function LoginPage() {
   return (
      <div className='login-page flex center'>
         <section className='left col flex center'>
            <main className='--card flex flex-col ver-center'>
               <h2>ĐĂNG NHẬP</h2>
               <form className='--form flex flex-col ver-center' action=''>
                  <div className='--input-wrapper'>
                     {/* <label htmlFor="username">Username</label> */}
                     <input type='text' id='username' placeholder='Tên đăng nhập' autoFocus />
                  </div>
                  <div className='--input-wrapper'>
                     {/* <label htmlFor="password">Mật khẩu</label> */}
                     <input type='password' id='password' placeholder='Mật khẩu' />
                  </div>
                  <div className='flex sp-between ver-center w-200'>
                     <button
                        className='submit-btn'
                        onClick={(e) => {
                           e.preventDefault()
                        }}
                     >
                        Đăng nhập
                     </button>
                     <a className='forgot-pw' href='#!'>Quên mật khẩu ?</a>
                  </div>
               </form>
               <hr />
               <footer>
                  <a href='#!' className='gg-login social-login' ><AiOutlineGoogle />Đăng nhập với Google</a>
                  <a href='#!' className='fb-login social-login'> <GrFacebookOption />Đăng nhập với Facebook</a>
                  <p>Bạn chưa có tài khoản? <a href='#!' style={{ textDecoration: 'underline' }}>Đăng ký ngay</a></p>
               </footer>
            </main>
         </section>

         <section className='right col'>
            <img className='login-image' src={require('assets/images/login.jpg')} alt="loginImage" />
         </section>
      </div>
   )
}
