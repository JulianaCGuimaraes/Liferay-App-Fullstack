import React from "react";
import ProgressBar from "./ProgressBarAtv";

const testData = [
  { bgcolor: "#0B63CE", completed: 80 }
];

function BarAtv() {
  return (
    <div>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
};

export default BarAtv;