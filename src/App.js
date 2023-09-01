import "./App.scss";
import Fee from "./components/Fee";
import JsonInfo from "./feeInfo.json";
import {useState} from "react";

function App() {
  // const [oneSelected, checkOneSelected] = useState();

  const handleChange = (event) => {
    const fees = document.getElementsByClassName("fee_accented");
    console.log(fees);
    if (fees && !event.target.classList.contains("fee_accented")) {
      fees[0].classList.remove("fee_accented");
    }
  };
  return (
    <div className="App">
      {JsonInfo.map((subPlan) => (
        <Fee
          onClick={handleChange}
          key={subPlan.name}
          name={subPlan.name}
          price={subPlan.price}
          speed={subPlan.speed}
          comment={subPlan.comment}
          accent={subPlan.accent}
          theme={subPlan.theme}></Fee>
      ))}
    </div>
  );
}

export default App;
