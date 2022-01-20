import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/comments.service";
import Post from "../../components/Post/Post";
import {useParams} from "react-router-dom";
import Comment from "../../components/Comment/Comment";

const PostCommentPage = () => {
    const {id} = useParams();
    const [postComments, setPostComments] = useState([])


    useEffect(() => {
        commentService.getCommentsById(id).then(value => setPostComments([...value]))
    }, [id])
    console.log(postComments)

    return (
        <div>
            {/*<h1>POST Comments</h1>*/}
            {/*<div>Id: {postComments.id}</div>*/}
            {/*<div>name: {postComments.name}</div>*/}
            {/*<div>email: {postComments.email}</div>*/}
            {/*<div>body: {postComments.body}</div>*/}
            {postComments.map(comment => <Comment key={comment.id} comment={comment}/>)}


        </div>
    );
};

export default PostCommentPage;