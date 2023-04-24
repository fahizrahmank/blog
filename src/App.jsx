import React, { useState,useContext } from 'react'
import { Context } from './Components/Context'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import List from './Components/List'
import Saved from './Components/Saved'


function App() {
  const [createText,setCreateText]=useState([])

  const state = {
    text :createText,
    setText :setCreateText
  }

  return (
    <div className="App">
    
    <BrowserRouter>
  <Context.Provider value={state}>
  <Routes> 
    <Route path='/' element={<Home />}/>
    <Route path='List' element={<List />}/>
    <Route path='/List/:id' element={<Saved />}/>
    
    </Routes>
    </Context.Provider>
      </BrowserRouter>
    </div>
  
  )
}

export default App
