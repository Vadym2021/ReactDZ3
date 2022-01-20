import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import {Outlet, useParams} from "react-router-dom";
import Photo from "../../components/Photo/Photo";
import css from "../AlbumPhotos/AlbumPhotos.module.css"


const AlbumPhotos = () => {

    const {id} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumService.getPhotoByAlbumsId(id).then(value => setPhotos([...value]))
    }, [id])

    return (
        <div className={css.albumphotos}>
            <div>
                <h1>Photos</h1>
                {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
            </div>

        </div>
    );
};

export default AlbumPhotos;