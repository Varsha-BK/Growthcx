import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Whyuscx from './components/Whyuscx';
import FullService from './components/FullService';
import Navmenu from './components/Navmenu';

function App() {
  return (
    <BrowserRouter>
    <Navmenu/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/whyus' exact element={<Whyuscx/>}/>
      <Route path='/fullservice' exact element={<FullService/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>  
);
}

export default App;
