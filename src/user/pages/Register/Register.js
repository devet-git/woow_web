import './Register.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
// import { GrFacebookOption } from 'react-icons/gr'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import authService from 'services/authService'
import { useState } from 'react'

export default function RegisterPage() {
   let redirector = useNavigate()
   let [willRedirect, setWillRedirect] = useState(false)
   const formSubmit = (e) => {
      e.preventDefault()
      const { username, pw, repeatPw } = e.target.elements
      // let signUpData = { username: username.value, pw: pw.value, repeatPw: repeatPw.value }
      authService.signUp(username.value, pw.value, repeatPw.value, res => {
         res.success && redirector('/dang-nhap')
      })
   }

   return willRedirect ? <Navigate to='/dang-nhap' /> : (
      <div className='login-page flex center'>
         <section className='left col flex center'>
            <main className='--card flex flex-col ver-center'>
               <h2>ĐĂNG KÝ</h2>
               <form className='--form flex flex-col ver-center' onSubmit={formSubmit}>
                  <div className='--input-wrapper'>
                     <input type='text' id='username' placeholder='Tên người dùng' autoFocus />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='password' name='pw' id='password' placeholder='Mật khẩu' />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='password' name='repeatPw' id='repeatPassword' placeholder='Nhập lại Mật khẩu' />
                  </div>
                  <div className='flex sp-between ver-center w-200'>
                     <button
                        type='submit'
                        className='submit-btn'
                     >
                        Đăng ký
                     </button>
                  </div>
               </form>
               <hr />
               <footer>
                  <a href='#!' className='gg-login social-login' ><AiOutlineGoogle />Tiếp tục với Google</a>
                  {/* <a href='#!' className='fb-login social-login'> <GrFacebookOption />Đăng nhập với Facebook</a> */}
                  <p>Bạn đã có tài khoản? <Link to='/dang-nhap' style={{ textDecoration: 'underline' }}>Đăng nhập</Link></p>
               </footer>
            </main>
         </section>
         <section className='right col'>
            <img className='login-image' src={require('assets/images/login.jpg')} alt="loginImage" />
         </section>
      </div>
   )
}
