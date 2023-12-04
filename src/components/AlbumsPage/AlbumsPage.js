import React, { useState, useEffect } from "react";
import getAllAlbums from "../../getAllAlbums";
import getPhotosByAlbum from "../../getPhotosByAlbum";
import "./AlbumsPage.css"

function AlbumsPage({modalOpen, setModalOpen}) {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(0);

  const getAlbums = async () => {
      const albums = await getAllAlbums();
      setAlbums(albums);
  };

  useEffect(() => {
      getAlbums();
  }, []);
  
  const handleAlbumClick = (albumID) => {
    setSelectedAlbumId(() => {
      return albumID;
    })
  };

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await getPhotosByAlbum(selectedAlbumId);
      setPhotos(photos);
    };
  
    getPhotos(); 
  }, [selectedAlbumId]); 

  const handleButtonCloseClick = () => {
    setModalOpen(false);
  };

  const handleBackClick = () => {
    setPhotos([]);
  };

  const showAlbums = albums.map(({ id, title }) => (
    <div key={id} className="folder-container" onClick={() => handleAlbumClick(id)}>
      <div className="folder-content"></div>
      <h3 className="folder-text">{title}</h3>
    </div>
  ));

  const showphotos = photos.map(({id, thumbnailUrl, title}) => (
    <div key={id}>
      <img src={thumbnailUrl} alt={title} />
    </div>
  ));
  
  return (
    <div className="container">
      <div className="fixed-container">
          <button
            className="button close-button"
            onClick={handleButtonCloseClick}
          >
            &#10005;
          </button>
          {photos.length >= 1 ? 
          (<button
            className="button back-button"
            onClick={handleBackClick}
          >
            &#9664;
          </button>) : null }
      </div>
      <div className="folder-frame">
        {photos.length >= 1 ? showphotos : showAlbums}
      </div>
    
    </div>
  );
}

export default AlbumsPage;