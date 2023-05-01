import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './screens/LandingPage/LandingPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import CreateNote from './screens/CreateNote/CreateNote'
function App() {

  return (
  <div>
    <Header/>
      <main>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/mynotes' element={<MyNotes/>} />
        <Route path='/createNote' element={<CreateNote/>}/>
        </Routes>
      </main>
      <Footer/>
  </div>
  )
}

export default App
