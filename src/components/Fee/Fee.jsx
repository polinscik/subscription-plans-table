import "./Fee.scss";
import {useState} from "react";

function Fee({changedEl, id, passChange, theme, name, price, speed, comment}) {
  let classname = "fee";

  const [selected, setSelected] = useState(false);

  const handleChange = (e) => {
    if (changedEl == price) {
      setSelected(true);
    } else setSelected(!selected);
    console.log(
      `01: Log from Fee: state SetSelected of ${name} was changed to ${!selected}.`
    ); //фция из App убирает класс из элемента, но не меняет его стейт, поэтому при повторном клике стейт сначала меняется на false, и ничего не происходит
    passChange(price);
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
