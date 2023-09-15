import "./Fee.scss";
import {useState} from "react";

function Fee({id, passChange, theme, name, price, speed, comment}) {
  let classname = "fee";

  const [selected, setSelected] = useState(false);

  const handleChange = (e) => {
    setSelected(!selected);
    const target = e.target; //эти три строки ничего не делают пока
    console.log(target);
    passChange(target);
  };

  if (selected) classname += " fee_accented";

  return (
    <div onClick={handleChange} className={classname} theme={theme} id={id}>
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

//target в итоге никогда не род элемент с id а кусок/див на который кликнули. нужно получить нужный элемент
