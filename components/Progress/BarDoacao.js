import React from "react";
import ProgressBar from "./ProgressBarDoacao";

const testData = [
  { bgcolor: "#0B63CE", completed: 50 }
];

function BarDoacao () {
  return (
    <div>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
};

export default BarDoacao;