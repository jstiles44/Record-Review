import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postReview } from '../services/reviews';
import { getOneAlbum } from '../services/albums';

export default function AlbumDetails(props) {
  const [albumItem, setAlbumItem] = useState([]);
  const [selectedReview, setSelectedReview] = useState('');
  const { id } = useParams();
  const { albums } = props;

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
    <div>
      
        <h3>{albumItem}</h3>
        
      {/* <h3>{albumItem.album_art}</h3> */}
      {/* {albumItem?.map(album => (
        <p key={album.id}>{album.title}</p>
      ))} */}
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        {/* <select onChange={handleChange} defaultValue='default'>
          <option value='default' disabled>-- Select a flavor --</option>
          {reviews.map(review => (
            <option value={review.id}>{review}</option>
          ))}
        </select> */}
        <button>add</button>
      </form>
    </div>
  )
}