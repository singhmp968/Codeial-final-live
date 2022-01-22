const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2';
export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  sugnup: () => `${API_ROOT}/users/signup`,
  editProfile: () => `${API_ROOT}/users/edit`,

  fetchPosts: (
    page = 1,
    limit = 25 // here we can create call this function dynamically bby passing page and limits
  ) =>
    // this will return this url and when we called this function in thr post
    `${API_ROOT}/posts?page=${page}&limit=${limit}`,
  userProfile: (userId) => `${API_ROOT}/users/${userId}`,
  // for friend list
  userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
  addFriend: (userId) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
  removeFriend: (userId) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
  createPost: () => `${API_ROOT}/posts/create`,
  toggleLike: (id, likeType) =>
    `${API_ROOT}/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`,
  userSearch: (searchText) => `${API_ROOT}/users/search?text=${searchText}`,
};
