
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Footer_Bottom from './components/Footer_bottom';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <div className='Main'>
      <Header/>
      <Main/>
      <Footer/>
      </div>
      <footer>
        <Footer_Bottom/>
      </footer>
      
    </div>
  );
}

export default App;
