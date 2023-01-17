import axios from "axios";

export const getPostsRequest = async () => 
  await axios.get("/posts");

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post("/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePostRequest = async (id) =>
  await axios.delete("/posts/" + id);

export const getPostRequest = async (id) => 
  await axios.get("/posts/" + id);

export const updatePostRequest = async (id, newFields) =>
  await axios.put(`/posts/${id}`, newFields);
