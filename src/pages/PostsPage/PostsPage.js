import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "../PostsPage/Postpage.module.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={css.postpage}>
            <div className={css.postpagecell}>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={css.postpagecell}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;