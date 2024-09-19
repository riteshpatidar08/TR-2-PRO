import Signup from "./pages/Signup" 
import {Routes , Route} from 'react-router-dom'

export default function App() {
  return (
   <Routes>
    <Route path="/register" element={<Signup/>} />
   </Routes>
  )
}