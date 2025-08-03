import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Shop, Contact, Customizer} from './pages';
import Canvas from './canvas';

const App = () => {
  return (
    <main className='bg-transparent transition-all ease-in'>
  <Router>
  {/* navigation */}
    <Navbar className="" />
<Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
       <Route path="/contact" element={<Contact/>} />
        <Route path="/customizer" element={<Customizer/>} />
</Routes>
  </Router>
  </main>
  )
}

export default App