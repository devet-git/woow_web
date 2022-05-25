import './Login.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
// import { GrFacebookOption } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import authApi from 'api/authApi'
import localData from 'user/utils/localData'
import { useEffect } from 'react'

export default function LoginPage() {
   const formSubmit = async (e) => {
      e.preventDefault()
      let { username, pw } = e.target.elements
      let signInData = { username: username.value, pw: pw.value }
      await authApi.signIn(signInData, res => {
         res.success && localData.set('accessToken', res.data.accessToken)

      })
   }
   useEffect(() => {
      console.log(localData.get('accessToken'))

   })
   return (
      <div className='login-page flex center'>
         <section className='left col flex center'>
            <main className='--card flex flex-col ver-center'>
               <h2>ĐĂNG NHẬP</h2>
               <form className='--form flex flex-col ver-center' onSubmit={formSubmit}>
                  <div className='--input-wrapper'>
                     <input type='text' name='username' id='username' placeholder='Tên người dùng' autoFocus />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='password' name='pw' id='password' placeholder='Mật khẩu' />
                  </div>
                  <div className='flex sp-between ver-center w-200'>
                     <button type='submit' className='submit-btn'>Đăng nhập </button>
                     <a className='forgot-pw' href='#!'>Quên mật khẩu ?</a>
                  </div>
               </form>
               <hr />
               <footer>
                  <a href='#!' className='gg-login social-login' ><AiOutlineGoogle />Đăng nhập với Google</a>
                  {/* <a href='#!' className='fb-login social-login'> <GrFacebookOption />Đăng nhập với Facebook</a> */}
                  <p>Bạn chưa có tài khoản? <Link to='/dang-ky' style={{ textDecoration: 'underline' }}>Đăng ký ngay</Link></p>
               </footer>
            </main>
         </section>

         <section className='right col'>
            <img className='login-image' src={require('assets/images/login.jpg')} alt="loginImage" />
         </section>
      </div>
   )
}
