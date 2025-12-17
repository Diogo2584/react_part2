import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import BookList from './pages/BookList.jsx';
import AddBook from './pages/AddBook.jsx';
import Login from './pages/Login.jsx';
import ThemeSettings from './components/ThemeSettings.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/bookList' element={<BookList/>}/>
      <Route path='/addBook' element={<AddBook/>}/>
      <Route path='/settings' element={<ThemeSettings/>}/>
      <Route path='/profile' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
