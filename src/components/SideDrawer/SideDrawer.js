import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer open';
    if(props.show) {
        drawerClasses = 'side-drawer ';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href="#/">Home</a>
                </li>
                <li>
                    <a href="#/">Dashboard</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;