import React from 'react';
import { Card, CardHeader, CardBody, FormGroup, Button } from "reactstrap";
import {app} from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Register() {
    const authentication = getAuth();
    const navigate = useNavigate();

    const [registro, setRegistro] = React.useState({email: "", password: ""});

    const handleChange = (e) => {
        setRegistro({
          ...registro,
          [e.target.name]: e.target.value,
        });
    };

    const registrar = async () => {
        console.log(app);
        try {
            await createUserWithEmailAndPassword(authentication, registro.email, registro.password).then((response) => {
                console.log(response);
                navigate("/Login");
            });
            
        } catch (error) {
            window.alert("error:" + error.message);

        }
        
    }


    return (
        <>
        <div className="my-4 justify-content-center d-flex align-items-center">
          <Card className="col-md-2 shadow-lg">
            <CardHeader>
              <h3>Register</h3>
            </CardHeader>
  
            <CardBody>
              <FormGroup>
                <input type="text" className="form-control" name='email' placeholder='email' value={registro.email} onChange={handleChange}/>
              </FormGroup>
  
              <FormGroup>
                <input type="password" className="form-control" name='password' placeholder='password' value={registro.password} onChange={handleChange}/>
              </FormGroup>
              <div className='text-center'>
                <Button onClick={() => registrar()}>Registrarse</Button>
              </div>
              <div className='my-1 text-center'>
                <a href='/Login' className='btn btn-primary'>¿Ya eres usuario?</a>
              </div>
  
            </CardBody>
          </Card>
        </div>
      </>
    );
}


export default Register;