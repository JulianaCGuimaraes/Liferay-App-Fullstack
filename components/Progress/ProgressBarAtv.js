import React from "react";
import { Text, View } from 'react-native';

function ProgressBar(props){
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 40,
    width: '100%',
    backgroundColor: "rgba(13, 110, 253, 0.43)",
    borderRadius: 5,
    paddingHorizontal: 0,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const valorContainerStyles = {
    alignItems: 'center',
  }
  const valorStyles = {
    fontSize: 18,
    color: '#0B63CE',
    fontWeight: '600'
    }

  return (
  <View style={containerStyles}>
        <View style={fillerStyles}>
          <Text style={labelStyles}></Text>
        </View>
        <View style={valorContainerStyles}>
          <Text style={valorStyles}>8 hrs / 15 hrs</Text>
        </View>
  </View>
  );
};

export default ProgressBar;