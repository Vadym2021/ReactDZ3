import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import {Link} from "react-router-dom";
import css from "../SingleUserPage/SingleUserPage.module.css"

const SingleUserPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null);
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getByID(id)
            .then(value => setUser({...value}))
    }, [id, state])

    if (!user) {
        return (
            <div>
                Loading...
            </div>
        )

    }
    return (
        <div className={css.singleuserpage}>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <Link to={'posts'}>
                <button>Users Posts</button>
            </Link>
            <div>
                <Outlet/>
            </div>

        </div>

    );
};

export default SingleUserPage;

// <button onClick={onSubmit}> All User Posts </button>
// <button onClick={()=>getPosts(id)}>Details</button>