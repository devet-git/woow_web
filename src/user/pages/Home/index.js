// import { Link } from 'react-router-dom'

function Header() {
   return (
      <header className='flex sp-between'>
         <div className='logo'>
            Woow
         </div>
         <nav className='nav ver-center flex sp-evenly'>
            {/* <Link to='/login'>Login</Link> */}
         </nav>
      </header>
   )
}
export default function HomePage() {
   return (
      <>
         <Header />
         <h1>HEHE</h1>
      </>
   )
}