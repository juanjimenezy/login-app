import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Detalle from './components/CrudComponent/Detalle';

import {Route,Routes} from "react-router-dom";
import {getAuth} from 'firebase/auth';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Header /> <Home/></>,
//   },
//   {
//     path: "/Login",
//     element: <><Header /> <Login/></>,
//   },
//   {
//     path: "/Register",
//     element: <><Header /> <Register/></>,
//   },
//   {
//     path: "/Crud",
//     element: <><Header /> <Detalle/></>,
//   },
// ]);


function App() {

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  return (
    <>
        <Routes>
          <Route path="/" element={<><Header/>  <Home/></>}></Route>
          <Route path="/Login" element={<><Header/>  <Login/></>}></Route>
          <Route path="/Register" element={<><Header/>  <Register/></>}></Route>
          <Route path="/Crud" element={<><Header/>  <Detalle /></>}></Route>
        </Routes>
    </>
  );
}

export default App;
