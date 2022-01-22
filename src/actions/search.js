import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { FETCH_SEARCH_RESULTS_SUCCESS } from './actionTypes';

export function searchUsers(searchText) {
  // async function as we are makink api request
  return (dispatch) => {
    const url = APIUrls.userSearch(searchText);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('search datas_comming', data);
        if (data.success) {
          dispatch(searchResultSuccess(data.data.users));
        } else {
          dispatch(searchResultSuccess([]));
        }
      });
  };
}
export function searchResultSuccess(users) {
  return {
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    users,
  };
}
