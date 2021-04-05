import { useState } from 'react'
import './AlbumCreate.css'

export default function AlbumCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    release_year: 0,
    album_url: '',
    user_id: props.currentUser.id
  })
  const { title, release_year, album_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='add-album-container'>
    <form className='add-album-form' onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3 className='add-an-album'>Add an Album</h3>
      <label className='add-title'>
          Title:
        <input
          className='add-input'
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label className='add-release-year'>
          Release Year:
        <input
          className='add-input'
          type='text'
          name='release_year'
          value={release_year}
          onChange={handleChange}
        />
      </label>
      <label className='add-album-art'>
          Album Art Link:
        <input
          className='add-input'
          type='text'
          name='album_url'
          value={album_url}
          onChange={handleChange}
        />
      </label>
      <button className='add-submit'>Submit</button>
      </form>
      </div>
  )
}
