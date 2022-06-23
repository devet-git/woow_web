import './AccManager.scss'
import 'assets/scss/classes.scss'
import React, { memo, useContext, useEffect, useState } from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
// import { provinces } from 'user/utils/defaultData'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Input, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import userService from 'services/userService'
import Loading from 'user/components/Loading/Loading'
// import localData from 'user/utils/localData'
import styled from 'styled-components'
import workService from 'services/workService'
import { Link } from 'react-router-dom'
import { AccManagerContext } from 'contexts/AccManagerContext'

const ActionBtn = styled.button`
   padding: 7px 10px;
   margin: 10px 0;
   background-color: ${props => props.bgColor ? props.bgColor : '#b8d8fc'};
   border-radius: 3px;
   &:hover {
      box-shadow: 0px 1px 3px #2e86eb;
   }
`
const RegisterWrapper = styled.div`
   border-top: 1px solid;
   border-bottom: 1px solid;
   .register {
      padding: 5px 10px;
      background-color: #e6e6e6;
      margin: 5px 0;
      border-radius: 5px;
      width:fit-content;
      .phone-num {
         background-color: #43cf4d;
         color: white;
         padding: 5px 10px;
         margin-left: 5px;
         border-radius: 12px;
         &:hover{
            box-shadow: 0 0 5px green;
         }
      }
   }
`
const NoWork = ({ path, text }) => (
   <div style={{ textAlign: 'center', width: '100%' }}>
      <h2>Không có công việc nào</h2>
      {text && (
         <Link to={'/' + path} style={{
            backgroundColor: '#0067c2',
            padding: '7px 10px',
            borderRadius: '2px',
            display: 'inline-block', color: 'white'
         }}>{text}</Link>
      )}
   </div>
)
const AccManagerPage = memo(() => {
   const [isLoading, setIsLoading] = useState(true)
   const [currentUser, setCurrentUser] = useState({})
   const [registeredWorks, setRegisteredWorks] = useState({})
   const [postedWorks, setpostedWorks] = useState({})
   const [registers, setRegisters] = useState({})
   const [needApprovalWorks, setNeedApprovalWorks] = useState({})
   // TODO: FETC DATA
   async function getAllUserData() {
      await userService.all((res) => {
         // console.log(res)
         if (res.success) {
            let postedWorksTemp = res.data.postedWorks.works
            let registeredWorksTemp = res.data.registeredWorks
            let needApprovalWorksTemp = res.data.needApprovalWorks
            setRegisteredWorks(registeredWorksTemp.reverse())
            setpostedWorks(postedWorksTemp.reverse())
            setNeedApprovalWorks(needApprovalWorksTemp.reverse())
            setRegisters(res.data.postedWorks.registers)
            setIsLoading(false)
            setCurrentUser(res.data)
            // localData.set('user', res.data)
         }
      })
   }
   useEffect(() => {
      getAllUserData()
   }, [])

   // TODO: COMPONENT
   function UserInfo() {
      function ChangeInfoFormModal() {
         //!Don't delete
         const { isOpen, onOpen, onClose } = useDisclosure()
         const initialRef = React.useRef()
         //TODO input value state
         const [uname, setUname] = useState(currentUser.username)
         const usernameHandleChange = async (e) => {
            let val = e.target.value
            setUname(val)
         }
         return (
            <>
               <button className='button-edit' onClick={onOpen}>Cập nhật thông tin</button>
               <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent mt={3} mb={0} maxWidth="500px">
                     <ModalHeader textAlign='center' padding="15px 30px">Thay đổi thông tin của bạn</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody padding="0px 40px">
                        <FormControl>
                           <FormLabel mb={1}>Tên thật của bạn</FormLabel>
                           <Input fontSize="16px" h={7} ref={initialRef} type='text' defaultValue={currentUser.real_name} autoFocus={currentUser.email ? true : false} />
                        </FormControl>
                        <FormControl mt={2}>
                           <FormLabel mb={1}>Tên người dùng: {uname || 'không được bỏ trống'}</FormLabel>
                           <Input fontSize="16px" h={7} type='text'
                              defaultValue={uname ? uname : currentUser.username}
                              onChange={usernameHandleChange}
                           />
                        </FormControl>
                        {/* <FormControl mt={2}>
                           <FormLabel mb={1}>Ngày sinh:</FormLabel>
                           <Input fontSize="16px" h={7} type='date' />
                        </FormControl> */}
                        <FormControl mt={2}>
                           <FormLabel mb={1}>Email:</FormLabel>
                           <Input fontSize="16px" h={7} itemType='email' placeholder='abc@example.com' defaultValue={currentUser.email} autoFocus={!currentUser.email && true} />
                        </FormControl>
                        {/* <FormControl mt={2}>
                           <FormLabel mb={1}>Tỉnh/Thành phố</FormLabel>
                           <Select fontSize="16px" h={7} name='provinces'>
                              {provinces.map(province => (<option key={province} value={province}>{province}</option>))}
                           </Select>
                        </FormControl> */}
                     </ModalBody>
                     <ModalFooter>
                        <Button h={7} borderRadius="3px" backgroundColor="#7bb3f4" variant='ghost'>Cập nhật</Button>
                     </ModalFooter>
                  </ModalContent>
               </Modal >
            </>
         )
      }
      function ChangePwFormModal() {
         const { isOpen, onOpen, onClose } = useDisclosure()
         const initialRef = React.useRef()

         const handleSubmit = async (e) => {
            e.preventDefault()
            // console.log(e.target)
         }
         return (
            <>
               <button className='button-edit' onClick={onOpen}>Đổi mật khẩu</button>
               <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent maxWidth="500px">
                     <ModalHeader textAlign='center' padding="15px 30px">Đổi mật khẩu</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody padding="0px 40px 40px">
                        <FormControl onSubmit={handleSubmit} as='form' id='formm'>
                           <FormLabel mb={1}>Mật khẩu hiện tại</FormLabel>
                           <Input id='currentPw' name='currentPw' fontSize="16px" h={7} ref={initialRef} type='password' autoFocus />
                           <FormLabel mb={1}>Mật khẩu mới</FormLabel>
                           <Input id='newPw' name='newPw' fontSize="16px" h={7} type='password' />
                           <FormLabel mb={1}>Xác nhận mật khẩu mới</FormLabel>
                           <Input id='confirmNewPw' name='confirmNewPw' fontSize="16px" h={7} type='password' />
                           <ModalFooter>
                              <Button h={7} mt='10px' type='submit' form='formm' borderRadius="3px" backgroundColor="#7bb3f4" variant='ghost'>Xác nhận</Button>
                           </ModalFooter>
                        </FormControl>
                     </ModalBody>
                  </ModalContent>
               </Modal>
            </>
         )
      }
      return (
         <section className='user-info'>
            <div className='common' >
               <div className='avatar'>
                  <img src={require('assets/images/recruit.jpg')} alt="" />
               </div>
               <div className='real-name'>
                  <h2>{currentUser.real_name}</h2>
                  <p style={{ fontSize: '17px' }}>{'@' + currentUser.username}</p>
               </div>
            </div>
            <div className='edit flex flex-col center'>
               {/* <ChangeInfoFormModal /> */}
               <ChangePwFormModal />
            </div>
         </section>
      )
   }
   function WorkTabs() {
      const { watchingTab, setWatchingTab } = useContext(AccManagerContext)
      const workWrapperStyle = {
         overflow: 'auto',
         height: '100%',
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         gap: '10px'

      }
      const workStyle = {
         padding: '15px 30px',
         boxShadow: '0 1px 10px 2px #c4defc inset',
         borderRadius: '5px',
         overflow: 'hidden',
         wordWrap: 'break-word',
         overflowWrap: 'break-word'
      }
      function PostedWorks() {
         //TODO: PostedWorks component
         return (
            <>
               <div style={workWrapperStyle} className='work-show'>
                  {postedWorks.length !== 0 && postedWorks.map(work => (
                     <div key={work.id} style={workStyle}>
                        <h2> {work.name}</h2>
                        <p>{work.note}</p>
                        <p>Ngày: {work.date}</p>
                        <p>Tiền công: {work.salary} .000VND</p>
                        <p>Địa chỉ: {work.address}</p>
                        <p>Số lượng: {work.quantity} người</p>
                        <p>Đã đăng vào: {work.posted_at}</p>
                        <RegisterWrapper>
                           {/* <p>Người nhận việc:</p> */}
                           {registers.map(who => who.work_id == work.id && (
                              <div className='register' key={who.user_id}>
                                 <p>
                                    {who.real_name}<a href={'tel:' + who.phone_num} className='phone-num' title='Nhấn để gọi'><PhoneIcon /> {who.phone_num}</a>
                                 </p>
                              </div>
                           ))}
                        </RegisterWrapper>
                        <div className='flex sp-between '>
                           <ActionBtn>Đã nhận đủ người</ActionBtn>
                           {/* <ActionBtn>Xóa</ActionBtn> */}
                        </div>
                     </div >
                  ))}
               </div >
               {postedWorks.length === 0 && <NoWork path='dang-viec' text='Đăng lên công việc của bạn' />}
            </>
         )
      }
      function RegisteredWorks() {
         return (
            <>
               <div style={workWrapperStyle} className='work-show'>
                  {registeredWorks.length !== 0 && registeredWorks.map(work => (
                     <div key={work.id} style={workStyle}>
                        <h2>{work.name}</h2>
                        <p>{work.note}</p>
                        <p>Ngày: {work.date}</p>
                        <p>Tiền công: {work.salary}.000VND</p>
                        <p>Địa chỉ: {work.address}</p>
                        <p>Số lượng: {work.quantity}</p>
                     </div>
                  ))}
               </div>
               {registeredWorks.length === 0 && <NoWork path='tim-viec' text='Tìm việc' />}
            </>
         )
      }
      function NeedApprovalWorks() {
         const handleApprove = async (work) => {
            await workService.approve(work.id, res => {
               if (res.success) {
                  let newWorks = needApprovalWorks.filter(elm => {
                     return elm.id !== work.id
                  })
                  setNeedApprovalWorks(newWorks)
               }
            })
         }
         const handleRefuse = async (work) => {
            await workService.refuse(work.id, res => {
               if (res.success) {
                  let newWorks = needApprovalWorks.filter(elm => {
                     return elm.id !== work.id
                  })
                  setNeedApprovalWorks(newWorks)
               }
            })
         }
         return (
            <>
               <div style={workWrapperStyle} className='work-show'>
                  {(needApprovalWorks) && needApprovalWorks.map(work => (
                     <div key={work.id} style={workStyle} >
                        <h2> {work.name}</h2>
                        <p>{work.note}</p>
                        <p>Ngày: {work.date}</p>
                        <p>Tiền công: {work.salary} .000VND</p>
                        <p>Địa chỉ: {work.address}</p>
                        <p>Số lượng: {work.quantity} người</p>
                        <p>Đã đăng vào: {work.posted_at}</p>
                        <RegisterWrapper>
                           {registers.map(who => who.work_id == work.id && (
                              <div className='register' key={who.user_id}>
                                 <p>
                                    {who.real_name}
                                    <a href={'tel:' + who.phone_num} className='phone-num' title='Nhấn để gọi'>
                                       <PhoneIcon /> {who.phone_num}
                                    </a>
                                 </p>
                              </div>
                           ))}
                        </RegisterWrapper>
                        <div className='flex sp-between '>
                           <ActionBtn onClick={() => handleApprove(work)}>Chấp thuận</ActionBtn>
                           <ActionBtn onClick={() => handleRefuse(work)} bgColor='#ff8500'>Từ chối</ActionBtn>
                        </div>
                     </div >
                  ))}
               </div >
               {needApprovalWorks.length === 0 && <NoWork />}
            </>
         )
      }
      const tabStyle = {
         tabs: {
            width: '100%', flex: '0 0 80%',
            display: 'flex'
         },
         tabList: {
            display: 'block',
            position: 'sticky',
            top: '65px',
            height: 'fit-content',
            border: 'none'
         },
         tab: {
            padding: '20px 7px',
            marginBottom: '10px',
            width: 'min-content',
            // border: '1px solid'
            boxShadow: 'none'
         }
      }
      return (
         <Tabs size='md' style={tabStyle.tabs} defaultIndex={watchingTab}>
            <TabList style={tabStyle.tabList}>
               <Tab style={tabStyle.tab} onClick={() => setWatchingTab(0)}>Đã đăng</Tab>
               <Tab style={tabStyle.tab} onClick={() => setWatchingTab(1)}>Đã nhận</Tab>
               <Tab style={tabStyle.tab} isDisabled={currentUser.role !== 'CENSOR'} onClick={() => setWatchingTab(2)}>Cần duỵt</Tab>
            </TabList>
            <TabPanels style={{ padding: '10px 0 10px 10px' }}>
               <TabPanel style={{ padding: ' 0' }}>
                  <PostedWorks />
               </TabPanel>
               <TabPanel style={{ padding: ' 0' }} >
                  <RegisteredWorks />
               </TabPanel>
               <TabPanel style={{ padding: ' 0' }} >
                  <NeedApprovalWorks />
               </TabPanel>
            </TabPanels >
         </Tabs >
      )
   }
   // TODO: MAIN
   return (
      <main className='main flex center'>
         {isLoading ? <Loading /> : (
            <div className='acc-manager-page flex sp-between'>
               <UserInfo />
               <WorkTabs />
            </div >
         )}
      </main >
   )
})
export default AccManagerPage