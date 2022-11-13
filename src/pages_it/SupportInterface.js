import React from 'react';
import { Outlet } from "react-router";
import SideMenuIT from './SideMenuIT.js';

const SupportInterface = () => {

    return(
        <div>
            <SideMenuIT />
            <Outlet/>
        </div>
    )


};

export default SupportInterface;