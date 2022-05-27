import axios from 'axios'
import localData from 'user/utils/localData'

let tokens = localData.get('tokens')
let accessToken = tokens ? tokens.accessToken : null
const api = axios.create({
   baseURL: 'http://localhost:8000/api/v1',
   headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer${accessToken}`
      // 'content-type': 'application/x-www-form-urlencoded'
   }
})

export default api