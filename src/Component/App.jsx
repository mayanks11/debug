import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoPage from "./pages/NoPage/nopage";
import Home from './pages/Home/Home';
import  Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <>
          <Router>
                    <Routes>
                              <Route path = "/" element = {<Home />}/>
                              <Route path = "/admin" element = {<Admin />}/>
                              <Route path = "/cart" element = {<Cart/>}/>
                              <Route path= '*' element ={<NoPage/>}/>
                    </Routes>
          </Router>
      
    </>
  )
}

export default App;

