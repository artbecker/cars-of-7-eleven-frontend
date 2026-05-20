import { useState } from 'react';
import ImagePopup from '../Popup/components/ImagePopup/ImagePopup.jsx';
import Stripes from '../Stripes/Stripes.jsx';
import compactLogo from '../../images/logo-compact.svg';

export default function Card(props) {
  const { name, author, link } = props.card;
  const { onImageClick } = props;
  const [isLiked, setIsLiked] = useState(false);
  const cardLikeButtonClassName = `like-button ${isLiked ? 'like-button_active' : ''}`;

  function handleImageClick() {
    const imageComponent = {
      title: null,
      children: <ImagePopup card={props.card} />,
    };
    onImageClick(imageComponent);
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <li className='card'>
      <div className='card__header'>
        <h2 className='card__author'>@{author}</h2>
        <div className='card__stripes-container'>
          <Stripes />
        </div>
        <img className='card__logo' src={compactLogo} alt='7-Eleven logo' />
      </div>
      <img
        className='card__image'
        src={link}
        alt={name}
        onClick={handleImageClick}
      />
      <div className='card__footer'>
        <h2 className='card__title'>{name}</h2>
        <button
          aria-label='Like card'
          className={cardLikeButtonClassName}
          type='button'
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
