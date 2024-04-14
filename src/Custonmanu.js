import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, Share, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// for exit 

const Custommenu = ({ navigation }) => {

  const handleExit = () => {
    BackHandler.exitApp();
  };
  // for share app
  const shareApp = async () => {

  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate('लोक सेवा तयारी')}>
          <Text style={styles.text}> My Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seconditems}>


        <TouchableOpacity onPress={() => navigation.navigate("Note")}>
          <Text style={styles.text}> NoteBook <FontAwesome name="book" size={20} color="#fff" /></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Notice")}>
          <Text style={styles.text}> नोटिस (Notice) <MaterialIcons name="notifications" size={20} color="#fff" /></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://david-sapkota.netlify.app/')}>
          <Text style={styles.text}> Contact  <FontAwesome name="address-card" size={20} color="#FFF" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.third}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}/>
        <Text
          style={{
            padding: 10,
            marginLeft: 10,
            marginBottom: -20
          }} >Share & Exit</Text>


        <TouchableOpacity onPress={shareApp} style={styles.touchableOpacity}>
          <Text style={styles.text}> Share <Feather name="share-2" size={24} color="black" /></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleExit} style={styles.touchableOpacity}>
          <Text style={styles.text}> Exit  <MaterialCommunityIcons name="exit-to-app" size={24} color="black" /></Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flex: 0.4,
    justifyContent: 'center',
    backgroundColor: '#B23850', // Sea green
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#ffffff', // White text
  },
  seconditems: {
    justifyContent: 'center',
    backgroundColor: '#3B8BEB', // Pastel yellow
    flex: 0.7,
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#b2bec3', // Light gray
    fontSize: 20,
    fontWeight: 'bold',
  },
  third: {
    backgroundColor: '#C4DBF6', // Pastel yellow
    flex: 0.4,
    color: '#ffffff',
  }
});


export default Custommenu;