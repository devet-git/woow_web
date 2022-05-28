import './Work.scss'
// import { Link } from 'react-router-dom'
import { Tooltip } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'
import { useState } from 'react'
// import { useState } from 'react'


// const Sticky = () => <div className='sticky'>Expires in 5 minutes</div>
const ViewedSticky = () => <div className='sticky' style={{ backgroundColor: '#b9ff61' }}>Đã xem</div>

export default function Work({ username, id, content, quantity, salary, locate, setSelectedWorkID }) {
   let [isViewed, setIsViewed] = useState(false)
   const Header = () => {
      return (
         <header className='flex ver-center sp-between'>
            <div className='user flex ver-center'>
               <img src={require('assets/images/work.png')} alt="avatar" className='avatar' />
               <span>{username}</span>
            </div>
            <span className="locate"><GoLocation /> {locate}</span>
         </header>
      )
   }
   const Content = () => {
      return (
         <div className="content">
            {isViewed && <ViewedSticky />}
            {content}
         </div>
      )
   }
   const Footer = () => {
      return (
         <footer className='flex ver-center sp-between' >
            <div className="salary">{salary}</div>
            <Tooltip hasArrow label={'2/' + quantity}>
               <div className="amount-progress border rad-5">
                  <div className="progress" style={{ width: (2 / quantity * 100) + '%' }}></div>
               </div>
            </Tooltip>
         </footer>
      )
   }

   // TODO: main part
   return (
      <div className="work-wrapper" onClick={() => { setSelectedWorkID(id); setIsViewed(true) }}>
         {/* <div className="arrow" style={{ display: isClicked && 'block' }}></div> */}
         <Header />
         <Content />
         <Footer />
      </div >
   )
}
