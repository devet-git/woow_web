import './Login.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
// import { Link } from 'react-router-dom'

export default function LoginPage() {
   return (
      <div className='login-page flex center'>
         <section className='left col flex center'>
            <main className='--card flex flex-col ver-center'>
               <h2>LOGIN</h2>
               <form className='--form flex flex-col ver-center' action=''>
                  <div className='--input-wrapper'>
                     <label htmlFor="username">Username</label>
                     <input type='text' id='username' autoFocus />
                  </div>
                  <div className='--input-wrapper'>
                     <label htmlFor="password">Password</label>
                     <input type='password' id='password' />
                  </div>
                  <div className='flex sp-between ver-center w-200'>
                     <button className='submit-btn'>Login</button>
                     <a className='forgot-pw' href='#!'>Forgot Password ?</a>
                  </div>
               </form>
               <hr />
               <footer>
                  <a href='#!' className='gg-login social-login' ><AiOutlineGoogle /> Continue with Google</a>
                  <a href='#!' className='fb-login social-login'> <GrFacebookOption /> Continue with Facebook</a>
                  <p>Don&apos;t have an account ? <a href='#!' style={{ textDecoration: 'underline' }}>Register</a></p>
               </footer>
            </main>
         </section>

         <section className='right col'>
            {/* <Link to='/'><Logo /></Link> */}
            <img className='logo' src={require('assets/images/logo.png')} />
            <img className='login-image' src={require('assets/images/login.jpg')} alt="loginImage" />
         </section>
      </div>
   )
}
