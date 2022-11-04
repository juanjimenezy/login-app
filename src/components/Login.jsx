import React from 'react';
// import users from '../assets/img/users.png'
import { Card, CardHeader, CardBody, FormGroup, Button } from "reactstrap";
// import Fire from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


function Login() {

  const authentication = getAuth();
  const navigate = useNavigate();

  const [registro, setRegistro] = React.useState({ email: "", password: "" });

  const loginFireBase = async () => {
    console.log('login');
    try {
      await signInWithEmailAndPassword(authentication, registro.email, registro.password).then((response) => {
        console.log(response);
        navigate("/Crud");
      });
    } catch (error){
      window.alert("error:" + error.message);
    }

  }

  const handleChange = (e) => {
    setRegistro({
      ...registro,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="my-4 justify-content-center d-flex align-items-center">
        <Card className="col-md-2 shadow-lg">
          <CardHeader>
            <h3>Login</h3>
          </CardHeader>

          <CardBody>
            <FormGroup>
              <input type="text" className="form-control" name='email' placeholder='email' value={registro.email} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <input type="password" className="form-control" name='password' placeholder='password' value={registro.password} onChange={handleChange} />
            </FormGroup>
            <div className='text-center'>
              <Button color='success' onClick={() => loginFireBase()}>Ingresar</Button>
            </div>

            <div className='text-center'>
              <a className='my-1 btn btn-primary' href='/Register' >Registrarse</a>
            </div>

          </CardBody>
        </Card>
      </div>
    </>
  );
}


export default Login;