import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Header.css';

const Header = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__logo"><a href="/">LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Notifications</a></li>
                <li><a href="/">User</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Header;
