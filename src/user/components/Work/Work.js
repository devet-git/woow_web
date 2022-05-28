import './Work.scss'
import { GoLocation } from 'react-icons/go'
import { useLayoutEffect, useState } from 'react'
import { useContext } from 'react'
import { WorkContext } from 'contexts/WorkContext'
import { Link } from 'react-router-dom'


const ViewedSticky = () => <div className='sticky'>Đã xem</div>

export default function Work({ work }) {
   let [isViewed, setIsViewed] = useState(false)
   const { setSelectingWorkId } = useContext(WorkContext)
   function Header() {
      return (
         <header className='flex ver-center sp-between'>
            <div className='user flex ver-center'>
               <img src={require('assets/images/work.png')} alt="avatar" className='avatar' />
               <span>{work.poster_name}</span>
            </div>
            <span className="locate"><GoLocation /> {work.location}</span>
         </header>
      )
   }
   function Content() {
      return (
         <div className="content">
            {isViewed && <ViewedSticky />}
            {work.name}
         </div>
      )
   }
   function Footer() {
      return (
         <footer className='flex ver-center sp-between' >
            <div className="salary">Tiền công: {work.salary}k</div>
            {/* <Tooltip hasArrow label={'2/' + quantity}>
               <div className="amount-progress border rad-5">
                  <div className="progress" style={{ width: (2 / quantity * 100) + '%' }}></div>
               </div>
            </Tooltip> */}
         </footer>
      )
   }
   const clickHandle = () => {
      setSelectingWorkId(work.id)
      setIsViewed(true)
   }
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   useLayoutEffect(() => {
      window.addEventListener('resize', () => {
         setWindowWidth(window.innerWidth)
      })
      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
   }, [])

   // TODO: main part
   return windowWidth <= 768 ? (
      <Link to={`/tim-viec/${work.id}`} className="work-wrapper" onClick={() => setSelectingWorkId(work.id)}>
         <Header />
         <Content />
         <Footer />
      </Link >
   ) : (
      <div className="work-wrapper" onClick={clickHandle}>
         <Header />
         <Content />
         <Footer />
      </div>
   )
}
