import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const GeneralKnowledgeNepal = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View >

        <Text style={styles.Qustion}> Q1.नेपालको संविधान लागू भएको वर्ष कुन हो ?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={20} color="green" /> २०७२ </Text>
        <Text style={styles.Qustion}> Q2.नेपालको पहिलो राष्ट्रिय जनगणना हुने वर्ष के हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={20} color="green" /> १९५२ </Text>
        <Text style={styles.Qustion}> Q3.संघ, सगरमाथा र लुम्बिनी राष्ट्रिय नामको केन्द्री विकास क्षेत्र कुन हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={20} color="green" /> लुम्बिनी विकास क्षेत्र </Text>
        <Text style={styles.Qustion}> Q4नेपालको सर्वाधिक ऊचाइमा स्थित पर्वत कुन हो</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> सगरमाथा</Text>
        <Text style={styles.Qustion}> Q5.नेपालको सर्वाधिक लोकप्रिय खेल कुन हो</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> क्रिकेट </Text>
        <Text style={styles.Qustion}> Q6.नेपालको संघीय लोकतान्त्रिक गणतन्त्रको संविधान लागू भएको वर्ष के हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> २०७२  </Text>
        <Text style={styles.Qustion}> Q7.नेपालको सर्वाधिक गहिरो झील कुन हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> रारा झील </Text>
        <Text style={styles.Qustion}> Q8नेपालको सर्वाधिक लोकप्रिय धार्मिक स्थल कुन हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> पशुपतिनाथ मन्दिर</Text>
        <Text style={styles.Qustion}> Q9.नेपालको सर्वाधिक जनसंख्या भएको प्रदेश कुन हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> प्रदेश ३ (गण्डकी प्रदेश)</Text>
        <Text style={styles.Qustion}> Q10.नेपालको सर्वाधिक गहिरो खोला कुन हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> राप्ती खोला </Text>
        <Text style={styles.Qustion}> Q11.नेपालको प्रथम महिला सर्वोच्च न्यायाधीश को हुन्?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> सुशीला कार्की</Text>
        <Text style={styles.Qustion}> Q12.नेपालको सर्वाधिक लोकप्रिय राजा कुन हुन्?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> प्रिथ्वी नारायण शाह</Text>
        <Text style={styles.Qustion}> Q13नेपालको प्रथम विश्वविद्यालय को नाम के हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> त्रिभुवन विश्वविद्यालय</Text>
        <Text style={styles.Qustion}> Q14.नेपालको प्रथम अन्तर्राष्ट्रिय विमानस्थल को नाम के हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" /> त्रिभुवन अन्तर्राष्ट्रिय विमानस्थल</Text>
        <Text style={styles.Qustion}> Q15.नेपालको प्रथम फारेस्ट क्याम्पस कुन हो?</Text>
        <Text style={styles.Answer}> <FontAwesome5 name="arrow-right" size={24} color="green" />हेटौडा क्याम्पस </Text>
       
      </View>
    </ScrollView>
  );
}

export default GeneralKnowledgeNepal;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  Qustion: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,

    color: '#333', // Change color as needed
  },
  Answer: {
    fontSize: 20,
    marginBottom: 20,
    paddingLeft: 0,
    margin: 5,



    color: 'gray', // Change color as needed
  },
});
