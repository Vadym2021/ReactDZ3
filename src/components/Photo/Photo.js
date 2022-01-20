import React from 'react';
import css from "../Photo/Photo.module.css"
import {Outlet} from "react-router-dom";


const Photo = ({photo}) => {
    return (
        <div className={css.photo}>
            {/*<Link to={id.toString()} state={user}>{name}</Link>*/}
            <div>{photo.id})</div>

            <img src={photo.thumbnailUrl} alt=""/>


        </div>
    );
};

export default Photo;