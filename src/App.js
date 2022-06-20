//import logo from './logo.svg';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav>
        </Nav>
      <main>
        <>
          <Portfolio></Portfolio>
          <About></About>
        </>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
