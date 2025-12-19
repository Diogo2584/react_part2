import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import BookList from './pages/BookList.jsx';
import AddBook from './pages/AddBook.jsx';
import Login from './pages/Login.jsx';
import ThemeChange from './components/ThemeChange.jsx';
import Settings from './pages/Settings.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <ThemeChange/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/bookList' element={<BookList/>}/>
      <Route path='/addBook' element={<AddBook/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/profile' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
