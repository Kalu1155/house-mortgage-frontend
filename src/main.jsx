import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "./assets/Styles/style.scss"
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/assets/javascript/matchMedia.js';
import '/src/assets/javascript/owl.carousel.js'; 
import '/src/assets/javascript/parallax.js';
import '/src/assets/javascript/main.js';
import '/src/assets/javascript/slider.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
