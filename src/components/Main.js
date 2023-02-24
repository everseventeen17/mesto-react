import React from 'react';
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setIsUserName] = React.useState('');
  const [userDescription, setIsUserDescription] = React.useState('');
  const [userAvatar, setIsUserAvatar] = React.useState('');
  const [cards, setIsCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileData()
      .then((data) => {
        setIsUserName(data.name);
        setIsUserDescription(data.about);
        setIsUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setIsCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (

    <main className="main">
      <section className="profile">
        <div className="profile__inner">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <button type="button" aria-label="Редактировать аватар" className="profile__avatar-button"
            onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" aria-label="Редактировать профиль" className="profile__edit-button"
                onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="Добавить карточку" className="profile__add-button"
          onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">

        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onCardClick}
            key={card._id}
          />
        ))}

      </section>
    </main>
  )
}

export default Main;