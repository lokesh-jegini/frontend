import React from 'react'
import { BrowserRouter , Switch, Route, Routes } from 'react-router-dom'
import Landinpage from './pages/Landinpage'
import Mobiles from "./pages/mobiles/Mobiles"
import Computers from "./pages/computer/Computer"
import Watches from "./pages/watches/watches"
import MensWear from "./pages/meanswear/Meanswear"
import Womanwear from "./pages/womanwear/Womanwear"
import Furniture from "./pages/furniture/Furniture"
import Kitchen from "./pages/kitchen/Kitchen"
import Fridge from "./pages/fridge/Fridge"
import Books from "./pages/books/Books"

import Tv from "./pages/tv/Tv"
import Ac from "./pages/ac/Ac"
import Speakers from './pages/speakers/Speakers'


export default function App() {

  return (
    <div className='App'>
   <BrowserRouter>
   <Routes>
    {/* <Route path='/' element={<Login />} /> */}
     <Route path='/' element={<Landinpage />} />
     <Route path='mobiles' element={<Mobiles />} />
     <Route path='/computers' element={<Computers />} />
     <Route path='/watches' element={<Watches />} />
     <Route path='/menswear' element={<MensWear/>} />
     <Route path='/womanwear' element={<Womanwear />} />
     <Route path='/furniture' element={<Furniture />} />
     <Route path='/kitchen' element={<Kitchen />} />
     <Route path='/fridge' element={<Fridge />} />
     <Route path='/books' element={<Books />} />
    
     <Route path='/ac' element={<Ac />} />
     <Route path='/tv' element={<Tv />} />
     <Route path='/speakers' element={<Speakers />} /> 
    </Routes>
   </BrowserRouter>


    </div>
  )
}
