import React from 'react'
import UserRegistration from './components/UserRegistration'
import UserLogin from './components/UserLogin'
import { Routes ,Route} from 'react-router-dom'


const App = () => {
  return (
 <Routes>
    <Route path='/registration' element={<UserRegistration/>}/>
    <Route path='/login' element={<UserLogin/>}/>
 </Routes>
  )
}

export default App
