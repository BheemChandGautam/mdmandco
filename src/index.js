import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './componants/header';
import Frontpage from './componants/frontpageimg';
import About from './componants/about';
import Services from './componants/services';
import Prof from './componants/profestionals';
import Form from './componants/form';
import Footer from './componants/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <Frontpage />
  <About />
  <Services />
  <Prof />
  <Form />
  <Footer />
  </>

);


reportWebVitals();
