import "./Fee.scss"

function Fee(props){
    let classname = "fee";
    if (props.accent === 'true') classname += " fee_accented" ;
    return (
        <div className={classname} theme={props.theme}>
            <div className="fee__head">{props.name}</div>
            <div className="fee__price"><span className="price-span">{props.price}</span> руб. /мес</div>
            <div className="fee__speed">{props.speed}</div>
            <div className="fee__footer">{props.comment}</div>
        </div>
    )
}

export default Fee;