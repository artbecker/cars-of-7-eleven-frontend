import { useContext } from 'react';
import Popup from '../Popup/Popup.jsx';
import EditProfile from '../Popup/components/EditProfile/EditProfile.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

export default function Main(props) {
  const { onOpenPopup, onClosePopup, popup } = props;
  const { currentUser } = useContext(CurrentUserContext);

  const editProfilePopup = {
    title: 'Edit Profile',
    children: <EditProfile />,
  };

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__data'>
          <h1 className='profile__name'>{currentUser.name}</h1>
          <button
            aria-label='Edit profile'
            className='edit-button profile__edit-button'
            type='button'
            onClick={() => onOpenPopup(editProfilePopup)}
          />
          <p className='profile__description'>{currentUser.about}</p>
        </div>
      </section>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
