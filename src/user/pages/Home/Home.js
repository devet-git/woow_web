import './Home.scss'
import localData from 'user/utils/localData'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from 'contexts/AuthContext'

const Header = () => {
   let { isSignin } = useContext(AuthContext)
   return (
      <header className='flex sp-between' >
         <div className='logo'>Woow</div>
         <nav className='nav ver-center flex sp-evenly'>
            {
               isSignin ? <Link to='/tai-khoan'>{localData.get('user').real_name}</Link> : <Link to='/dang-nhap'>Đăng nhập</Link>
            }
         </nav>
      </header >
   )
}

export default function HomePage() {
   const { isSignin } = useContext(AuthContext)
   const flexRef = useRef()
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
            <Link to='/tim-viec' className='btn-link flex center'>
               <img className='cloud-image' src={require('assets/images/cloud.png')} alt="cloud" />
               <span className='btn-name' >Tìm việc ngay</span>
            </Link>
            <img className='work-image' src={require('assets/images/work.png')} alt="work" />

            {/* MORNING SCREEN */}
            <div className="screens-wrapper flex"
               style={{ transform: `translateX(-${scrollTop}px)` }} ref={flexRef}
            >
               <section className="screen screen-morning flex flex-col hor-center">
                  <img className='sun-image' src={require('assets/images/sun.png')} alt=""
                     style={{
                        top: `${50 + scrollTop / 4}px`
                     }}
                  />
                  <div className='flex center'>
                     <h1 style={{ textShadow: '-10px 10px 2px pink', textAlign: 'center' }}>
                        {isSignin ?
                           localData.get('user').real_name + ', hãy bắt đầu công việc ngày hôm nay thôi nào'
                           : 'Chào mừng bạn đã đến với website của tôi'
                        }
                     </h1>
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
                     <h2 style={{ color: 'green' }}>Phong phú</h2>
                     <p>Có thể sẽ rất phù hợp với bạn</p>
                     <img src={require('assets/images/more-work.jpg')} alt="" />
                  </div>
                  <div className="card">
                     <img src={require('assets/images/fast-convenient.jpg')} alt="" />
                     <h1>Nhanh chóng tiện lợi</h1>
                  </div>
                  <div className="card">
                     <img src={require('assets/images/join.jpg')} alt="" />
                     <h1>Tham gia cộng đồng nào</h1>
                     <Link className='join-btn' to='/dang-nhap'>Tham gia</Link>
                  </div>
               </section>
               <section className='flex ver-center hor-center' style={{
                  flex: '0 0 100%',
                  position: 'relative'
               }}>
                  <img className='moon-image' src={require('assets/images/moon.png')} alt='moon' style={{
                     position: 'absolute',
                     bottom: `${scrollTop / 5.5}px`,
                     left: `${scrollTop / 25}px`,
                     width: '80px'
                  }} />
                  <div className='flex ver-center gap-10 poster' style={{
                     backgroundColor: 'white',
                     padding: '30px',
                     borderRadius: '10px'
                  }}
                  >
                     <h1 style={{
                        width: 'min-content', lineHeight: '1.5em', textAlign: 'center',
                        paddingRight: '7px'
                     }}>Dễ dàng tuyển dụng nhân sự</h1>
                     <img src={require('assets/images/recruit.jpg')} alt='AHIHI'
                        style={{
                           width: '300px', borderRadius: '5px',
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
