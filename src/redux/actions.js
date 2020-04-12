import { getRepositories, postRepositories, deleteRepositories, putRepositories } from '../services/api';

export const ADD_REPOSITORY = "ADD_REPOSITORY";
export const REMOVE_REPOSITORY = "REMOVE_REPOSITORY";
export const PUT_REPOSITORY = "PUT_REPOSITORY";
export const GET_REPOSITORIES = "GET_REPOSITORIES";


export const getAllRepositories = () => {
    const request = getRepositories();
    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_REPOSITORIES,
                payload: response.data
            })
        });
}

export const addRepositories = (newData, repositories) => {
    const request = postRepositories(newData);
    return (dispatch) =>
        request.then((response) => {
            const { data } = response
            const res = repositories.concat(data);
            dispatch({
                type: ADD_REPOSITORY,
                payload: res
            })
        });
}

export const removeRepositories = (id, repositories) => {
    const request = deleteRepositories(id);
    return (dispatch) =>
        request.then(() => {
            const data = repositories.data.filter(item => item.id !== id)
            dispatch({
                type: REMOVE_REPOSITORY,
                payload: data
            })
        });
}

export const editRepositories = (newData, oldData, repositories) => {
    putRepositories(newData);
    return (dispatch) => {
        if (oldData) {
            const data = [...repositories.data];
            data[data.indexOf(oldData)] = newData;
            dispatch({
                type: PUT_REPOSITORY,
                payload: data
            })
        }
    }
}
