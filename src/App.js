
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Detalle from './components/CrudComponent/detalle';

import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>}>a</Route>
          <Route path="/Login" element={<Login/>}>b</Route>
          <Route path="/Register" element={<Register/>}>c</Route>
          <Route path="/Crud" element={<Detalle />}>d</Route>
        </Routes>
    </>
  );
}

export default App;
