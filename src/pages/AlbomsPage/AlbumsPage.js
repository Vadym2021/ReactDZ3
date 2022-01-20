import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import css from "../AlbomsPage/AlbumPage.module.css"
import {Outlet, useParams} from "react-router-dom";
import Album from "../../components/Album/Album";


const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAlbumsById(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={css.albumpage}>
            <div className={css.albumpagecell}>
                <h1>Albums</h1>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
            <div className={css.albumpagecell}>
                <Outlet/>
            </div>
        </div>
    );
};

export default AlbumsPage;