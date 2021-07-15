import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,  
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading:true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load Users

    // Register User

    // Login User

    // Logout User 

    // Clear Error


  
    
    return (
        <AuthContext.Provider
            value={{
                tolen: state.token,
                user: state.user,
                loading: state.loading,
                isAuthenticated: state.isAuthenticated,
                error: state.error
        }}
        >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthState;