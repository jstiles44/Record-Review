import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='login-div'>
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3 className='login-title'>Login</h3>
      <label className='username-login'>
        Username:
        <input
          className='login-input'
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className='password-login'>
        Password:
        <input
          className='login-input'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link className='sign-up-login' to='/sign-up'>Sign Up</Link>
      <button>Submit</button>
      </form>
      </div> 
  )
}