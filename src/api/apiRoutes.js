export const routes = {
  GET_PHOTOS: (offset, limit) => `/photos/?offset=${offset}&limit=${limit}`,
  ADD_PHOTOS: "/photos",
  GET_POSTS: "/blog-posts",
};
