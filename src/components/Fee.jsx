import "./Fee.scss";

function Fee({accent, theme, name, price, speed, comment}) {
  let classname = "fee";
  if (accent === "true") classname += " fee_accented";
  return (
    <div className={classname} theme={theme}>
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
