import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import AlbumCreate from '../screens/AlbumCreate';
import AlbumDetails from '../screens/AlbumDetails';
import AlbumEdit from '../screens/AlbumEdit';
import Albums from '../screens/Albums';

import { getAllReviews } from '../services/reviews';
import { destroyAlbum, getAllAlbums, postAlbum, putAlbum } from '../services/albums';

export default function AlbumsContainer(props) {
  const [reviews, setReviews] = useState([]);
  const [albums, setAlbums] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getAllReviews();
      setReviews(reviewData);
    }
    fetchReviews();
  }, [])

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumData = await getAllAlbums();
      setAlbums(albumData);
    }
    fetchAlbums();
  }, [])

  const handleCreate = async (albumData) => {
    const newAlbum = await postAlbum(albumData);
    setAlbums(prevState => [...prevState, newAlbum]);
    history.push('/albums');
  }

  const handleUpdate = async (id, albumData) => {
    const updatedAlbum = await putAlbum(id, albumData);
    setAlbums(prevState => prevState.map(album => {
      return album.id === Number(id) ? updatedAlbum : album
    }))
    history.push('/albums');
  }

  const handleDelete = async (id) => {
    await destroyAlbum(id);
    setAlbums(prevState => prevState.filter(album => album.id !== id))
  }

  return (
    <Switch>
      
      <Route path='/albums/new'>
        <AlbumCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/albums/:id/edit'>
        <AlbumEdit
          albums={albums}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/albums/:id'>
        <AlbumDetails
          reviews={reviews}
          albums={albums}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/albums'>
        <Albums
          albums={albums}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}