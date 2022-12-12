import React from "react";
import ProgressBar from "./ProgressBarDoacao";
import { View} from 'react-native';

const testData = [
  { bgcolor: "#0B63CE", completed: 50 }
];

function BarDoacao (props) {
  return (
    <View>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} amount={props.quantia}  />
      ))}
    </View>
  );
};

export default BarDoacao;