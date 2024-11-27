import QueryString from 'qs';
import axiosApi from './client';

export const writePost = ({ title, body, tags }) => {
  return axiosApi.post('/api/posts', { title, body, tags });
};

export const readPost = (id) => {
  return axiosApi.get(`/api/posts/${id}`);
};

export const listPosts = ({ page, username, tag }) => {
  const queryString = QueryString.stringify({
    page,
    username,
    tag,
  });
  return axiosApi.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) => {
  return axiosApi.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });
};

export const removePost = (id) => {
  return axiosApi.delete(`/api/posts/${id}`);
};
