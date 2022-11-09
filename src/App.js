import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Detalle from './components/CrudComponent/Detalle';

import {Route,Routes,Navigate } from "react-router-dom";
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

  
  //console.log(user);

  return (
    <>
        <Routes>
          <Route path="/" element={<><Header/>  <Home/></>}></Route>
          <Route path="/Login" element={<><Header/>  <Login/></>}></Route>
          <Route path="/Register" element={<><Header/>  <Register/></>}></Route>
          <Route path="/Crud" element={<PrivateRoute><Header/>  <Detalle /></PrivateRoute>}></Route>
          
        </Routes>
    </>
  );


  function PrivateRoute({ children }){
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    return user ? children : <Navigate to="/Login" />;
  }


}

export default App;
