import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ReviewCreate(props) {
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



  return (
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
  )
}