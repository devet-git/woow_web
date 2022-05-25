import api from './apiConfig'

const workApi = {
   async getAll(callback) {
      try {
         let resData = await api.get('/works')
         return callback(resData.data)
      }
      catch (error) {
         throw new Error(error)
      }
   }
}
export default workApi