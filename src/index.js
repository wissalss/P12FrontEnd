import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import HeaderTop from "./component/Header/Header";
import HeaderLeft from "./component/Header-left/Header-left";
import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import Page404 from "./pages/Page404/Page404"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <HeaderTop/>
      <HeaderLeft/>
        <Routes >
            <Route path = "/" exact element={ <Home/> }/> 
            <Route path = "/user/:id" exact element={ <Dashboard/> }/> 
            <Route path = "*" element={ <Page404/> }/>  
        </Routes > 
    </Router> 
  </React.StrictMode>
);

