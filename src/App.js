
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FooterBottom from './components/Footer_bottom';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <div className='container'>

        <Header/>
        <Main/>
        <Footer/>
      </div>
      <footer>
        <FooterBottom/>
      </footer>
    </div>
  );
}

export default App;
