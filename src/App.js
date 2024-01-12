import React from 'react'
import { BrowserRouter , Switch, Route, Routes } from 'react-router-dom'
import Landinpage from './pages/Landinpage'

export default function App() {
  // app consit all pages
  return (
    <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
     <Route path='/loki' element={<Landinpage />} />
    </Routes>
   </BrowserRouter>


    </div>
  )
}
