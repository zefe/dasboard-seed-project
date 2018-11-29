import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Header.css';

// const Header = props => (
//   <header className="toolbar">
//     <nav className="toolbar__navigation">
//         <div className="toolbar__toggle-button">
//             <DrawerToggleButton click={props.drawerClickHandler}/>
//         </div>
//         <div className="toolbar__title">
//             <h1>Title</h1>
//         </div>
//         <div className="toolbar_navigation-items">
//             <ul>
//                 <li><a href="/">Notifications</a></li>
//                 <li><a href="/">User</a></li>
//             </ul>
//         </div>
//     </nav>
//   </header>
// );

const Header = props => (
    <header className="header-container">
        <div className="navigation">
            <div className="menu-header"><DrawerToggleButton click={props.drawerClickHandler}/></div>
            <div className="title-header">Relativity6</div>
            <div className="notifications-header"><i class="fas fa-bell"></i></div>
            <div className="user-header"><i class="fas fa-user"></i></div>

        </div>
    </header>
);

export default Header;
