import * as types from './actionTypes';

export function fetchRequest(){
	return {
		type: types.FETCH_REQUEST
	};
}
  
export function fetchSuccess(data) {
	return {
        type: types.FETCH_SUCCESS,
		data
	};
}
  
export function fetchError() {
    console.log("fetchError");
	return {
		type: types.FETCH_ERROR
	};
}

// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
    console.log("handleErrors", response);
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}