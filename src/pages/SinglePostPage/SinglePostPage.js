import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import css from "../SinglePostPage/SinglePostPage.module.css"

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getByID(id).then(value => setPost({...value}))
    }, [id, state]);

    return (
        <div className={css.singlepostpage}>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <Link to={'comments'}>
                        <button>Post Comments</button>
                    </Link>
                </div>
            )}
            <div className={css.singlepostpage}>
                <Outlet/>
            </div>
        </div>
    );
};

export default SinglePostPage;