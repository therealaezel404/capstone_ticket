import React from 'react';
import { Outlet } from "react-router";
import SideMenuHelp from './SideMenuHelp.js';

const HelpDeskInterface = () => {

    return(
        <div>
            <SideMenuHelp />
            <Outlet/>
        </div>
    )


};

export default HelpDeskInterface;