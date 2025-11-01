import {state} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Header from './componets/Header';
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import About from './pages/About'
import Shop from './pages/Shop'
import Services from './pages/services';
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Serviceslanding from './pages/Services/Serviceslanding';
import Petagecalculator from './pages/Services/Petagecalculator'
import Petcareguides from './pages/Services/Petcareguides'
import Petweightchecker from './pages/Services/Petweightchecker'
import Foodrecipcegenerator from './pages/Services/Foodrecipcegenerator'
import Namegenerator from './pages/Services/Namegenerator'
import Printablecharts from './pages/Services/Printablecharts'
import Breedidentifer from './pages/Services/breedidentifer'
function App() {
  

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path ='/'element={<Home/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Contact' element={<Contact/>}/>
<Route path='/Shop' element={<Shop/>}/>
<Route path='/Services' element={<Services/>}/>
{/*services*/}
<Route path='/services' element={<Serviceslanding/>}/>
<Route path='/services/age-calculator' element={<Petagecalculator/>}/>
<Route path='/services/weight-checker' element={<Petweightchecker/>}/>
<Route path='/services/care-guides' element={<Petcareguides/>}/>
<Route path='/services/food-recipes' element={<Foodrecipcegenerator/>}/>
<Route path='/services/Printable-charts' element={<Printablecharts/>}/>
<Route path='/services/breed-identifier' element={<Breedidentifer/>}/>
<Route path='/services/name-generator' element={<Namegenerator/>}/>
<Route path='*' element={<Notfound/>}/>
</Routes>
</main>
        <Footer/>
  

    

       </div>
       </Router>
  );
}

export default App
