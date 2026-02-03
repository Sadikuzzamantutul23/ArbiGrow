import React from 'react'
import RegisterForm from './page/Register'
import LoginForm from './page/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'

const App = () => {
  return (
    <div>
      <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>} />
        </Routes>

       </BrowserRouter>
      </>
    </div>
  )
}

export default App
