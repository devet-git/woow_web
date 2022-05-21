import './WorkPosting.scss'
// import { BsMessenger } from 'react-icons/bs'
export default function WorkPostingPage() {
   return (
      <div className='work-posting-page'>
         <div className='nav-bar flex sp-between'>
            <div className='logo'>
               <img className='logo' src={require('assets/images/logo.png')} />
            </div>
            <div className='navigation'>
               <a href='#!'>Trang Chủ</a>
               <a href='#!'>Bài Đăng</a>
               <a href='#!'>Tuyển Dụng</a>
            </div>
            <div className='acount'>
               <a href='#!'>Tài Khoản</a>
            </div>
         </div>
         <div className='flex sp-between'>
            <section className='left'>
               <main className='--card flex flex-col ver-center'>
                  <h2>TUYỂN DỤNG</h2>
                  <form className='--form flex flex-col ver-center' action=''>
                     <div className='--input-wrapper'>
                        <label htmlFor="workName">Tên công việc: </label>
                        <input className='work-name' type='text' id='workName' autoFocus />
                     </div>
                     <div className='--input-wrapper'>
                        <label>Thời gian: </label>
                        <div>
                           <label htmlFor='startTime'>Bắt đầu: </label>
                           <input className='time' type='date' id='startTime' />
                        </div>
                        <div>
                           <label htmlFor='endTime'>Kết thúc: </label>
                           <input className='time' type='date' id='endTime' />
                        </div>
                     </div>
                     <div className='--input-wrapper'>
                        <label htmlFor="wage">Lương: </label>
                        <input className='wage' type='number' id='wage' autoFocus />
                        <div>
                           <label htmlFor="amount">Số lượng: </label>
                           <input className='amount' type='number' id='amount' autoFocus />
                        </div>
                     </div>
                     <div className='--input-wrapper'>
                        <label>Vị trí: </label>
                        <select name='provinces'>
                           <option>Hà Giang</option>
                           <option>Tuyên Quang</option>
                           <option>Cao Bằng</option>
                           <option>Lạng Sơn</option>
                           <option>Bắc Giang</option>
                           <option>Quảng Ninh</option>
                           <option>Bắc Kạn</option>
                           <option>Thái Nguyên</option>
                           <option>Phú Thọ</option>
                           <option>Hòa Bình</option>
                           <option>Sơn La</option>
                           <option>Điện Biên</option>
                           <option>Lai Châu</option>
                           <option>Lào Cai</option>
                           <option>Yên Bái</option>
                           <option>Hà Nội</option>
                           <option>Bắc Ninh</option>
                           <option>Hà Nam</option>
                           <option>Hải Dương</option>
                           <option>Hải Phòng</option>
                           <option>Hưng Yên</option>
                           <option>Nam Định</option>
                           <option>Thái Bình</option>
                           <option>Vĩnh Phúc</option>
                           <option>Ninh Bình</option>
                           <option>Thanh Hóa</option>
                           <option>Nghệ An</option>
                           <option>Hà Tĩnh</option>
                           <option>Quảng Bình</option>
                           <option>Quảng Trị</option>
                           <option>Thừa Thiên Huế</option>
                           <option>Đà Nẵng</option>
                           <option>Quảng Nam</option>
                           <option>Quảng Ngãi</option>
                           <option>Bình Định</option>
                           <option>Phú Yên</option>
                           <option>Khánh Hòa</option>
                           <option>Ninh Thuận</option>
                           <option>Bình Thuận</option>
                           <option>Kon Tum</option>
                           <option>Gia Lai</option>
                           <option>Đăk Lăk</option>
                           <option>Đăk Nông</option>
                           <option>Lâm Đồng</option>
                           <option>TP Hồ Chí Minh</option>
                           <option>Bà Rịa - Vũng Tàu</option>
                           <option>Bình Dương</option>
                           <option>Bình Phước</option>
                           <option>Đồng Nai</option>
                           <option>Tây Ninh</option>
                           <option>An Giang</option>
                           <option>Cà Mau</option>
                           <option>Bạc Liêu</option>
                           <option>Sóc Trăng</option>
                           <option>Tiền Giang</option>
                           <option>Kiên Giang</option>
                           <option>Bến Tre</option>
                           <option>Long An</option>
                           <option>Đồng Tháp</option>
                           <option>Cần Thơ</option>
                           <option>Trà Vinh</option>
                           <option>Vĩnh Long</option>
                        </select>
                        <input className='address' type='text' placeholder='Địa chỉ cụ thể' />
                     </div>
                     <div className='--input-wrapper'>
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
