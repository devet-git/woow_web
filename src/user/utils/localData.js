const localData = {
   /**
    *
    * @param {string} name
    * @returns
    */
   get: (name) => {
      const data = localStorage.getItem(name)
      return JSON.parse(data)
   },
   /**
    *
    * @param {string} name
    * @param {string|array|object} value
    */
   set: (name, value) => {
      localStorage.setItem(name, JSON.stringify(value))
   },
   /**
    *
    * @param {string} name
    */
   remove: (name = null) => {
      name ? localStorage.removeItem('name') : localStorage.clear()
   }
}
export default localData
