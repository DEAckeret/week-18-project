import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import NavbarBs from './components/navbarBs';
import About from "./pages/About";
import Writers from "./pages/Writers";
import Newsletter from './components/newsletter';
import Social from './pages/Social';
import News from './pages/News';
import Redo from './pages/Redo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavbarBs />
      <Routes>
        <Route path="/News" element={<News />}/>
        <Route path="/Social" element={<Social />}/>
        <Route path="/Writers" element={<Writers />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Redo/:id" element={<Redo />}/>
        <Route path="/" element={<App />}/>
      </Routes>
      <Newsletter />
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
