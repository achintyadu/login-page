import react from 'react'
import Login from './Components/Login'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Logout from './Components/Logout'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MainLayout from './Components/MainLayout'
import Home from './Components/Home'

const App = () => {
  const user = useSelector(selectUser);

  return (
    <>
    <Router>
    <div>
      <Navbar/>
      <Routes>
          <Route exact element={MainLayout}>
          <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            
            {/* <Login/>  */}
          </Route>
        </Routes>
      {/* {user ? <Logout/>:<Login/>} */}
    </div>
    </Router>
    </>
  )
}

export default App
