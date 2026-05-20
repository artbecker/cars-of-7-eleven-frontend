import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Main from './Main/Main.jsx';
import api from '../utils/api.js';

function App() {
  // api hooks
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  // api logic

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((error) => {
        console.error('Erro ao buscar cartões:', error);
      });
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  // page

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route
          path='*'
          element={
            <Main
              onOpenPopup={handleOpenPopup}
              onClosePopup={handleClosePopup}
              popup={popup}
              cards={cards}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
