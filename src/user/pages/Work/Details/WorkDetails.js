import './WorkDetails.scss'
import { GoRequestChanges } from 'react-icons/go'
import { AiOutlinePhone, AiOutlineDollarCircle } from 'react-icons/ai'
import { BiTimeFive, BiMapPin } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'

import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import workService from 'services/workService'
import { WorkContext } from 'contexts/WorkContext'


export default function WorkDetailsPage() {
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
   const [work, setWork] = useState({})
   const { allWorks, selectingWorkId } = useContext(WorkContext)
   useEffect(() => {
      setWork(() => allWorks && allWorks.find(selectWork => selectWork.id == selectingWorkId))
   }, [allWorks, selectingWorkId])

   return work && (
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
}