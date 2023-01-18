import axios from "axios";
import { URL } from "../App";

export const getPostsRequest = async () => 
  await axios.get(`${URL}/posts`);

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(`${URL}/posts`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePostRequest = async (id) =>
  await axios.delete(`${URL}/posts/` + id);

export const getPostRequest = async (id) => 
  await axios.get(`${URL}/posts/` + id);

export const updatePostRequest = async (id, newFields) =>
  await axios.put(`${URL}/posts/${id}`, newFields);
