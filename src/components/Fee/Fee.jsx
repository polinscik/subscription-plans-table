import "./Fee.scss";

function Fee({id, passChange, theme, name, price, speed, comment}) {
  return (
    <div
      onClick={() => passChange(price)}
      className="fee"
      theme={theme}
      id={id}>
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
