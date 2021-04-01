import { useState } from 'react'

export default function AlbumCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    release_year: 0,
    album_url: ''
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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Add an Album</h3>
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
