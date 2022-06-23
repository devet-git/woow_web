import localData from 'user/utils/localData'
import api from './api'

const workService = {
   async getAll(callback) {
      try {
         let res = await api.get('/works')
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   },
   async getValid(callback) {
      try {
         let res = await api.get('/works/valid')
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   },
   async postUp(name, location, address, date, salary, quantity, note, callback) {
      try {
         let res = await api.post('/works', { name, location, address, date, salary, quantity, note, poster: localData.get('user').id })
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   },
   async register(workId, callback) {
      try {
         let res = await api.post('/works/resgister', { workId })
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   },
   async approve(workId, callback) {
      try {
         let res = await api.post('/works/approve', { workId })
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   },
   async refuse(workId, callback) {
      try {
         let res = await api.post('/works/refuse', { workId })
         return callback(res.data)
      }
      catch (error) {
         return callback(error.response.data)
      }
   }

}
export default workService