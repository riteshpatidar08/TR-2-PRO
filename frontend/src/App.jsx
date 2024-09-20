import Signup from "./pages/Signup" 
import {Routes , Route} from 'react-router-dom'
import {Toaster} from 'sonner'
import { useSelector } from "react-redux"
export default function App() {
  //to get the value
const {count} = useSelector((state)=>state.count)

  return (
    <div>
    <p>count:{count}</p>
      <button>Increment</button>
      <button>decrement</button>
   <Routes>
    <Route path="/register" element={<Signup/>} />
   </Routes>
   <Toaster position="bottom-right" />
   </div>
  )
}

//NOTE keywords in react-redux and @reduxtoolkit
//actions => actions are the javascript object which have type and payload property

//reducers => takes the previous state and returns new state

//useDispatch
//createSlice => it generally a function which manages the reducers and actions 

//store => store is like a container which have all the state we are using in our project

//initialState => initial value of the some value which is going to change

//useSelector
//provider