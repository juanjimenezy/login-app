
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Detalle from './components/CrudComponent/detalle';

import {  createBrowserRouter,  RouterProvider} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
              <Header/>
              <Home/>
              </>
    },
    {
      path: "/Login",
      element: <>
                <Header/>
                <Login/>
                </>
    },
    {
      path: "/Register",
      element: <>
                <Header/>
                <Register/>
                </>
    },
    {
      path: "/Crud",
      element: <>
                <Header/>
                <Detalle/>
                </>
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
