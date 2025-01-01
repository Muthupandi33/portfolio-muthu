import React from 'react'
import Home from './routing/pageRoute/Home'
import About from './routing/pageRoute/About'
import Contact from './routing/pageRoute/Contact'
import Experience from './routing/pageRoute/Experience'
import Project from './routing/pageRoute/Project'
import Footer from './routing/pageRoute/Footer';
import Navbar from './routing/Navbar'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './routing/pageRoute/PageNotFound'
const App = () => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <BrowserRouter >
    <Navbar/>
    <main style={{ flex: 1 }}>
    <Routes>
      <Route path='/' element={<Home/>}>
         <Route to='/contact' element={<Contact/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
