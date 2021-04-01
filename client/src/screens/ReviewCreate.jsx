import { useState } from 'react'

export default function ReviewCreate(props) {
  const [formData, setFormData] = useState({
    review: ''
  })
  const { review } = formData;
  const { handleCreateReview } = props;

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
      handleCreateReview(formData);
    }}>
      <h3>Write a Review</h3>
      <label>
       Review:
        <input
          type='text'
          name='review'
          value={review}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}