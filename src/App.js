import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import MobileMenu from './Components/MobileMenu';
import { useState } from 'react';

function App() {
  const [mobileMenu,setMobileMenu] = useState(false)

  const toggleMobileMenu = ()=>{
    setMobileMenu(!mobileMenu)
  }


  return (
    <div className={mobileMenu?"App md:h-screen overflow-hidden ":'App'}>     
       {
         mobileMenu && <MobileMenu/>  
      }  
      <div className="routes ">
        <Routes>
          <Route path='/' element={<Home toggleMobileMenu={toggleMobileMenu} />} />  
        </Routes>    
      </div>
    </div>
  );
}

export default App;
