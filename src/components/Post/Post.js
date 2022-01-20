import React from 'react';
import {Link} from "react-router-dom";
import css from "../Post/Post.module.css"

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className={css.post}>

            {/*<Link to={id.toString()} state={post}>{title}</Link>*/}
            <div>{post.id}</div>
            <div>{post.title}</div>
            <Link to={id.toString()} state={post}>
                <button>Post Details</button>
            </Link>


        </div>
    );
};

export default Post;