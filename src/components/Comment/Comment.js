import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, body} = comment
    return (
        <div>
            <div>{comment.id}</div>
            <div>{comment.body}</div>

        </div>
    );
};

export default Comment;