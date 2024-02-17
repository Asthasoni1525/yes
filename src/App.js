import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {DataProvider} from './components/DataContext'
const App = () => {
  return (
    <Router>
      <Nav/>
      <DataProvider>
     <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
</Routes>
</DataProvider>
    
    </Router>
  )
}

export default App