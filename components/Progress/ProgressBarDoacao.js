import React from "react";
import { Text, View } from 'react-native';


const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 40,
    width: '100%',
    backgroundColor: "rgba(13, 110, 253, 0.43)",
    borderRadius: 5,
    paddingHorizontal: 15,
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
    fontWeight: 600
  }

  return (
    <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
        
        <View style={valorContainerStyles}>
          <Text style={valorStyles}>R$ 150.00 / R$300.00</Text>
        </View>
    </div>
  );
};

export default ProgressBar;