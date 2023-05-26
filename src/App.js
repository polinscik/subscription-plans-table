import "./App.scss";
import Fee from "./components/Fee";
import JsonInfo from "./feeInfo.json";

function App() {
  return (
    <div className="App">
      {JsonInfo.map((subPlan) => (
        <Fee
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
