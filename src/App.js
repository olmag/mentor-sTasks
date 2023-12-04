import React, {useState} from "react";

import './App.css';
import AlbumsPage from './components/AlbumsPage/AlbumsPage';


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="App">
      <div>
        { modalOpen === true ?(
          <AlbumsPage
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          />
        ) : (
          <button className="button-albums" onClick={handleButtonClick}>Відкрити альбоми</button>
        )}
      </div>
    </div>
  );
}

export default App;
