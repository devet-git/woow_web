// Icons
import { GoRequestChanges } from 'react-icons/go'
import { AiOutlinePhone, AiOutlineDollarCircle } from 'react-icons/ai'
import { BiTimeFive, BiMapPin, BiShareAlt, BiLink } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsCalendar2Date } from 'react-icons/bs'
// Chakra UI
import { IconButton, Tooltip } from '@chakra-ui/react'
// React
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Custom
import Loading from 'user/components/Loading/Loading'
import workService from 'services/workService'
import './Work.scss'
import Work from 'user/components/Work/Work'

export default function WorkPage() {
   const [works, setWorks] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [selectedWorkID, setSelectedWorkID] = useState(1)
   const [workDetails, setWorkDetails] = useState({})


   const WorkDetails = () => {
      return (
         <section className="work-details-wrapper">
            <header>
               <h1>{workDetails.name}</h1>
            </header>
            <div className='body'>
               <BsCalendar2Date /> <span>{workDetails.date}</span>
               {workDetails.time && <><BiTimeFive /><span>{workDetails.time}</span></>}
               <BiMapPin /> <span>{workDetails.location}</span>
               <AiOutlinePhone /> <span>0123456789</span>
               <AiOutlineDollarCircle /> <span>{workDetails.salary}</span>
               <GoRequestChanges /> <span>{workDetails.note}</span>
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
      // console.log(works)
      return
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
         {isLoading ? <Loading />
            : (
               <>
                  <section className="works-wrapper flex flex-col center gap-15">
                     {
                        works && works.map((work) => (
                           <Work
                              key={work.id}
                              id={work.id}
                              username='hihi' content={work.name} locate={work.location}
                              quantity={work.quantity}
                              salary={work.salary}
                              setSelectedWorkID={setSelectedWorkID}
                           />
                        ))
                     }
                  </section>
                  {workDetails ? <WorkDetails /> : <h1>DAY LA QUANG CAO</h1>}
               </>
            )
         }
      </main>
   )
}
