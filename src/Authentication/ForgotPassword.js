import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';  // Correct hook
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPassword = () => {
  const [input, setInput] = useState('');
  const [isPhone, setIsPhone] = useState(false); // Toggle between email and phone
  const navigation = useNavigation();  // Use navigation hook

  const handleRecovery = () => {
    if (isPhone) {
      console.log('Recovery SMS sent to:', input);
      // Implement phone recovery logic here
    } else {
      console.log('Recovery email sent to:', input);
      // Implement email recovery logic here
    }
  };

  const toggleRecoveryMethod = () => {
    setIsPhone(!isPhone);
    setInput(''); // Clear input when switching methods
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={styles.subHeader}>
        {isPhone ? 'Enter your phone number' : 'Enter your email address'}
      </Text>

      <TextInput
        placeholder={isPhone ? 'Phone Number' : 'Email'}
        style={styles.input}
        keyboardType={isPhone ? 'phone-pad' : 'email-address'}
        onChangeText={(text) => setInput(text)}
        value={input}
      />

      <Button title="Submit" onPress={handleRecovery} color="#007BFF" />

      <TouchableOpacity style={styles.toggleButton} onPress={toggleRecoveryMethod}>
        <Text style={styles.toggleText}>
          {isPhone ? 'Recover using Email' : 'Recover using Phone Number'}
        </Text>
      </TouchableOpacity>

      {/* Navigate back to Login */}
      <TouchableOpacity style={styles.backToLogin} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#343a40',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6c757d',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  toggleButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  toggleText: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  backToLogin: {
    marginTop: 20,
    alignItems: 'center',
  },
  backText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default ForgotPassword;

