import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Note from './Note';
import Custommenu from'./Custonmanu.js'
import Notice from './Mainsubject/Notice.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <Custommenu {...props} />}>
   
      <Drawer.Screen name="लोक सेवा आयोग तयारी" component={Home}   options={{ headerShown: false }}/>
      <Drawer.Screen name="Note" component={Note}  options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.openDrawer()
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Drawer.Screen name="News" component={Notice} options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.openDrawer()
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer
