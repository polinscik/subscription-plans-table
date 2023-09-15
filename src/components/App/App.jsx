import "./App.scss";
import Fee from "../Fee/Fee";
import JsonInfo from "../../feeInfo.json";
import {useState} from "react";

function App() {
  const [wasSelected, setWasSelected] = useState(null);

  function passChange(price) {
    setWasSelected(price);
    const el = document.getElementById(wasSelected);
    const currentEl = document.getElementById(price);
    console.log(el, currentEl);
    if (wasSelected !== null && wasSelected !== price) {
      if (el.classList.contains("fee_accented")) {
        el.classList.remove("fee_accented");
      }
    }
    // console.log("wasSelected:" + wasSelected, "Price:" + price);
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
