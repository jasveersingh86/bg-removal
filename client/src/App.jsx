import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo_icon.svg'

import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Credit_buy from './pages/Credit_buy'
import Navbar from './component/Navbar'
function App() {
  

  return (
    <>
    <div className='min-h-screen bg-slate-50'>

      <Navbar/>
    
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/buy' element={<Credit_buy/>}/>
       </Routes>

     </div>
      </>
  )
}

export default App;
