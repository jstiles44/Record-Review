import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneAlbum } from '../services/albums';
import './ReviewCreate.css'

export default function ReviewCreate(props) {
  const [albumItem, setAlbumItem] = useState(null);
  const [formData, setFormData] = useState({
    review: ''
  })
  const { review } = formData;
  const { handleCreateReview } = props;
  const { id } = useParams()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    const fetchAlbumItem = async () => {
      const albumData = await getOneAlbum(id);
      setAlbumItem(albumData);
    }
    fetchAlbumItem()
  
  }, [])



  return (
<div className='add-review-div'>
    <div className='album-div'>
    <h3 className='reviews-title'>{albumItem?.title}</h3>
    <h4>{albumItem?.release_year}</h4>
      <img className='reviews-image' src={albumItem?.album_url} alt={albumItem?.title} />
      </div>
      <div className='review-form'>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreateReview(id, formData);
    }}>
      <h3>Write a Review</h3>
      <label>
       Review:
        <textarea
          type='text'
          name='review'
          value={review}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
        </form>
        </div>
      </div>
  )
}