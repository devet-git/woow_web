import api from './api'


const userService = {
   async all(callback) {
      try {
         let res = await api.post('/users/account')
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   },
   async changePassword(callback) {
      try {
         let res = await api.put('/users/account/password')
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   }
}
export default userService