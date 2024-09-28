import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Calendar from './pages/calender';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cal' element={<Calendar />} />

  
    </Routes>
   </BrowserRouter>
  )
}

export default App


