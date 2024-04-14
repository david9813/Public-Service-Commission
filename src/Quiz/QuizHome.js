import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const QuizHome = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}> 
      <View style={styles.container}>
        <View style={styles.separator} />

        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('History')}>
          <Text style={styles.buttonText}> नेपालको इतिहास र सांस्कृति </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('वर्तमान घटनाहरू')}>
          <Text style={styles.buttonText}> वर्तमान घटनाहरू  </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('भूगोल र पर्यावरण')}>
          <Text style={styles.buttonText}> भूगोल र पर्यावरण </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('राजनीति र शासन')}>
          <Text style={styles.buttonText}> राजनीति र शासन </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('अर्थतन्त्र')}>
          <Text style={styles.buttonText}> अर्थतन्त्र</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('नेपालको सामान्य ज्ञान')}>
          <Text style={styles.buttonText}> नेपालको सामान्य ज्ञान</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('नेपाली साहित्य र भाषा')}>
          <Text style={styles.buttonText}> नेपाली साहित्य र भाषा</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('विज्ञान र प्रविधि नेपालमा')}>
          <Text style={styles.buttonText}>  नेपालमा विज्ञान र प्रविधि </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('सामाजिक समस्याहरू')}>
          <Text style={styles.buttonText}> सामाजिक समस्याहरू</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('नेपालसँग सम्बन्धित अन्तर्राष्ट्रिय सम्बन्धहरू')}>
          <Text style={styles.buttonText}> नेपालसँग सम्बन्धित अन्तर्राष्ट्रिय सम्बन्धहरू </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
 
    scrollView: {
      flex: 1,
      backgroundColor: 'white',
    },
    container: {
      padding: 20,
    },
    separator: {
      height: 20,
    },
    button: {
      backgroundColor: '#4CAF50', // Green color
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default QuizHome;

