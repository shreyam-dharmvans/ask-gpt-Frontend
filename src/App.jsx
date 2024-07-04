//import './App.css'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Chat } from './pages/Chat.jsx';
import { NotFound } from './pages/NotFound.jsx';


export function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
