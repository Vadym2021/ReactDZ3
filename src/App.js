import React from 'react';

import {Routes, Route, Link} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import PostCommentPage from "./pages/PostCommentPage/PostCommentPage";
import AlbumsPage from "./pages/AlbomsPage/AlbumsPage";
import AlbumPhotos from "./pages/AlbumPhotos/AlbumPhotos";

function App() {


    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}>
                                <Route path={':postid'} element={<SinglePostPage/>}/>
                            </Route>
                        </Route>
                        <Route path={':id/album'} element={<AlbumsPage/>}>
                            <Route path={':id'} element={<AlbumPhotos/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<PostCommentPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>


        </div>
    );
};

export default App;
