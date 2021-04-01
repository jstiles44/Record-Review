import api from './api-config';

export const getAllAlbums = async () => {
  const resp = await api.get('/albums');
  return resp.data;
}

export const getOneAlbum = async (id) => {
  const resp = await api.get(`/albums/${id}`);
  return resp.data;
}

export const postAlbum = async (albumData) => {
  const resp = await api.post('/albums', albumData );
  return resp.data;
}

export const putAlbum = async (id, albumData) => {
  const resp = await api.put(`/albums/${id}`, { album: albumData });
  return resp.data;
}

export const destroyAlbum = async (id) => {
  const resp = await api.delete(`/albums/${id}`);
  return resp;
}