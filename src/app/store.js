import {configureStore} from '@reduxjs/toolkit';
import registrosReducer from '../features/registrosSlice'
import loginReducer from '../features/loginSlice';

export const store = configureStore({
    reducer:{
        login: loginReducer,
        registros: registrosReducer,
        
    }
    

})