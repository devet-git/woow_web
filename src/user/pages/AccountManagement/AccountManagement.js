import './AccountManagement.scss'
import 'assets/scss/classes.scss'
import { AiOutlineEllipsis } from 'react-icons/ai'
import React from 'react'
import { provinces } from 'user/utils/defaultData'
import {
   Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Input, Select
} from '@chakra-ui/react'


function EditInfoDialog() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const initialRef = React.useRef()
   return (
      <>
         <Button className='button-edit' onClick={onOpen}>Thay đổi thông tin</Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mt={3} mb={0} maxWidth="500px">
               <ModalHeader textAlign='center' padding="15px 30px">Thay đổi thông tin của bạn</ModalHeader>
               <ModalCloseButton />
               <ModalBody padding="0px 40px">
                  <FormControl>
                     <FormLabel mb={1}>Họ và tên: </FormLabel>
                     <Input fontSize="16px" h={7} ref={initialRef} type='text' placeholder='Trương Thị Phương Trinh' />
                  </FormControl>
                  <FormControl mt={2}>
                     <FormLabel mb={1}>Tên người dùng:</FormLabel>
                     <Input fontSize="16px" h={7} type='text' placeholder='phuongtrinh1234' />
                  </FormControl>
                  <FormControl mt={2}>
                     <FormLabel mb={1}>Ngày sinh:</FormLabel>
                     <Input fontSize="16px" h={7} type='date' />
                  </FormControl>
                  <FormControl mt={2}>
                     <FormLabel mb={1}>Email:</FormLabel>
                     <Input fontSize="16px" h={7} type='email' placeholder='example1234@gmail.com' />
                  </FormControl>
                  <FormControl mt={2}>
                     <FormLabel mb={1}>Địa chỉ:</FormLabel>
                     <Select fontSize="16px" h={7} name='provinces'>
                        {provinces.map(province => (<option key={province}>{province}</option>))}
                     </Select>
                  </FormControl>
               </ModalBody>

               <ModalFooter>
                  <Button h={7} borderRadius="3px" backgroundColor="#7bb3f4" variant='ghost'>Xác nhận</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
function EditPasswordDialog() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const initialRef = React.useRef()
   return (
      <>
         <Button className='edit-pass button-edit' onClick={onOpen}>Đổi mật khẩu</Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxWidth="500px">
               <ModalHeader textAlign='center' padding="15px 30px">Đổi mật khẩu</ModalHeader>
               <ModalCloseButton />
               <ModalBody padding="0px 40px">
                  <FormControl>
                     <FormLabel mb={1}>Nhập mật khẩu: </FormLabel>
                     <Input fontSize="16px" h={7} ref={initialRef} type='password' />
                  </FormControl>
                  <FormControl mt={2}>
                     <FormLabel mb={1}>Nhập mật khẩu mới:</FormLabel>
                     <Input fontSize="16px" h={7} type='password' />
                  </FormControl>
                  <FormControl mt={2}>
                     <FormLabel mb={1}>Nhập lại mật khẩu mới:</FormLabel>
                     <Input fontSize="16px" h={7} type='password' />
                  </FormControl>
               </ModalBody>

               <ModalFooter>
                  <Button h={7} borderRadius="3px" backgroundColor="#7bb3f4" variant='ghost'>Xác nhận</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
export default function AccountManagementPage() {
   return (
      <div className='account-management-page'>
         <div className='user-info flex sp-between'>
            <div className='common flex'>
               <div className='avatar'></div>
               <div className='real-name'>
                  <h2>Trương Thị Phương Trinh</h2>
                  <p>@phuongtrinh1234</p>
               </div>
            </div>
            <div className='edit flex flex-col center'>
               <EditInfoDialog />
               <EditPasswordDialog />
            </div>
         </div>
         <div className='works-wrapper flex sp-between'>
            <div className='__posted __col'>
               <h3>Công việc đã đăng</h3>
               <div className='__work'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <p>Cần tìm người giúp dọn dẹp nhà cửa và nấu ăn vào cuối tuần. Ưu tiên nữ.</p>
                  <p>Thời gian: 21/5/2022 - 23/5/2022</p>
                  <p>Lương: 200.000 VND / Ngày</p>
                  <p>Vị trí: Đăk Lăk</p>
                  <p>Số lượng: 10 người</p>
                  <div className='btn-wrapper flex sp-between'>
                     <div className='btn-choose-wrapper flex'>
                        <button className='btn choose' ><AiOutlineEllipsis /></button>
                        <div className='edit-del-wrapper flex flex-col center' id='drop'>
                           <button className='btn-edit'>Chỉnh sửa</button>
                           <button className='btn-del'>Xóa</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='__work'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <p>Cần tìm người giúp dọn dẹp nhà cửa và nấu ăn vào cuối tuần. Ưu tiên nữ.</p>
                  <p>Thời gian: 21/5/2022 - 23/5/2022</p>
                  <p>Lương: 200.000 VND / Ngày</p>
                  <p>Vị trí: Đăk Lăk</p>
                  <p>Số lượng: 10 người</p>
                  <div className='btn-wrapper flex sp-between'>
                     <div className='btn-choose-wrapper flex'>
                        <button className='btn choose'><AiOutlineEllipsis /></button>
                        <div className='edit-del-wrapper flex flex-col center' id='drop'>
                           <button className='btn-edit'>Chỉnh sửa</button>
                           <button className='btn-del'>Xóa</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='__received __col'>
               <h3>Công việc đã nhận</h3>
               <div className='__work'>
                  <h4>Tuyển người làm việc nhà part-time</h4>
                  <p>Cần tìm người giúp dọn dẹp nhà cửa và nấu ăn vào cuối tuần. Ưu tiên nữ.</p>
                  <p>Thời gian: 21/5/2022 - 23/5/2022</p>
                  <p>Lương: 200.000 VND / Ngày</p>
                  <p>Vị trí: Đăk Lăk</p>
                  <p>Số lượng: 10 người</p>
                  <div className='btn-wrapper flex sp-between'>
                     <button className='btn-cancel'>Hủy</button>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}
