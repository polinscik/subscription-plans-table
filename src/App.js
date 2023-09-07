import "./App.scss";
import Fee from "./components/Fee";
import JsonInfo from "./feeInfo.json";
import {useState} from "react";

function App() {
  let classname = "fee";
  const [selected, setSelected] = useState(false);
  let target;
  if (selected) classname += " fee_accented";

  function handleChange(event) {
    setSelected(!selected);
    const fees = document.getElementsByClassName("fee_accented");
    console.log(fees);
    target = event.target;
    console.log(target.id);
    // if (fees && !event.target.classList.contains("fee_accented")) {
    //   fees[0].classList.remove("fee_accented");
    // }
  }
  return (
    <div className="App">
      {JsonInfo.map((subPlan) => (
        <Fee
          target={target}
          onClick={handleChange}
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

//target в итоге никогда не род элемент с id а кусок/див на который кликнули. нужно получить нужный элемент
