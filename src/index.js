import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout/Layout.js';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import User from './Component/User/User.js'
import Github from './Component/Github/Github.js'
const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="user/:userid" element={<User/>}/>
        <Route path="Github" element={<Github/>}/>
         

        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>
);
