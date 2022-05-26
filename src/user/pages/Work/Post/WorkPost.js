import './WorkPost.scss'
import { provinces } from 'user/utils/defaultData'
// import { useEffect } from 'react'
// import { BsMessenger } from 'react-icons/bs'

export default function WorkPostingPage() {

   return (
      <div className='work-posting-page'>
         <div className='flex sp-between edit-bl'>
            <section className='left'>
               <main className='--card flex flex-col ver-center'>
                  <h2>TUYỂN DỤNG</h2>
                  <form className='--form flex flex-col ver-center' action=''>
                     <div className='--input-wrapper res-320'>
                        <label htmlFor="workName">Tên công việc: </label>
                        <input className='work-name' type='text' id='workName' autoFocus />
                     </div>
                     <div className='--input-wrapper res-320'>
                        <label>Thời gian: </label>
                        <div>
                           <label htmlFor='startTime' className='time-label'>Bắt đầu: </label>
                           <input className='time' type='date' id='startTime' />
                        </div>
                        <div>
                           <label htmlFor='endTime' className='time-label'>Kết thúc: </label>
                           <input className='time' type='date' id='endTime' />
                        </div>
                     </div>
                     <div className='--input-wrapper res-320'>
                        <label htmlFor="wage">Lương: </label>
                        <input className='wage' type='text' id='wage' autoFocus />
                        <div>
                           <label htmlFor="amount">Số lượng: </label>
                           <input className='amount' type='number' id='amount' autoFocus />
                        </div>
                     </div>
                     <div className='--input-wrapper res-320'>
                        <label>Vị trí: </label>
                        <select name='provinces'>
                           {
                              provinces.map(province => (
                                 <option key={province}>{province}</option>
                              ))
                           }
                        </select>
                        <input className='address' type='text' placeholder='Địa chỉ cụ thể' />
                     </div>
                     <div className='--input-wrapper res-320'>
                        <label htmlFor='content'>Nội dung: </label>
                        <textarea className='content' name='content'></textarea>
                     </div>
                     <button className='confirm-btn'>Hoàn Tất</button>
                  </form>
               </main>
            </section>
            <section className='right'>
               <h2 className='title'>ĐÃ ĐĂNG</h2>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
               <div className='posted'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <a href='!#'>Xem chi tiết</a>
               </div>
            </section>
         </div>
      </div>
   )
}
