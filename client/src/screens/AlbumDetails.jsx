import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postReview } from '../services/reviews';
import { getOneAlbum } from '../services/albums';
import Modal from '../components/Modal';
import './AlbumDetails.css'

export default function AlbumDetails(props) {
  const [open, handleOpen] = useState(false)
  const [albumItem, setAlbumItem] = useState([]);
  const [selectedReview, setSelectedReview] = useState('');
  const { id } = useParams();
  const { albums, handleDelete, currentUser } = props;

  useEffect(() => {
    const fetchAlbumItem = async () => {
      const albumData = await getOneAlbum(id);
      setAlbumItem(albumData);
    }
    fetchAlbumItem()
    console.log(albumItem)
  }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedReview(value)
  }

  const handleSubmit = async () => {
    const albumData = await postReview(id, selectedReview);
    setAlbumItem(albumData);
  }

  return (
    <div className='details-container'>
      
      <h3 className='details-title'>{albumItem.title}</h3>
      <h4>{albumItem.release_year}</h4>
      <img className='details-image'src={albumItem.album_url} alt={albumItem.title} />
      <Link className='reviews-button' to={`/albums/${albumItem.id}/reviews`}><button>Reviews</button></Link>
      
      {
              currentUser?.id === albumItem.user_id &&
              <>
                <Link className='edit-button' to={`/albums/${albumItem.id}/edit`}><button>Edit</button></Link>
                <button className='delete-button' onClick={() => handleOpen(albumItem.id)}>delete</button>
              </>
            }
       {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
        
    
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
      
      </form>
    </div>
  )
}