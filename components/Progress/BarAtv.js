import React from "react";
import ProgressBar from "./ProgressBarAtv";
import {View } from 'react-native';

const testData = [
  { bgcolor: "#0B63CE", completed: 80 }
];

function BarAtv() {
  return (
    <View>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </View>
  );
};

export default BarAtv;