import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';

export default function Albums(props) {
  const [open, handleOpen] = useState(false)
  const { albums, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>Albums</h3>
      {
        albums.map(album => (
          <React.Fragment key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <h3>{album.title}</h3>
              <h5>{album.release_year}</h5>
              <img src={album.album_url} alt={album.title}/>
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
      <Link to='/albums/new'><button>Add an Album</button></Link>
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </div>
  )
}