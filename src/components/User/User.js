import React from 'react';
import {Link} from "react-router-dom";
import css from "../User/User.module.css"

const User = ({user}) => {
    const {id, name} = user
    return (
        <div className={css.user}>
            {/*<Link to={id.toString()} state={user}>{name}</Link>*/}
            <div>{user.id})</div>
            <div>{user.name}</div>
            <Link to={id.toString()} state={user}>
                <button>User Details</button>
            </Link>
            <Link to={id.toString() + '/album'} state={user}>
                <button>Photo Album</button>
            </Link>

        </div>
    );
};

export default User;