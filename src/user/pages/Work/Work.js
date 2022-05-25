import './Work.scss'
import Work from 'user/components/Work/Work'
import { useEffect, useState } from 'react'
import { GoRequestChanges } from 'react-icons/go'
import { AiOutlinePhone, AiOutlineDollarCircle } from 'react-icons/ai'
import { BiTimeFive, BiMapPin, BiShareAlt, BiLink } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsCalendar2Date } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IconButton, Tooltip } from '@chakra-ui/react'
import Loading from 'user/components/Loading/Loading'
import localData from 'user/utils/localData'
// import fetchApi from 'user/utils/fetchData'
import axios from 'axios'


export default function WorkPage() {
   const [works, setWorks] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [selectedWorkID, setSelectedWorkID] = useState(1)
   const [workDetails, setWorkDetails] = useState({})

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
                  <Link to='#!' className='apply-link'>Apply</Link>
               </div>
            </footer>
         </section>
      )
   }


   useEffect(() => {
      // if (localData.get('works')) {
      //    // setWorks(localData.get('works'))
      //    localData.remove('works')
      // } else {
      // setIsLoading(true)
      console.log('duma')
      axios.get('http://localhost:8000/api/v1/works')
         .then(response => {
            console.log(response)
            setWorks(response.data.data)
            // setIsLoading(false)
            // localData.set('works', response.data)
         })
         .catch((error) => {
            console.log(error)
         })
      // }
      // fetchApi('/works', (response) => {
      //    setWorks(response.data)
      //    setIsLoading(false)
      //    localData.set('works', response.data)
      // })
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