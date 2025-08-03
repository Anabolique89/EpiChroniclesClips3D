import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Shop, Contact} from './pages';

const App = () => {
  return (
    <main className='bg-transparent '>
  <Router>
  {/* navigation */}
    <Navbar className="" />
<Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
       <Route path="/contact" element={<Contact/>} />
</Routes>
  </Router>
  </main>
  )
}

export default App