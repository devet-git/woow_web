/**
 *
 * @param {string} path
 * @param {*} callback
 */
async function fetchApi(path, callback) {
   fetch('http://localhost:8000/api/v1' + path, { method: 'GET' })
      .then(res => res.json())
      .then(data => callback(data))
}
export default fetchApi
