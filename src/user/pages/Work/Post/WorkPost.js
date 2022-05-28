import './WorkPost.scss'
// import { BsMessenger } from 'react-icons/bs'
import { GlobalState } from 'App'
import { useContext } from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

import { provinces } from 'user/utils/defaultData'
import workService from 'services/workService'


function LoginModal() {
   const { isLogin, setPrevLocation } = useContext(GlobalState)
   const currentLocation = useLocation().pathname
   const negative = useNavigate()
   return (
      <AlertDialog isOpen={!isLogin} >
         <AlertDialogOverlay>
            <AlertDialogContent>
               <AlertDialogHeader fontSize='md'>
                  Bạn cần đăng nhập
               </AlertDialogHeader>
               <AlertDialogBody fontSize='lg' fontWeight='bold'>
                  Bạn muốn đăng nhập không?
               </AlertDialogBody>
               <AlertDialogFooter>
                  <Button onClick={() => negative('/tim-viec')} mr={10}>Hủy</Button>
                  {/* <Link to='/dang-ky' style={{ color: 'green', padding: '4px' }}>Đăng ký</Link> */}
                  <Button colorScheme='blue' onClick={() => {
                     setPrevLocation(currentLocation)
                     negative('/dang-nhap')
                  }}>Đăng nhập</Button>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialogOverlay>
      </AlertDialog>
   )
}
export default function WorkPostingPage() {
   let { isLogin } = useContext(GlobalState)
   // function getval(e) {
   //    let elms = e.target.elements
   //    let regex = /[^\d]/
   //    let keys = Object.keys(elms).filter((key) => {
   //       console.log(elms[key].value)
   //       return regex.exec(key)
   //    })
   //    // console.log(keys)
   // }
   const handleSubmit = async (e) => {
      e.preventDefault()
      // getval(e)
      if (isLogin) {
         const { name, location, address, date, salary, quantity, note } = e.target.elements
         await workService.postUp(name.value, location.value, address.value, date.value, salary.value, quantity.value, note.value, (res) => {
            console.log(res)
         })
      }
   }

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
               <div>
                  {/* <label htmlFor='startTime' className='time-label'>Bắt đầu: </label> */}
                  <label htmlFor='startTime'>Làm vào ngày</label>
                  <input className='time' name='date' type='date' id='startTime' />
               </div>
            </div>
            <div className='--input-wrapper res-320'>
               <label htmlFor="wage">Tiền công</label>
               <input className='wage' name='salary' type='number' min="1" id='wage' />.000đ
               <div>
                  <label htmlFor="amount">Bao nhiêu người?</label>
                  <input className='amount' name='quantity' type='number' min="1" max="100" id='amount' />
               </div>
            </div>

            <div className='--input-wrapper res-320'>
               <label htmlFor='content'>Ghi chú: </label>
               <textarea className='content' name='note' placeholder='(Nếu có)' style={{ resize: 'none' }}></textarea>
            </div>
            {/* <button type='submit' className='confirm-btn'>Đăng luôn</button> */}
            <Button type='submit' colorScheme='yellow'>Đăng luôn</Button>
         </form>
      )
   }

   // TODO: This component
   return (
      <>
         <LoginModal />
         <div className='work-posting-page'>
            <div className='flex sp-between edit-bl'>
               <section className='left'>
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
