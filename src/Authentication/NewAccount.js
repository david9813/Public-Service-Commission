import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Correct hook for navigation

const NewAccount = () => {
  const [form, setForm] = useState({ name: '', phone: '', gender: '', gmail: '', password: '' });
  const [error, setError] = useState('');
  const navigation = useNavigation();  // Use navigation hook

  // Handle form input change
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // Validation function
  const validateForm = () => {
    const { name, phone, gender, gmail, password } = form;

    if (!name || !phone || !gender || !gmail || !password) {
      setError('All fields are required!');
      return false;
    }

    // Validate phone number (basic check)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(gmail)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Validate password (minimum 6 characters)
    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return false;
    }

    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form Data:', form);
      // Navigate to the Login page after successful account creation
      navigation.navigate('Login');  // Correct navigation method
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Account</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        keyboardType="phone-pad"
        onChangeText={(text) => handleChange('phone', text)}
      />
      <TextInput
        placeholder="Gender"
        style={styles.input}
        onChangeText={(text) => handleChange('gender', text)}
      />
      <TextInput
        placeholder="Gmail"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={(text) => handleChange('gmail', text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
      />

      <Button title="Submit" onPress={handleSubmit} color="#007BFF" />
    </View>
  );
};

export default NewAccount;

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
    marginBottom: 20,
    color: '#343a40',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
});
