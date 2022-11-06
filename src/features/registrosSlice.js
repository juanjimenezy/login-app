import {createSlice} from '@reduxjs/toolkit';

const initialState  = [
    { id: "1", categoriaPrincipal: "MANTENIMIENTO INMUEBLES", tipoServicio: "ASEO", DescripcionSolicitud: "ASEO A INMUEBLE", ubicacionEmpresa: "BARRANQUILLA", fecha: "19/04/1999" }
];


const registrosSlice = createSlice({
    name: 'registros',
    initialState,
    reducers:{}
 });



 export default registrosSlice.reducer;