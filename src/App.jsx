import React from 'react'
import Home from './routing/pageRoute/Home'
import About from './routing/pageRoute/About'
import Contact from './routing/pageRoute/Contact'
import Experience from './routing/pageRoute/Experience'
import Project from './routing/pageRoute/Project'

import Navbar from './routing/Navbar'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './routing/pageRoute/PageNotFound'
const App = () => {
  return (
    <div>
    <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App