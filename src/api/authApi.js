import api from './apiConfig'

const authApi = {
   async signUp(data, callback) {
      try {
         let res = await api.post('/auth/sign-up', data)
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   },
   async signIn(data, callback) {
      try {
         let res = await api.post('/auth/sign-in', data)
         return callback(res.data)
      } catch (error) {
         return callback(error.response.data)
      }
   }
}

export default authApi