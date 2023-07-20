import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';

const Privateroute = () => {
  
    let loggedin = true;

    if(loggedin) {
        return <Outlet />
    }
    else{
        return <Navigate to={"/"} />
    }
}

export default Privateroute