import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './Style.css';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Work from './Work';
import Contact from './Contact';

function App() {

  const [page, setPage] = useState('about');
  
  return (
    <div className="App">
      <Header setPage={setPage}/>
      <main>
        {page === 'about' ? <About /> : page === 'work' ? <Work /> : <Contact />}
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);