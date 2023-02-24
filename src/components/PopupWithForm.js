function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ''}`}>
      <div className="popup__container">
        <button type="button" onClick={props.onClose} aria-label="Закрыть"
          className="popup__close-btn"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={props.name} method="post" className="popup__form" noValidate>
          {props.children}
          <button disabled type="submit" className="popup__submit-btn_disabled
        popup__submit-btn">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;