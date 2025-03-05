import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Fristpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Our App</Text>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#4CAF50' }]} 
        onPress={() => navigation.navigate('Login')}  // Using React Navigation's navigate method
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#FF9800' }]} 
        onPress={() => navigation.navigate('NewAccount')}  // Using React Navigation's navigate method
      >
        <Text style={styles.buttonText}>New Account</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#2196F3' }]} 
        onPress={() => navigation.navigate('ForgotPassword')}  // Using React Navigation's navigate method
      >
        <Text style={styles.buttonText}>Forgot Password</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.linkText}>Go to Home Page</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F4F6',  // Light gray background
  },
  header: {
    fontSize: 32,
    fontWeight: '700',  // Bold font for the header
    marginBottom: 40,  // Space between header and buttons
    color: '#333',  // Dark text color for contrast
  },
  button: {
    width: '80%',  // Makes buttons wide for easy clicking
    paddingVertical: 15,
    borderRadius: 30,  // Fully rounded button corners
    marginVertical: 15,  // Space between buttons
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,  // For Android shadow
  },
  buttonText: {
    color: '#fff',  // White text on colorful buttons
    fontSize: 18,
    fontWeight: '600',  // Medium bold text
    textAlign: 'center',
  },
});

export default Fristpage;
