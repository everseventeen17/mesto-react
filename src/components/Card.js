function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card)
  }
  return (
    <li className="element">
      <button type="button" aria-label="Удалить" className="element__delete-button"></button>
      <img onClick={handleCardClick} src={props.card.link} alt={props.card.name}
        className="element__img" />
      <div className="element__rectangle">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" aria-label="Оценить" className="element__btn-like"></button>
          <p className="element__like-counter element__like-counter_active">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;