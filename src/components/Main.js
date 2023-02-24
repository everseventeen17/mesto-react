import React from 'react';
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  })

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
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

        {cards.map(card =>
          <Card
            card={card}
            onCardClick={props.onCardClick}
            key={card._id}
          />
        )}

      </section>
    </main>
  )
}

export default Main;