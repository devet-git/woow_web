import 'assets/scss/classes.scss'
import 'assets/scss/fonts.scss'
import 'assets/scss/setting.scss'

import WebRoutes from 'Routes'
import AuthProvider from 'contexts/AuthContext'
import WorkProvider from 'contexts/WorkContext'
import AccManagerProvider from 'contexts/AccManagerContext'
export default function App() {
   return (
      <AuthProvider>
         <WorkProvider>
            <AccManagerProvider>
               <WebRoutes />
            </AccManagerProvider>
         </WorkProvider>
      </AuthProvider>
   )
}


