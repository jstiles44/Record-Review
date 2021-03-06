import React from 'react';
import { Link, UseHistory } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav-div">
      <header className="nav-header">
        <Link className='record-review-link' to='/albums'>
          <h1 className='record-review'>Record Review</h1>
        </Link>
        {
          currentUser ?
            <div className='header-div'>
              <p className="username">{currentUser.username}</p>
              <button className="logout" onClick={handleLogout}>Logout</button>
              
            </div>
            :
            <Link className='login-sign-up' to='/login'>Login/Sign Up</Link>
        }
      </header>
      <hr className="break" />
      {props.children}
    </div>
  )
}