import { UPDATE_POSTS } from './actionTypes';
import { APIUrls } from '../helpers/urls';
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
