import React from 'react';
import {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const UserPostsPage = () => {
    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);
    const {state} = useLocation()

    useEffect(() => {
        // if (state) {
        //     setUserPosts(state)
        //     return
        // }
        postService.getPostsById(id).then(value => setUserPosts([...value]))

    }, [id, state])
    console.log(setUserPosts)


    return (
        <div>
            <div>
                <h1>USER posts</h1>
                {userPosts.map(post => <Post key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export default UserPostsPage;