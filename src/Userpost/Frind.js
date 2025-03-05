import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Frind = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend List</Text>
      {/* Placeholder for future content */}
      <Text style={styles.placeholderText}>No friends added yet!</Text>
      {/* Add button for adding friends */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Frind;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',  // Light blue background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#3498db',  // Blue button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
