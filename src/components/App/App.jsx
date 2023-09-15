import "./App.scss";
import Fee from "../Fee/Fee";
import JsonInfo from "../../feeInfo.json";
import {useState} from "react";

function App() {
  const [wasSelected, setWasSelected] = useState(null);
  let changedEl = null;
  function passChange(price) {
    setWasSelected(price);
    const el = document.getElementById(wasSelected);
    if (wasSelected !== null && wasSelected !== price) {
      if (el.classList.contains("fee_accented")) {
        el.classList.remove("fee_accented");
        changedEl = el.id;
        console.log(
          `02: Log from App: accent was removed from element ${changedEl} but its state wasnt changed `
        );
      }
    }
  }

  return (
    <div className="App">
      {JsonInfo.map((subPlan) => (
        <Fee
          changedEl={changedEl}
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
