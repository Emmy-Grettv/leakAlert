import React from 'react';
import { View, Text, Image } from 'react-native';

const OnBoarding = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/alertLogo.svg')}  
        style={{ width: 100, height: 100 }}
      />
      <Text>OnBoarding</Text>
    </View>
  );
}

export default OnBoarding;