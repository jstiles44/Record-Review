import { useState } from 'react';
import './SignUp.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='sign-up-div'>
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleSignUp(formData);
    }}>
      <h3 className='sign-up-title'>Sign Up</h3>
      <label className='username-sign-up'>
        Username:
        <input
          className='sign-up-input'
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className='email-sign-up'>
        Email:
        <input
          className='sign-up-input'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className='password-sign-up'>
        Password:
        <input
          className='sign-up-input'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
      </form>
      </div>
  )
}