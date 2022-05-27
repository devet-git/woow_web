import localData from 'user/utils/localData'
import api from './config'

const authService = {
   async signIn(username, pw, callback) {
      try {
         let res = await api.post('/auth/sign-in', { username, pw })
         // localData.set('tokens', res.data.data.tokens)
         localData.set('user', res.data.data.user)
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   },
   async signUp(username, pw, repeatPw, callback) {
      try {
         let res = await api.post('/auth/sign-up', { username, pw, repeatPw })
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
   }
}

export default authService