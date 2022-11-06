import {createSlice} from '@reduxjs/toolkit';

var initialState  = {isLogged: false, usuario: "",token: ""};

const loginSlice = createSlice({
    
    name: "login",
    initialState : initialState,
    reducers: {
        addLogin: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.usuario = action.payload.usuario;
            state.token = action.payload.token;

          },
          logout: (state,action) => {
            state.isLogged = "";
            state.usuario = "";
            state.token = "";
          }
    }

});


export const {addLogin} = loginSlice.actions;
export default loginSlice.reducer;