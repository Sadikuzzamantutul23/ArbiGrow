import React from 'react'
import RegisterForm from './page/Register'
import LoginForm from './page/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ForgotPassword from './page/ForgotPassword'
import VerificationPage from './page/VerificationPage'

const App = () => {
  return (
    <div>
      <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/verificationpage' element={<VerificationPage />} />
        </Routes>

       </BrowserRouter>
      </>
    </div>
  )
}

export default App
