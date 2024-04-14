import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Note from './Note';
import Custommenu from'./Custonmanu.js'
import Notice from './Mainsubject/Notice.js';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <Custommenu {...props} />}>
   
      <Drawer.Screen name="लोक सेवा आयोग तयारी" component={Home}   options={{ headerShown: false }}/>
      <Drawer.Screen name="Note" component={Note} />
      <Drawer.Screen name="Notice" component={Notice} />
    </Drawer.Navigator>
  );
}

export default MyDrawer
