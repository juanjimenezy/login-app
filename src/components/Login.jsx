import React from 'react';
// import users from '../assets/img/users.png'
import { Card, CardHeader, CardBody,Form, FormGroup, Button } from "reactstrap";
// import Fire from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLogin } from '../features/loginSlice';


function Login() {

  const authentication = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registro, setRegistro] = React.useState({ email: "", password: "" });

  const loginFireBase = async () => {
    try {
      await signInWithEmailAndPassword(authentication, registro.email, registro.password).then(
        (response) => {
          dispatch(addLogin({ isLogged: true, usuario: response._tokenResponse.email, token: response._tokenResponse.idToken }));
          navigate("/Crud");
        }
      );
    } catch (error) {
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
            <Form>
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
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}


export default Login;