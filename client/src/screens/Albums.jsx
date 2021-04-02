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
            <Link to={`/albums/${album.id}`}>
              <div className='album-container'>
              <h3 className='album-title'>{album.title}</h3>
              <h5 className='release-year'>{album.release_year}</h5>
                <img className="album-image" src={album.album_url} alt={album.title} />
                </div>
            </Link>
            {/* {
              currentUser?.id === album.user_id &&
              <>
                <Link to={`/albums/${album.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleOpen(album.id)}>delete</button>
              </>
            } */}
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
    <Link to='/albums/new'><button>Add an Album</button></Link>
      </div>
      </>
  )
}