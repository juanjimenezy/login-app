import React from 'react';
// import users from '../assets/img/users.png'
import { Card, CardHeader, CardBody, FormGroup, Button } from "reactstrap";


function Login() {

  return (
    <>
      <div className="my-4 justify-content-center d-flex align-items-center">
        <Card className="col-md-2 shadow-lg">
          <CardHeader>
            <h3>Login</h3>
          </CardHeader>

          <CardBody>
            <FormGroup>
              <input type="text" className="form-control" name='user' placeholder='username'/>
            </FormGroup>

            <FormGroup>
              <input type="password" className="form-control" name='password' placeholder='password'/>
            </FormGroup>
            <div className='text-center'>
              <Button color='success' >Ingresar</Button>
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