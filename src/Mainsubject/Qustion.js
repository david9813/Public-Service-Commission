import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const Qustion = () => {
  const navigation = useNavigation(); 

  const handlePress = () => {
    navigation.navigate('खुला प्रतियोगितात्मक लिखित परीक्षा');
  };
  const forTecher = () => {
    navigation.navigate('शिक्षक सेवा आयोग');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.touchable} onPress={handlePress}>
          <Text style={styles.touchableText}> सामान्य प्रशासन/लेखा समुह </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={forTecher}>
          <Text style={styles.touchableText}>शिक्षक सेवा आयोग</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    padding: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
    margin: 20,
    borderBottomWidth: 30,
    
    
  },
  touchableText: {
    color: 'rgba(255, 255, 255, 0.7)', 
    fontWeight: 'bold',
    width: 100
  },
  
});

export default Qustion;
