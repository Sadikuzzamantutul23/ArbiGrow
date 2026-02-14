import React from 'react'
import RegisterForm from './page/Register'
import LoginForm from './page/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ForgotPassword from './page/ForgotPassword'
import VerificationPage from './page/VerificationPage'
import ResetPassword from './page/ResetPassword'
import { TermsAndConditions } from './page/TermsAndConditions'

const App = () => {
  return (
    <div>
      <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/verification-page' element={<VerificationPage />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/terms-conditions' element={<TermsAndConditions />} />
        </Routes>

       </BrowserRouter>
      </>
    </div>
  )
}

export default App
