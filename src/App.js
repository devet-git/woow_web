import LoginPage from 'user/pages/Login/Login'
import HomePage from 'user/pages/Home/Home'
import WorkPostingPage from 'user/pages/WorkPosting/WorkPosting'
import AccountManagementPage from 'user/pages/AccountManagement/AccountManagement'
import { Routes, Route } from 'react-router-dom'
function App() {
   return (
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/tim-viec' element={<h1>TIM VIEC</h1>} />
         <Route path='/dang-viec' element={<WorkPostingPage />} />
         <Route path='/dang-nhap' element={<LoginPage />} />
         <Route path='/tai-khoan' element={<AccountManagementPage />} />
      </Routes>
   )
}

export default App
