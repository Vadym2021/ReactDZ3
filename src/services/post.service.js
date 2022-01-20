import axios from "axios";
import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getByID: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getPostsById: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)

}