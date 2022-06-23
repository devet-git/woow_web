import './WorkPost.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { Alert, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon, Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

import { provinces } from 'user/utils/defaultData'
import workService from 'services/workService'
import { AuthContext } from 'contexts/AuthContext'


function LoginModal() {
   const { isSignin, setPrevLocation } = useContext(AuthContext)
   const currentLocation = useLocation().pathname
   const loginRef = useRef()
   const negative = useNavigate()

   return (
      <AlertDialog isOpen={!isSignin} leastDestructiveRef={loginRef}>
         <AlertDialogOverlay>
            <AlertDialogContent>
               <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Bạn cần đăng nhập😢
               </AlertDialogHeader>
               <AlertDialogBody >
                  Bạn đang muốn tìm người phụ việc. Đăng nhập ngay nèo
               </AlertDialogBody>
               <AlertDialogFooter>
                  <Button onClick={() => negative('/tim-viec')} mr={10}>Hủy</Button>
                  <Button ref={loginRef} colorScheme='blue'
                     onClick={() => {
                        setPrevLocation(currentLocation)
                        negative('/dang-nhap')
                     }}
                  >Đăng nhập 😘</Button>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialogOverlay>
      </AlertDialog>
   )
}
export default function WorkPostPage() {
   let { isSignin } = useContext(AuthContext)
   const [isShowSuccesAlert, setIsShowSuccesAlert] = useState(false)
   const [isShowErrorAlert, setIsShowErrorAlert] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()
      if (isSignin) {
         const { name, location, address, date, salary, quantity, note } = e.target.elements
         await workService.postUp(name.value, location.value, address.value, date.value, salary.value, quantity.value, note.value || null, (res) => {
            // console.log(res)
            if (res.success) {
               setIsShowSuccesAlert(true)
            } else {
               setIsShowErrorAlert(true)
            }
         })
      }
   }
   useEffect(() => {
      let time = setTimeout(() => {
         setIsShowSuccesAlert(false)
         setIsShowErrorAlert(false)
      }, 1500)
      return () => { clearTimeout(time) }
   }, [isShowSuccesAlert, isShowErrorAlert])


   const PostWorkForm = () => {
      return (
         <form className='--form flex flex-col ver-center' method='get' onSubmit={handleSubmit}>
            <div className='--input-wrapper res-320'>
               <label htmlFor="workName">Việc gì vậy</label>
               <input className='work-name' name='name' type='text' autoFocus />
            </div>
            <div className='--input-wrapper res-320'>
               <label>Làm ở</label>
               <select name='location'>
                  {
                     provinces.map(province => (
                        <option key={province} value={province}>{province}</option>
                     ))
                  }
               </select>
               <input className='address' name='address' type='text' placeholder='Địa chỉ cụ thể' />
            </div>
            <div className='--input-wrapper res-320'>
               {/* <label htmlFor='startTime' className='time-label'>Bắt đầu: </label> */}
               <label htmlFor='startTime'>Làm vào ngày</label>
               <input className='time' name='date' type='date' id='startTime' />
               {/* <div>
               </div> */}
            </div>
            <div className='--input-wrapper res-320'>
               <label htmlFor="wage">Tiền công</label>
               <div className='wage'>
                  <input name='salary' type='number' min="1" id='wage' />.000đ
               </div>
               <div>
                  <label htmlFor="amount">Số người </label>
                  <input className='amount' name='quantity' type='number' min="1" max="100" id='amount' />
               </div>
            </div>

            <div className='--input-wrapper res-320'>
               <label htmlFor='content'>Ghi chú </label>
               <textarea className='content' name='note' placeholder='(Nếu có)' style={{ resize: 'none' }}></textarea>
            </div>
            {/* <button type='submit' className='confirm-btn'>Đăng luôn</button> */}
            <Button p={3} type='submit' colorScheme='yellow'>Đăng bài</Button>
         </form>
      )
   }

   // TODO: This component
   return (
      <>
         <LoginModal />

         <div className='work-posting-page'>
            {isShowSuccesAlert && (
               <Alert status='success' style={{ position: 'fixed', top: '0', zIndex: '100' }}>
                  <AlertIcon />
                  Đã đăng công việc lên
               </Alert>
            )}
            {isShowErrorAlert && (
               <Alert status='error' style={{ position: 'fixed', top: '0', zIndex: '100' }}>
                  <AlertIcon />
                  Cần nhập đầy đủ thông tin
               </Alert>
            )}
            <div className='flex edit-bl'>
               <section className='left flex center'>
                  <main className='--card flex flex-col ver-center'>
                     <h2>TUYỂN DỤNG</h2>
                     <PostWorkForm />
                  </main>
               </section>
               <section className='right'>
                  <h2 className='title'>ĐÃ ĐĂNG</h2>
                  <div className='posted'>
                     <h4>Tuyển người làm việc nhà part-time</h4>
                     <a href='!#'>Xem chi tiết</a>
                  </div>
               </section>
            </div>
         </div>
      </>
   )
}
