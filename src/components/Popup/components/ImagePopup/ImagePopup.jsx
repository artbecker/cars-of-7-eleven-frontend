import Popup from '../../Popup.jsx';

export default function ImagePopup(props) {
  const { card, onClose } = props;

  return (
    <>
      <img className='popup__image' src={card.link} alt={card.name} />
      <span className='popup__image-title'>{card.name}</span>
    </>
  );
}
