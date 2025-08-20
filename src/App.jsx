
import { BrowserRouter, Route, Routes } from 'react-router'
// import './App.css'
// import "./assets/Styles/style.scss"
import Home from './Pages/Home'
import About from './Pages/About'
import MortgageConsulting from './Pages/MortgageConsulting'
import RealEstateConsulting from './Pages/RealEstateConsulting'
import Partners from './Pages/Partners'
import Contact from './Pages/Contact'
import Properties from './Pages/Properties'
import PropertiesDetails from './Pages/PropertiesDetails'
import SignUp from './Pages/SignUp'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>  
      <Route path='/mortgageconsulting' element={<MortgageConsulting/>}/>   
      <Route path='/realestateconsulting' element={<RealEstateConsulting/>}/>      
      <Route path='/partners' element={<Partners/>}/>      
      <Route path='/contact' element={<Contact/>}/> 
       <Route path='/signup' element={<SignUp/>}/>      
      <Route path='/properties' element={<Properties/>}/>      
      <Route path='/propertydetails/:id' element={<PropertiesDetails/>}/>      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
