import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import {Outlet} from 'react-router-dom';
import css from "../UsersPage/UseerPage.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll.then(value => setUsers([...value]))
    }, [])

    return (
        <div className={css.userpage}>
            <div className={css.userpagecell}>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={css.userpagecell}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;