import { ADD_POST, UPDATE_POSTS, UPDATE_POSTS_LIKES } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage, getFormBody } from '../helpers/utils';
export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts(); // importing fetch posts
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}
export function createPost(content) {
  return (dispatch) => {
    const url = APIUrls.createPost();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('dATA', data);
        if (data.success) {
          dispatch(addPost(data.data.post));
        }
      });
  };
}
//TODO:Need to implement comments
export function addLike(id, likeType, userId) {
  return (dispatch) => {
    const url = APIUrls.toggleLike();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('LIKE DATA', data);
        if (data.success) {
          dispatch(addLikeToStore(id, userId));
        }
      });
  };
}
export function addLikeToStore(postId, userId) {
  return {
    type: UPDATE_POSTS_LIKES,
    postId,
    userId,
  };
}
