import api from './api-config';

export const getAllReviews = async () => {
  const resp = await api.get('/album/:album_id/reviews');
  return resp.data;
}

export const postReview = async ( album_id, reviewData) => {
  const resp = await api.post(`/albums/${album_id}/reviews`, { review: reviewData });
  return resp.data;
}
