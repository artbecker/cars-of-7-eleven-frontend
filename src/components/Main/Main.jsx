import { useState } from 'react';
import Popup from '../Popup/Popup.jsx';
import Card from '../Card/Card.jsx';

export default function Main(props) {
  const { onOpenPopup, onClosePopup, popup, cards } = props;
  const [visibleCards, setVisibleCards] = useState(3);

  return (
    <main className='content'>
      <section className='intro'>
        <h1 className='intro__title'>Welcome to Cars of 7-ELEVEn</h1>
        <p className='intro__text'>
          This is the virtual parking lot for the 7-Eleven car community.
        </p>
        <p className='intro__text'>
          Post your ride on Tumblr using the tag #CarsOf7Eleven to get featured
        </p>
        <button
          className='button'
          onClick={() => {
            document
              .getElementById('gallery')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore the parking lot:
        </button>
      </section>
      <ul id='gallery' className='gallery'>
        {cards.slice(0, visibleCards).map((card) => (
          <Card key={card._id} card={card} onImageClick={onOpenPopup} />
        ))}
      </ul>
      {visibleCards < cards.length && (
        <button
          className='button'
          onClick={() => {
            setVisibleCards((prev) => prev + 3);
          }}
        >
          Show more
        </button>
      )}
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
