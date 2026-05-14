import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Create from './pages/Create'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path={'/blog/:id'} element= {<Blog/>}></Route>
      <Route path='/create' element = {<Create />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
