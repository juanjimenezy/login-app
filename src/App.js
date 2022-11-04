
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Detalle from './components/CrudComponent/detalle';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter Basename="/login-app">
        <Routes>
          <Route path="/" element={<><Header /><Home /></>}></Route>
          <Route path="/Login" element={<><Header /><Login /></>}></Route>
          <Route path="/Register" element={<><Header /><Register /></>}></Route>
          <Route path="/Crud" element={<><Header /><Detalle /></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
