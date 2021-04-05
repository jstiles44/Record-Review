import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postReview } from '../services/reviews';
import { getOneAlbum } from '../services/albums';
import { getAllReviews } from '../services/reviews'
import Modal from '../components/Modal';
import './AlbumReview.css'

export default function AlbumDetails(props) {
  const [open, handleOpen] = useState(false)
  const [albumItem, setAlbumItem] = useState(null);
  const [reviewItem, setReviewItem] = useState('');
  const { id } = useParams();
  const { reviews, handleDelete, currentUser } = props;

  useEffect(() => {
    const fetchAlbumItem = async () => {
      const albumData = await getOneAlbum(id);
      setAlbumItem(albumData);
    }
    fetchAlbumItem()
  
  }, [])

  // useEffect(() => {
  //   const fetchReviewItem = async () => {
  //     const reviewData = await getAllReviews(id);
  //     setReviewItem(reviewData);
  //     console.log(reviewData)
  //   }
  //   fetchReviewItem()
  // }, [])

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedReview(value)
  // }

  // const handleSubmit = async () => {
  //   const albumData = await postReview(id, selectedReview);
  //   setAlbumItem(albumData);
  // }

  return (
    <div className='reviews-div'>
      
      <div className='album-div'>
      <h3 className='reviews-title'>{albumItem?.title}</h3>
      <h4>{albumItem?.release_year}</h4>
        <img className='reviews-image' src={albumItem?.album_url} alt={albumItem?.title} />
      </div>
      
      <div className='reviews-container'>
      <h1>Reviews</h1>
      {
        albumItem?.reviews.map(review => (
          <div>{review.review}</div>

        ))
      }

      <Link to={`/albums/${albumItem?.id}/reviews/new`}>
        <button className='add-a-review'>Add a Review</button>
      </Link>
      </div>
    
      {/* <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
      
      </form> */}
    </div>
  )
}