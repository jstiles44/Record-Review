import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AlbumEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    release_year: 0,
    album_url: ''
  })
  const { title, release_year, album_url } = formData;
  const { id } = useParams();
  const { albums, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const albumItem = albums.find(album => album.id === Number(id));
      setFormData({
        title: albumItem.title,
        release_year: albumItem.release_year,
        album_url: albumItem.album_url,
      })
    }
    if (albums.length) {
      prefillFormData()
    }
  }, [albums, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Food</h3>
      <label>
       Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>
       Release Year:
        <input
          type='text'
          name='release_year'
          value={release_year}
          onChange={handleChange}
        />
      </label>
      <label>
       Album Art Link:
        <input
          type='text'
          name='album_url'
          value={album_url}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}