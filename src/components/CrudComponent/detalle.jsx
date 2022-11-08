import React from "react";
import { Container, Table, Button } from "reactstrap";
import { useSelector } from "react-redux";

function Detalle() {
    const registros = useSelector((state) => state.registros);

    // const [registro, setRegistro] = React.useState({id: "", categoriaPrincipal: "", tipoServicio: "", DescripcionSolicitud: "", ubicacionEmpresa: "", fecha: ""});
    return(
        <>
            <div className='my-2 text-center'>
                <Container>
                    <div className='my-5 text-center'>
                        <Table>
                            <thead>
                                <tr>
                                    {/* <th>Id</th> */}
                                    <th>Categoria Principal</th>
                                    <th>Tipo Servicio</th>
                                    <th>Descripcion de solicitud</th>
                                    <th>Ubicacion de la empresa</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {registros.map((dato, key) => (
                                    <tr key={key}>
                                        <td>{dato.categoriaPrincipal}</td>
                                        <td>{dato.tipoServicio}</td>
                                        <td>{dato.DescripcionSolicitud}</td>
                                        <td>{dato.ubicacionEmpresa}</td>
                                        <td>{dato.fecha}</td>
                                        <td><Button className="btn-sm" color='secondary'><i className="bi bi-pencil-square"></i></Button>
                                            {" "}
                                            <Button className="btn-sm" color='danger'><i className="bi bi-trash"></i></Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </>
    );

}


export default Detalle;