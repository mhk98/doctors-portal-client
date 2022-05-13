import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Home/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
