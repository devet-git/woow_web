// Icons
import { GoRequestChanges } from 'react-icons/go'
import { AiOutlinePhone, AiOutlineDollarCircle } from 'react-icons/ai'
import { BiTimeFive, BiMapPin, BiShareAlt, BiLink } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsCalendar2Date } from 'react-icons/bs'
// Chakra UI
import { IconButton, Tooltip } from '@chakra-ui/react'
// React
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// Custom
import Loading from 'user/components/Loading/Loading'
import workService from 'api/workService'
import './Work.scss'
import Work from 'user/components/Work/Work'
import { GlobalState } from 'App'

export default function WorkPage() {
   const [works, setWorks] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [selectedWorkID, setSelectedWorkID] = useState(1)
   const [workDetails, setWorkDetails] = useState({})
   // const [currentUser, setCurrentUser] = useState({})
   // const redirector = useNavigate()

   // let { currentUser } = useContext(GlobalState)

   const WorkDetails = () => {
      return (
         <section className="work-details-wrapper">
            <header>
               <h1>{workDetails.title}</h1>
            </header>
            <div className='body'>
               <BsCalendar2Date /> <span>{workDetails.day}</span>
               <BiTimeFive /> <span>{workDetails.time}</span>
               <BiMapPin /> <span>{workDetails.locate}</span>
               <AiOutlinePhone /> <span>0123456789</span>
               <AiOutlineDollarCircle /> <span>25k/h</span>
               <GoRequestChanges /> <span>Cao tren 1m7</span>
            </div>
            <footer className='flex sp-around ver-center'>
               <div className='flex sp-around w-170'>
                  <Tooltip label='Copy Link' hasArrow placement='top'>
                     <IconButton className='favorite-btn border rad-circle' aria-label='Search database' icon={<BiLink />} />
                  </Tooltip>
                  <Tooltip label='Share' hasArrow placement='top'>
                     <IconButton className='favorite-btn border rad-circle' aria-label='Search database' icon={<BiShareAlt />} />
                  </Tooltip>
                  <Tooltip label='Add To Favorite' hasArrow placement='top'>
                     <IconButton className='favorite-btn border rad-circle' aria-label='Search database' icon={<MdOutlineFavoriteBorder />} />
                  </Tooltip>
               </div>
               <div className='rotate-btn'>
                  <Link to='#!' className='apply-link'>Nhận việc này</Link>
               </div>
            </footer>
         </section>
      )
   }

   useEffect(() => {
      setIsLoading(true)
      workService.getAll(res => {
         setWorks(res.data)
         setIsLoading(false)
      })
   }, [])

   useEffect(() => {
      setWorkDetails(() => works.find(elm => elm.id === selectedWorkID))
   }, [works, selectedWorkID])

   // useEffect(() => {
   //    window.onbeforeunload = () => {
   //       localData.remove()
   //    }
   // })

   return (
      <main className={`work-screen flex ${isLoading && 'center'}`}>
         {
            isLoading ? <Loading /> : (
               <>
                  <section className="works-wrapper flex flex-col center gap-15">
                     {
                        works && works.map((elm) => (
                           <Work
                              key={elm.id}
                              id={elm.id}
                              username='hihi' content={elm.title} locate={'none'}
                              setSelectedWorkID={setSelectedWorkID}
                           />
                        ))
                     }
                  </section>
                  {workDetails && <WorkDetails />}
               </>
            )
         }
      </main>
   )
}
