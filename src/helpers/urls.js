const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2';
export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  sugnup: () => `${API_ROOT}/users/signup`,
  editProfile: () => `${API_ROOT}/users/edit`,

  fetchPosts: (
    page = 1,
    limit = 5 // here we can create call this function dynamically bby passing page and limits
  ) =>
    // this will return this url and when we called this function in thr post
    `${API_ROOT}/posts?page=${page}&limit=${limit}`,
};
