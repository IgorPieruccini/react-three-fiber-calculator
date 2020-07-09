import React from "react";

interface DisplayProps {
  data: string;
}
const Display: React.FC<DisplayProps> = ({ data }) => {
  return (
    <div data-testid="display">
      <p data-testid="text-display">{data}</p>
    </div>
  );
};

export default Display;
