import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    return (
        <nav className="side-drawer">
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