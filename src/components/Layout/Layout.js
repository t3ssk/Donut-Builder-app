import React from 'react';
import classes from './Layout.module.css'


export const Layout = (props) => {
    return(<React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </React.Fragment>)
}