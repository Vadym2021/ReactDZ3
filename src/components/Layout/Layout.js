import React from 'react';
import {Link, Route, Outlet, NavLink} from "react-router-dom";


import css from "../Layout/Layout.module.css";


const Layout = () => {
    return (
        <>

            <div className={css.header}>l
                {/*<NavLink to="/">Home</NavLink>*/}
                <NavLink to="/users">User</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                {/*<NavLink to="/about">About</NavLink>*/}
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;