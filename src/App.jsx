import './App.css';
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='bg-dark'>      
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
