import "./App.scss";
import Fee from "../Fee/Fee";
import JsonInfo from "../../feeInfo.json";
import {useState} from "react";

function App() {
  const [wasSelected, setWasSelected] = useState(null);

  function passChange(price) {
    if (wasSelected === price) {
      document.getElementById(wasSelected).classList.remove("fee_accented");
      setWasSelected(null);
    } else {
      Array.from(document.getElementsByClassName("fee")).forEach((el) => {
        if (el.id === price) {
          el.classList.add("fee_accented");
        } else if (el.id === wasSelected) {
          el.classList.remove("fee_accented");
        }
      });
      setWasSelected(price);
    }
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
