import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Pages/Spinner/Spinner';

const PrivetRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Spinner></Spinner>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
};

export default PrivetRoute;