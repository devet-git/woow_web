import './Home.scss'
// import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const Header = () => (
   <header className='flex sp-between'>
      <div className='logo'>
         Woow
      </div>
      <nav className='nav ver-center flex sp-evenly'>
         {/* <Link to='/login'>Login</Link> */}
      </nav>
   </header>
)

export default function HomePage() {
   // const windowWidth = window.innerWidth
   let flexRef = useRef()
   const [screenWidth, setScreenWidth] = useState()
   const [scrollTop, setScrollTop] = useState()

   useEffect(() => {
      setScreenWidth(flexRef.current.scrollWidth)

      window.addEventListener('scroll', () => {
         setScrollTop(window.pageYOffset)
      })
      return () => window.removeEventListener('scroll', () => {
         setScreenWidth(window.pageYOffset)
      })
   }, [screenWidth])

   // TODO: RETURN
   return (
      <div className='home-page' style={{ height: screenWidth + 'px' }}>
         <div className="sticky-wrapper">
            <Header />
            {/* <Link to='/works' className='btn-link flex center'>
            <img className='cloud-image' src={require('assets/images/cloud.png')} alt="" />
            <span className='btn-name' >Find work now</span>
            </Link> */}
            <a to='/works' className='btn-link flex center'>
               <img className='cloud-image' src={require('assets/images/cloud.png')} alt="" />
               <span className='btn-name' >Find work now</span>
            </a>
            <img className='work-image' src={require('assets/images/work.png')} alt="" />

            {/* MORNING SCREEN */}
            <div
               className="screens-wrapper flex"
               style={{ transform: `translateX(-${scrollTop}px)` }} ref={flexRef}
            >
               <section className="screen screen-morning flex flex-col hor-center">
                  <img className='sun-image' src={require('assets/images/sun.png')} alt=""
                     style={{
                        top: `${50 + scrollTop / 4}px`
                     }}
                  />
                  <div className='flex center'>
                     <h1 style={{ textShadow: '-10px 10px 2px pink' }}>Good morning</h1>
                  </div>
               </section>

               {/* NIGHT SCREEN */}
               <section
                  className="screen screen-night flex center"
                  style={{
                     textAlign: 'center', padding: '0 20px'
                  }}
               >
                  <div className="card first-card">
                     <h2 style={{ color: 'green' }}>Rich Works</h2>
                     <p>Abundant and Suitable for you</p>
                     <img src={require('assets/images/work.png')} alt="" />
                  </div>
                  <div className="card">
                     <img src={require('assets/images/work.png')} alt="" />
                     <h1>Easily and Quickly</h1>
                  </div>
                  <div className="card">
                     <img src={require('assets/images/work.png')} alt="" />
                     <h1>Join With Us</h1>
                     {/* <Link className='join-btn' to='login'>Join now</Link> */}
                     <a className='join-btn' to='login'>Join now</a>
                  </div>
               </section>
               <section className='flex ver-center hor-center' style={{
                  flex: '0 0 100%',
                  position: 'relative'
               }}>
                  <img src={require('assets/images/moon.png')} alt='moon' style={{
                     position: 'absolute',
                     bottom: `${scrollTop / 5.5}px`,
                     left: `${scrollTop / 25}px`,
                     width: '100px'
                  }} />
                  <div className='flex ver-center gap-10' style={{
                     backgroundColor: 'white',
                     padding: '30px',
                     borderRadius: '10px'
                  }}
                  >
                     <h1 style={{
                        width: 'min-content',
                        lineHeight: '1.5em'
                     }}
                     >
                        Show your CV for employer</h1>
                     <img src={require('assets/images/cv.png')} alt='AHIHI'
                        style={{
                           width: '300px',
                           borderRadius: '5px',
                           boxShadow: '2px 2px 5px 1px gray'
                        }}
                     />
                  </div>
               </section>
            </div>
         </div>
      </div>
   )
}