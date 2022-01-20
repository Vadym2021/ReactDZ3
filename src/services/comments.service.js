import axios from "axios";
import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const commentService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getCommentsById: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}