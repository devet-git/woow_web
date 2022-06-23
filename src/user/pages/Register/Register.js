import './Register.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
// import { GrFacebookOption } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import authService from 'services/authService'
import { useEffect, useState } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

export default function RegisterPage() {
   let redirector = useNavigate()
   const [isSuccess, setIsSuccess] = useState(0)
   const formSubmit = (e) => {
      e.preventDefault()
      const { username, realName, phoneNum, pw, repeatPw } = e.target.elements
      // let signUpData = { username: username.value, pw: pw.value, repeatPw: repeatPw.value }
      authService.signUp(username.value, realName.value, phoneNum.value, pw.value, repeatPw.value, res => {
         console.log(res)
         if (res.success) {
            setIsSuccess(1)
            setTimeout(() => {
               redirector('/dang-nhap')
            }, 2000)
         } else {
            setIsSuccess(-1)
         }
      })
   }
   useEffect(() => {
      const time = setTimeout(() => {
         setIsSuccess(0)
      }, 2000)
      return () => clearTimeout(time)
   }, [isSuccess])
   return (
      <div className='register-page flex center'>
         {isSuccess === 1 && (
            <Alert status='success' style={{ position: 'fixed', top: '0px', zIndex: '100' }}>
               <AlertIcon />
               Tạo tài khoản thành công
            </Alert>
         )}
         {isSuccess === -1 && (
            <Alert status='error' style={{ position: 'fixed', top: '0px', zIndex: '100' }}>
               <AlertIcon />
               Vui lòng nhập đầy đủ và chính xác thông tin
            </Alert>
         )}
         <section className='left col flex center'>

            <main className='--card flex flex-col ver-center'>
               <h2>ĐĂNG KÝ</h2>
               <form className='--form flex flex-col ver-center' onSubmit={formSubmit}>
                  <div className='--input-wrapper'>
                     <input type='text' name='username' placeholder='Username' autoFocus />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='text' name='realName' placeholder='Tên thật của bạn' />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='text' name='phoneNum' placeholder='Số điện thoại' />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='password' name='pw' placeholder='Mật khẩu' />
                  </div>
                  <div className='--input-wrapper'>
                     <input type='password' name='repeatPw' placeholder='Nhập lại Mật khẩu' />
                  </div>
                  <div className='button-submit'>
                     <button type='submit' className='submit-btn' >Đăng ký</button>
                  </div>
               </form>
               <hr />
               <footer className='flex flex-col center'>
                  {/* <a href='#!' className='gg-login social-login' ><AiOutlineGoogle />Tiếp tục với Google</a> */}
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
