// import './App.css'
import Home from  "../src/components/Home"

import Login from "../src/components/login"
import Signup from "../src/components/signup"
import Order from "../src/components/oder"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/oder" element={<Order/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
