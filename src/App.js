import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { FooterContainer } from './containers/footer'
import Slider from './components/Slider/Slider';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <FooterContainer />
    </div>



  );
}

export default App;
