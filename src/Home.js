// Home.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import History from "./Mainsubject/History";
import Geography from './Mainsubject/Geography';
import QuizHome from './Quiz/QuizHome';
import MuchMore from './Mainsubject/MuchMore';
import Qustion from './Mainsubject/Qustion'
import CurrentEvents from './Quiz/CurrentEvents'
import GeographyEnvironment from './Quiz/GeographyEnvironment';
import PoliticsGovernance from './Quiz/PoliticsGovernance';
import Economics from "./Quiz/Economics";
import GeneralKnowledgeNepal from './Quiz/GeneralKnowledgeNepal';
import LiteratureLanguage from './Quiz/LiteratureLanguage';
import ScienceTechnology from './Quiz/ScienceTechnology';
import SocialIssues from './Quiz/SocialIssues';
import InternationalRelations from './Quiz/InternationalRelations'


import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();
 
function Home({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.separator} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizHome')}>
          <Text style={styles.buttonText}>लोक सेवा परीक्षाका लागि प्रश्नहरू</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://lawcommission.gov.np/np/?cat=87')}>
          <Text style={styles.buttonText}>नेपालको संविधान</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Qustions')}>
          <Text style={styles.buttonText}>लोक सेवा परीक्षाका लागि प्रश्नहरू</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://gorkhapatraonline.com/categories/loksewa')}>
          <Text style={styles.buttonText}>गोरखापत्र</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://psc.gov.np/')}>
          <Text style={styles.buttonText}>लोक सेवा आयोग</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('नमुना प्रश्न')}>
          <Text style={styles.buttonText}>नमुना प्रश्न</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('विविध समग्री')}>
          <Text style={styles.buttonText}>विविध समग्री</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen

        name="लोक सेवा तयारी"
        component={Home}
        options={({ navigation }) => ({

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 30 }}
            >
              <MaterialCommunityIcons name="menu" size={50} color="#fff" />
              
            </TouchableOpacity>
           
          ),
          headerStyle: {
            backgroundColor: '#B23850',}
            
        })}
      />
      <Stack.Screen name="QuizHome" component={QuizHome} />
  
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="नमुना प्रश्न" component={ Qustion} />
      <Stack.Screen name="विविध समग्री" component={MuchMore} />
      <Stack.Screen name="Qustions" component={Geography} />
      <Stack.Screen name="वर्तमान घटनाहरू" component={CurrentEvents} />
      <Stack.Screen name="भूगोल र पर्यावरण" component={GeographyEnvironment} />
      <Stack.Screen name="राजनीति र शासन" component={PoliticsGovernance} />
      <Stack.Screen name="अर्थतन्त्र" component={Economics} />
      <Stack.Screen name="नेपालको सामान्य ज्ञान" component={GeneralKnowledgeNepal} />
      <Stack.Screen name="नेपाली साहित्य र भाषा" component={LiteratureLanguage} />
      <Stack.Screen name="विज्ञान र प्रविधि नेपालमा" component={ScienceTechnology} />
      <Stack.Screen name="सामाजिक समस्याहरू" component={SocialIssues} />
      <Stack.Screen name="नेपालसँग सम्बन्धित अन्तर्राष्ट्रिय सम्बन्धहरू" component={InternationalRelations} />
   
    </Stack.Navigator>
  );
}

export default HomeStack;

const styles = StyleSheet.create({
  
    scrollView: {
      flex: 1,
      backgroundColor: '#ffffff', // White background
    },
    container: {
      padding: 20,
    },
    separator: {
      height: 20,
    },
    button: {
      backgroundColor: '#3498db', // Blue
      padding: 20,
      marginBottom: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff', // White text
      textAlign: 'center',
      fontSize: 16,
    },
  });

