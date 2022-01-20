import React from 'react';

import {Link} from "react-router-dom";
import css from "../Album/Album.module.css"


const Album = ({album}) => {
    const {id, title} = album


    return (
        <div className={css.album}>
            <div className={css.album}>
                {/*<Link to={id.toString()} state={user}>{name}</Link>*/}
                <div>{album.id})</div>
                <div>{album.title}</div>
                <Link to={id.toString()}>
                    <button>Album Photos</button>
                </Link>
                {/*<Link to={id.toString() + '/album'} state={user}><button>Photo Album</button></Link>*/}

            </div>
        </div>
    );
};

export default Album;