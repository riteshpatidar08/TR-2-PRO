import Signup from "./pages/Signup" 
import {Routes , Route} from 'react-router-dom'
import {Toaster} from 'sonner'
export default function App() {
  return (
    <div>
   <Routes>
    <Route path="/register" element={<Signup/>} />
   </Routes>
   <Toaster position="bottom-right" />
   </div>
  )
}