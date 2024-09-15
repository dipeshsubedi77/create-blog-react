
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/auth/Register'
import Home from './pages/auth/blog/Home'
import Login from './pages/auth/Login'
import AddBlog from './pages/auth/blog/AddBlog'
import Editblog from './pages/auth/blog/Editblog'
import Singleblog from './pages/auth/blog/Singleblog'


function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home/>} />
      
      <Route path='/blog/add' element={<AddBlog/>} />
      <Route path='/blog/edit' element={<Editblog/>} />
      <Route path='/blog/id' element={<Singleblog/>} />
    </Routes>
    </BrowserRouter>
  )
}


export default App
