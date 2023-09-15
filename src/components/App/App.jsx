import "./App.scss";
import Fee from "../Fee/Fee";
import JsonInfo from "../../feeInfo.json";
import {useState} from "react";

function App() {
  //стейт и функция не работают, это мои попытки сделать возможным выбор только одной карточки
  const [hasSelected, setHasSelected] = useState(null);

  function passChange(target) {
    const arr = document.getElementsByClassName("fee_accented");
    const fees = document.getElementsByClassName("fee");

    if (arr.length > 0) {
      console.log(arr, fees); //обновляется с опозданием
      //если таргет компонента нет в arr (у него нет выделения) - снять выделение со всех карточек (убрать класс)
    }
    setHasSelected(target);
  }

  return (
    <div className="App">
      {JsonInfo.map((subPlan) => (
        <Fee
          passChange={passChange}
          key={subPlan.price}
          id={subPlan.price}
          name={subPlan.name}
          price={subPlan.price}
          speed={subPlan.speed}
          comment={subPlan.comment}
          theme={subPlan.theme}></Fee>
      ))}
    </div>
  );
}

export default App;
