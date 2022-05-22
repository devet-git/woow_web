import './AccountManagement.scss'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function AccountManagementPage() {
   return (
      <div className='account-management-page'>
         <div className='nav-bar flex sp-between'>
            <div className='logo'>
               <img className='logo' src={require('assets/images/logo.png')} />
            </div>
            <div className='navigation'>
               <a href='#!'>Trang Chủ</a>
               <a href='#!'>Bài Đăng</a>
               <a href='#!'>Tuyển Dụng</a>
            </div>
            <div className='account'>
               <a href='#!'>Tài Khoản</a>
            </div>
         </div>
         <main className='--main'>
            <div className='personal-infor flex sp-between'>
               <div className='avatar flex'>
                  <div className='person-img'></div>
                  <div className='person-name'>
                     <h2>Trương Thị Phương Trinh</h2>
                  </div>
               </div>
               <div className='edit-information flex flex-col center'>
                  <div className='edit-infor'>
                     <button className='btn-edit-infor' onClick={() => showFormEditInfor()}>Chỉnh sửa thông tin</button>
                     <main className='--card flex flex-col ver-center' id='form-edit-infor'>
                        <div className='back' onClick={() => hideFormEditInfor()} ><AiOutlineArrowLeft /></div>
                        <h3>CHỈNH SỬA THÔNG TIN</h3>
                        <form className='--form flex flex-col ver-center' action='' id='form'>
                           <div className='--input-wrapper'>
                              <label htmlFor="name">Họ và tên: </label>
                              <input className='name' type='text' id='name' value='Trương Thị Phương Trinh' autoFocus />
                           </div>
                           <div className='--input-wrapper'>
                              <label>Ngày sinh: </label>
                              <input className='birthday' type='date' />
                           </div>
                           <div className='--input-wrapper'>
                              <label htmlFor="username">Tên người dùng: </label>
                              <input className='username' type='text' id='username' value='phuongtrinh1234' autoFocus />
                           </div>
                           <div className='--input-wrapper'>
                              <label htmlFor="email">Email: </label>
                              <input className='email' type='email' id='email' value='example1234@gmail.com' autoFocus />
                           </div>
                           <div className='--input-wrapper'>
                              <label>Địa chỉ: </label>
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
                           </div>
                           <button className='confirm-btn'>Hoàn Tất</button>
                        </form>
                     </main>
                  </div>
                  <div className='edit-password'>
                     <button className='btn-change-pass' onClick={() => showFormEditPass()}>Đổi mật khẩu</button>
                     <main className='--card flex flex-col ver-center' id='form-edit-pass' >
                        <div className='back' onClick={() => hideFormEditPass()} ><AiOutlineArrowLeft /></div>
                        <h3>ĐỔI MẬT KHẨU</h3>
                        <form className='--form flex flex-col ver-center' action='' id='form'>
                           <div className='--input-wrapper'>
                              <label htmlFor="old-pass">Nhập mật khẩu: </label>
                              <input className='old-pass' type='password' id='oldPass' autoFocus />
                           </div>
                           <div className='--input-wrapper'>
                              <label htmlFor='new-pass'>Nhập mật khẩu mới: </label>
                              <input className='new-pass' type='password' id='newPass' />
                           </div>
                           <div className='--input-wrapper'>
                              <label htmlFor="repeat-new-pass">Nhập lại mật khẩu mới: </label>
                              <input className='repeat-new-pass' type='password' id='repeatNewPass' autoFocus />
                           </div>
                           <button className='confirm-btn'>Hoàn Tất</button>
                        </form>
                     </main>
                  </div>
               </div>
            </div>
            <div className='posted-received-work flex center sp-between'>
               <div className='left'>
                  <h3>Công việc đã đăng</h3>
                  <div className='posted'>
                     <h4>Tuyển người làm việc nhà part-time</h4>
                     <p>Cần tìm người giúp dọn dẹp nhà cửa và nấu ăn vào cuối tuần. Ưu tiên nữ.</p>
                     <div className='btn flex sp-between'>
                        <button className='btn-detail'>Xem thêm</button>
                        <div className='edit-posted flex'>
                           <button className='btn-choose' onClick={() => hideShow()}><AiOutlineEllipsis /></button>
                           <div className='edit-del flex flex-col' id='drop'>
                              <button className='edit'>Chỉnh sửa</button>
                              <button className='del'>Xóa</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='right'>
                  <h3>Công việc đã nhận</h3>
                  <div className='received'>
                     <h4>Tuyển người làm việc nhà part-time</h4>
                     <p>Cần tìm người giúp dọn dẹp nhà cửa và nấu ăn vào cuối tuần. Ưu tiên nữ.</p>
                     <div className='btn flex sp-between'>
                        <button className='btn-detail'>Xem thêm</button>
                        <button className='btn-del'>Xóa</button>
                     </div>
                  </div>
               </div>
            </div>
         </main >
      </div >
   )
}

function hideShow() {
   document.getElementById('drop').classList.toggle('show')
}
function showFormEditInfor() {
   document.getElementById('form-edit-infor').style.display = 'block'
}
function hideFormEditInfor() {
   document.getElementById('form-edit-infor').style.display = 'none'
}
function showFormEditPass() {
   document.getElementById('form-edit-pass').style.display = 'block'
}
function hideFormEditPass() {
   document.getElementById('form-edit-pass').style.display = 'none'
}
