import axios from "axios";

const urlApi = axios.create({
  baseURL: "http://localhost:3333",
});

export const getRepositories = async () => {
  return urlApi.get('repositories')
    .then(response => {
      return response;
    });
}

export const postRepositories = async (data) => {
  return urlApi.post('repositories', data )
    .then(response => {
      return response;
    });
}

export const deleteRepositories = async (id) => {
  return urlApi.delete(`repositories/${id}`)
    .then(response => {
      return response;
    });
}

export const putRepositories = async (data) => {
  return urlApi.put(`repositories/${data.id}`, data)
    .then(response => {
      return response;
    });
}

