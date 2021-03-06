// Icons
import { GoRequestChanges } from 'react-icons/go'
import { AiOutlinePhone, AiOutlineDollarCircle } from 'react-icons/ai'
import { BiTimeFive, BiMapPin } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'
// Chakra UI
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Input } from '@chakra-ui/react'
// React
import { memo, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//
import './Work.scss'
import Loading from 'user/components/Loading/Loading'
import workService from 'services/workService'
import Work from 'user/components/Work/Work'
import Ads from 'user/components/Ads/Ads'
import { AuthContext } from 'contexts/AuthContext'
import { WorkContext } from 'contexts/WorkContext'

const WorkDetails = memo(({ work }) => {
   function RegisterBtnModal() {
      const [isShowModal, setIsShowModal] = useState(false)
      const [isSuccess, setIsSuccess] = useState(false)
      const loginRef = useRef()
      const navigate = useNavigate()

      const handleRegisterWork = async () => {
         await workService.register(work.id, (res) => {
            if (res.success)
               setIsSuccess(true)
            else if (res.statusCode == 401 || res.statusCode == 403) {
               setIsShowModal(true)
            }
         })
      }
      return (
         <>
            <Button colorScheme='green' onClick={handleRegisterWork}>
               {isSuccess ? 'Thành công' : 'Nhận Việc này'}
            </Button>
            <AlertDialog
               isOpen={isShowModal}
               leastDestructiveRef={loginRef}
            // onClose={!isShowModal}
            >
               <AlertDialogOverlay>
                  <AlertDialogContent>
                     <AlertDialogHeader fontSize='md' fontWeight='bold'>
                        Bạn chưa được sử dụng chức năng này
                     </AlertDialogHeader>
                     <AlertDialogBody fontSize='lg' fontWeight='bold'>
                        Đi qua đây đăng nhập xíu rồi quay lại tìm việc nhaa?
                     </AlertDialogBody>
                     <AlertDialogFooter>
                        <Button onClick={() => setIsShowModal(false)}>
                           Thôi !
                        </Button>
                        <Button ref={loginRef} colorScheme='blue' onClick={() => navigate('/dang-nhap')} ml={3}>
                           OK luôn
                        </Button>
                     </AlertDialogFooter>
                  </AlertDialogContent>
               </AlertDialogOverlay>
            </AlertDialog>
         </>
      )
   }
   return (
      <section className="work-details-wrapper">
         <header>
            <h1>{work.name}</h1>
         </header>
         <div className='body'>
            <BsCalendar2Date /><span>{work.date}</span>
            {work.time && <><BiTimeFive /><span>{work.time}</span></>}
            <BiMapPin /> <span>{work.location}</span>
            {work.poster_phone && <><AiOutlinePhone /><a href={`tel:${work.poster_phone}`}>{work.poster_phone}</a></>}
            <AiOutlineDollarCircle /> <span>{work.salary}.000 vnd</span>
            {work.note && <><GoRequestChanges /><span>{work.note}</span></>}
         </div>
         <footer className='flex sp-around ver-center'>
            {/* <div className='flex sp-around w-170'>
               <Tooltip label='Copy Link' hasArrow placement='top'>
                  <IconButton className='favorite-btn border rad-circle' aria-label='Search database' icon={<BiLink />} />
               </Tooltip>
               <Tooltip label='Share' hasArrow placement='top'>
                  <IconButton className='favorite-btn border rad-circle' aria-label='Search database' icon={<BiShareAlt />} />
               </Tooltip>
               <Tooltip label='Add To Favorite' hasArrow placement='top'>
                  <IconButton className='favorite-btn border rad-circle' aria-label='Search database' icon={<MdOutlineFavoriteBorder />} />
               </Tooltip>
            </div> */}
            <RegisterBtnModal />
         </footer>
      </section >
   )
})
const WorkList = memo(({ works }) => {
   return (
      <section className="works-wrapper flex flex-col center gap-15">
         {
            works.length != 0 ? works.map((work) => (
               <Work
                  key={work.id}
                  work={work}
               />
            )) : <NoNewWork />
         }
      </section>
   )
})
const NoNewWork = () => (
   <p>Chưa có công việc nào mới hết trơn</p>
)

// TODO: EXPORT PAGE
export default function WorkPage() {
   // TODO: declare
   const { works, setWorks, setAllWorks, allWorks, selectingWorkId } = useContext(WorkContext)
   const [workDetails, setWorkDetails] = useState({})
   const [isLoading, setIsLoading] = useState(false)
   const { isSignin } = useContext(AuthContext)

   // TODO: Fetch data
   const getValidWorks = async () => {
      setIsLoading(true)
      await workService.getValid(res => {
         if (res.success) {
            setWorks(res.data)
            setAllWorks(res.data)
            setIsLoading(false)
         }
      })
   }
   const getAllWorks = async () => {
      setIsLoading(true)
      await workService.getAll(res => {
         if (res.success) {
            setWorks(res.data)
            setAllWorks(res.data)
            setIsLoading(false)
         }
      })
   }
   // TODO: effect
   useEffect(() => {
      if (isSignin)
         getValidWorks()
      else getAllWorks()
   }, [isSignin])

   useEffect(() => {
      setWorkDetails(() => works && works.find(elm => elm.id === selectingWorkId))
   }, [works, selectingWorkId])
   const searchHandle = (e) => {
      const searchVal = e.target.value

      // console.log(searchVal)
      if (!searchVal) return setWorks(allWorks)
      const regex = new RegExp(searchVal, 'ig')
      let filterWorks = works.filter(work => {
         return regex.test(work.name)
      })
      if (filterWorks.length != 0) {
         setWorks(filterWorks)
      }
   }
   const asideStyle = {
      position: 'sticky',
      top: '60px',
      width: '100%',
      height: 'calc(100vh - 65px)',
      boxShadow: '-3px 0px 3px #d8d8d8',
      borderRadius: '7px 0 0 7px'
   }
   // TODO: RETURN
   return (
      <main className={`work-screen flex ${isLoading && 'center'}`}>
         {isLoading ? <Loading />
            : (
               <>
                  <WorkList works={works} />
                  <aside style={asideStyle} className='flex flex-col aside'>
                     <Input placeholder='Tìm kiếm' onChange={searchHandle} />
                     {workDetails ? <WorkDetails work={workDetails} /> : <Ads />}
                  </aside>
               </>
            )
         }
      </main>
   )
}
