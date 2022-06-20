//import logo from './logo.svg';
import React, {useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  // function to check which page is selected and then render it
  const renderPage = () => {
    switch(currentPage) {
      case "about": return <About />;
      case "portfolio": return <Portfolio />;
      case "contact": return <Contact />;
      case "resume": return <Resume />;
      default: return
    }
  };
  
  
  return (
    <div className="App">
        <div>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
              <main>
                {renderPage()}
              </main>
        </div> 
      <Footer></Footer>  
    </div>
  );
}

export default App;
