import React from 'react';
import { View, Image ,ScrollView} from 'react-native'; // Import Image component from react-native

const Qustion = () => {
  return (
    <View>
      <ScrollView style={ScrollView}>
      <Image source={require('../img/img.jpg')} /> 
      </ScrollView>
    </View>
  );
};

export default Qustion;
