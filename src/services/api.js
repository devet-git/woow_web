import axios from 'axios'
import localData from 'user/utils/localData'
const api = axios.create({
   baseURL: 'http://localhost:8000/api/v1',
   headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer${localData.get('accessToken') || ''}`
      // 'content-type': 'application/x-www-form-urlencoded'
   }
})
export default api