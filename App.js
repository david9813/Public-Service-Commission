import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Fristpage from './src/Authentication/Fristpage'; // Assuming Fristpage.js is in the same folder
import MyDrawer from './src/MyDrawer'; // Your drawer navigation component
import NewAccount from './src/Authentication/NewAccount';
import Login from './src/Authentication/Login';
import ForgotPassword from './src/Authentication/ForgotPassword';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fristpage">
      
        <Stack.Screen name="Fristpage" component={Fristpage} options={{ headerShown: false }} />
      
        
        <Stack.Screen name="Login" component={Login} />

      
        <Stack.Screen name="NewAccount" component={NewAccount} />
          
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  
      
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
