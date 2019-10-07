import axios from 'axios';

export const getPosts = () => axios.get('https://qootest.com/posts?_sort=id&_order=desc');

export const getSinglePost = (id) => axios.get(`https://qootest.com/posts/${id}`);

export const getLimitPosts = (limitNumber) => axios.get(`https://qootest.com/posts?_sort=id&_order=desc&_limit=${limitNumber}`);

export const deletePost = (id) => axios.delete(`https://qootest.com/posts/${id}`);

export const updatePost = (id, title, author, body) => axios.patch(`https://qootest.com/posts/${id}`, { title, author, body });

export const addPost = (title, body, author) => axios.post('https://qootest.com/posts', { title, body, author });
