import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';
import './Albums.css';

export default function Albums(props) {
  const [open, handleOpen] = useState(false)
  const { albums, handleDelete, currentUser } = props;
  return (
    <>
      <div className='header-title'>
        <h3 className='header'>Albums</h3>
        </div>
    <div className='albums'>
    
      {
        albums.map(album => (
          <React.Fragment key={album.id}>
            <Link className='album-link' to={`/albums/${album.id}`}>
              <div className='album-container'>
              <h3 className='album-title'>{album.title}</h3>
              <h5 className='release-year'>{album.release_year}</h5>
                <img className="album-image" src={album.album_url} alt={album.title} />
                </div>
            </Link>
         
          </React.Fragment>
        ))
      }
      <br />
      
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </div>
    <div className="add-button-div">
    <Link to='/albums/new'><button className='add-album-button'>Add an Album</button></Link>
      </div>
      </>
  )
}