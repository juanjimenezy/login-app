import {createSlice} from '@reduxjs/toolkit';


const initialState  = [{isLogged: true, usuario: "JUAN",token: "" }]



const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {}

});


export default loginSlice.reducer;