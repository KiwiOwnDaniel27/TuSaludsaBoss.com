import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/header';
import Hero from './components/Hero';
import Benefits from './components/benefits';
import Planes from './components/Planes';
import Testimonials from './components/Testimonials';
import FaqSec from './components/FaqSec';
import 'remixicon/fonts/remixicon.css';


import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container max-auto px-4'>
        <App />
    </div>
  </StrictMode>,
);
