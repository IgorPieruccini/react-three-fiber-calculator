export const calculateOperation = (state: string) => {
  const numberArray = state
    .split(/[/+\-/x/÷]/gi)
    .map((n) => parseFloat(n.replace(",", ".")));
  const signArray = state.replace(/[0-9/,]/g, "");
  return (
    Math.round(
      numberArray.slice(1, numberArray.length).reduce((acc, cur, index) => {
        switch (signArray[index]) {
          case "+":
            return acc + cur;
          case "-":
            return acc - cur;
          case "÷":
            return acc / cur;
          case "x":
            return acc * cur;
          default:
            return acc;
        }
      }, numberArray[0]) * 100
    ) / 100
  );
};

export const addPoints = (state: string) => {
  const signArray = state.replace(/[0-9]/g, "");
  return state
    .split(/\D/i)
    .map((n: string) => {
      let result = "";
      let i = 0;
      while (i <= n.length - 1) {
        const add = i % 3 === 0 && i >= 3;
        result =
          (add ? `${n[n.length - 1 - i]}.` : n[n.length - 1 - i]) + result;
        i++;
      }
      return result;
    })
    .reduce((acc, cur, index) => {
      return acc + cur + (signArray[index] ? signArray[index] : "");
    }, "");
};
