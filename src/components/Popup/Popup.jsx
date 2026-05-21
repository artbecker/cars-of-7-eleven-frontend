export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className='popup'>
      <div className='popup__container'>
        {children}
        <button
          aria-label='Close modal'
          className='close-button popup__close-button'
          type='button'
          onClick={onClose}
        />
      </div>
    </div>
  );
}
