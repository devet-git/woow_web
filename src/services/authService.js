import localData from 'user/utils/localData'
import api from './api'
const authService = {
   async signIn(username, pw, callback) {
      try {
         let res = await api.post('/auth/sign-in', { username, pw })
         localData.set('accessToken', res.data.data.accessToken)
         localData.set('user', res.data.data.user)
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   },
   async signUp(username, realName, phoneNum, pw, repeatPw, callback) {
      try {
         let res = await api.post('/auth/sign-up', { username, realName, phoneNum, pw, repeatPw })
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   },
   async getCurrentUser(callback) {
      try {
         let res = await api.get('/auth/user')
         // localData.set('accessToken', res.data.data.accessToken)
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   },
   async refreshToken(callback) {
      try {
         let res = await api.post('/auth/refresh-token')
         // localData.set('accessToken', res.data.data.accessToken)
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   },
   async signout(callback) {
      localData.remove('user')
      localData.remove('accessToken')
      window.location.replace('/dang-nhap')
      try {
         let res = await api.post('/auth/sign-out')
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   }
}

export default authService