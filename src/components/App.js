import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setIsSelectedCard] = React.useState({ name: '', link: '' });

  function handleEditProfilePopupOpen() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlacePopupOpen() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsSelectedCard({ name: '', link: '' })
  }

  function handleCardClick(card) {
    setIsSelectedCard(card)
  }

  return (
    <>

      <Header />
      <Main
        onEditProfile={handleEditProfilePopupOpen}
        onAddPlace={handleAddPlacePopupOpen}
        onEditAvatar={handleEditAvatarPopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* <!-- PROFILE modal window --> */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input className="popup__input-text popup__input-text_type_name" required
              minLength="2" maxLength="40" name="profileName" type="text" placeholder="Имя" />
            <span className="popup__error popup__error_profileName">11</span>
            <input name="profileUserAbout" type="text" placeholder="О себе" required
              className="popup__input-text popup__input-text_type_job" minLength="2" maxLength="200" />
            <span className="popup__error popup__error_profileUserAbout">1</span>
          </>
        }
      />

      {/* <!-- AVATAR modal window --> */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input name="avatarUrl" type="url" placeholder="Ссылка на картинку"
              className="popup__input-text popup__input-text_type_url" required />
            <span className="popup__error popup__error_avatarUrl">1</span>
          </>
        }
      />

      {/* <!-- PLACE modal window --> */}

      <PopupWithForm
        title="Новое место"
        name="place"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input name="placeName" type="text" placeholder="Название" required
              className="popup__input-text popup__input-text_type_title" minLength="2" maxLength="30" />
            <span className="popup__error popup__error_placeName">1</span>
            <input name="placeUrl" type="url" placeholder="Ссылка на картинку"
              className="popup__input-text popup__input-text_type_url" required />
            <span className="popup__error popup__error_placeUrl">1</span>
          </>
        }
      />

      {/* <!-- CONFIRM modal window --> */}
      <PopupWithForm
        onClose={closeAllPopups}
        title="Вы уверены?"
        name="confirm"
        buttonText="Да"
      />

      {/* <!-- PHOTO modal window --> */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
