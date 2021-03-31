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
      <h3>Add Album</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}