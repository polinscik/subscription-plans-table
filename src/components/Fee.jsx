import "./Fee.scss";

function Fee({id, onClick, target, theme, name, price, speed, comment}) {
  let classname = "fee";
  // if (target.id == id) {
  //   classname += " fee_accented";
  // }
  return (
    <div onClick={onClick} className={classname} theme={theme} id={id}>
      <div className="fee__head">{name}</div>
      <div className="fee__price">
        <span className="price-span">{price}</span> руб. /мес
      </div>
      <div className="fee__speed">{speed}</div>
      <div className="fee__footer">{comment}</div>
    </div>
  );
}

export default Fee;

//Как сделать так, чтобы только один из компонентов мог быть выделен? Проверка - если уже есть выбранный комп. и он != кликнутому, отменить выбор. должно быть на уровень выше компонента одной карточки
