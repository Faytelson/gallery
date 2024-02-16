export const routes = {
  GET_PHOTOS: (offset, limit) => `/photos/?offset=${offset}&limit=${limit}`,
  ADD_PHOTOS: "/photos",
  GET_POSTS: (offset, limit) => `/blog-posts/?offset=${offset}&limit=${limit}`,
  GET_POST: (id) => `/blog-posts/${id}`
};
