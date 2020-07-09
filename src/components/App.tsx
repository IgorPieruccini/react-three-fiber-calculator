import React, { useState } from "react";
import "./App.scss";
import Display from "../components/display";
import Keyboard from "../components/keyboard";
import { calculateOperation, addPoints } from "./utils/utils";
function App() {
  const [display, setDisplay] = useState<string>("");

  const onHandleSign = () => {
    setDisplay((state) =>
      addPoints(calculateOperation(state.replace(/([.])/g, "")).toString())
    );
  };
  const onHandleNumber = (data: string) => {
    setDisplay((cur) => {
      return addPoints(cur.replace(/([.])/g, "") + data);
    });
  };
  const onHandleClear = () => {
    setDisplay("");
  };
  return (
    <div className="App">
      <Display data={display} />
      <Keyboard
        onNumber={onHandleNumber}
        onSign={onHandleSign}
        onClear={onHandleClear}
      />
    </div>
  );
}

export default App;
