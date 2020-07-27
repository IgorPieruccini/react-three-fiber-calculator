import React, { FunctionComponent, useState } from "react";
import "./keyboard.scss";

export type IKeyBoardButton = keyof typeof keyboardButtons;
export const keyboardButtons = {
  1: "c",
  2: "÷",
  3: "7",
  4: "8",
  5: "9",
  6: "x",
  7: "4",
  8: "5",
  9: "6",
  10: "-",
  12: "1",
  13: "2",
  14: "3",
  15: "+",
  16: "0",
  17: ",",
  18: "=",
};

const initialDisabledButtons = ["÷", "x", "="];
export const allOperationButton = ["÷", "x", "+", "-", "="];

interface KeyboardProps {
  onNumber(t: string): void;
  onSign(): void;
  onClear(): void;
}
const Keyboard: FunctionComponent<KeyboardProps> = ({
  onNumber,
  onSign,
  onClear,
}: KeyboardProps) => {
  const [disabledButtons, setDisabledButton] = useState<Array<string>>(
    initialDisabledButtons
  );

  const onHandleClick = (val: string) => {
    switch (val) {
      case "=":
        onSign();
        break;
      case "c":
        onClear();
        setDisabledButton(initialDisabledButtons);
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        setDisabledButton(allOperationButton);
        onNumber(val);
        break;
      default:
        onNumber(val);
        setDisabledButton([]);
    }
  };

  const isDisabled = (val: string) => {
    return !!disabledButtons.find((disabled) => disabled === val);
  };

  return (
    <div data-testid="keyboard" className={"keyboard"}>
      {Object.values(keyboardButtons).map((val) => {
        return (
          <button
            className={`btn-${val}`}
            key={val}
            onClick={() => onHandleClick(val)}
            disabled={isDisabled(val)}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
