import "./Fee.scss";
import {useState} from "react";

function Fee({theme, name, price, speed, comment}) {
  let classname = "fee";

  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(!selected);
  };

  if (selected) classname += " fee_accented";
  return (
    <div onClick={handleChange} className={classname} theme={theme}>
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
