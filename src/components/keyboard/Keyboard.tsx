import React, { FunctionComponent } from "react";
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
  return (
    <div data-testid="keyboard" className={"keyboard"}>
      {Object.values(keyboardButtons).map((val) => {
        return (
          <button
            className={`btn-${val}`}
            key={val}
            onClick={() =>
              val === "=" ? onSign() : val === "c" ? onClear() : onNumber(val)
            }
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
