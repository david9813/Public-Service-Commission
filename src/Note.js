import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function NoteBook() {
  const [notes, setNotes] = useState([]);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [bodyInputValue, setBodyInputValue] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const addNote = () => {
    if (titleInputValue.trim() !== '' && bodyInputValue.trim() !== '') {
      const newNote = { id: Date.now(), title: titleInputValue, body: bodyInputValue };
      setNotes([...notes, newNote]);
      setTitleInputValue('');
      setBodyInputValue('');
      setIsAddingNote(false);
    } else {
      Alert.alert('Error', 'Please enter both title and body for the note.');
    }
  };

  const saveNote = () => {
    if (titleInputValue.trim() === '') {
      Alert.alert('Error', 'Please enter a title for the note.');
      return;
    }
  
    if (selectedNote) {
      // Editing an existing note
      const updatedNotes = notes.map(note =>
        note.id === selectedNote.id ? { ...note, title: titleInputValue, body: bodyInputValue } : note
      );
      setNotes(updatedNotes);
      setSelectedNote(null);
    } else {
      // Adding a new note
      const newNote = { id: Date.now(), title: titleInputValue, body: bodyInputValue };
      setNotes([...notes, newNote]);
    }
  
    setTitleInputValue('');
    setBodyInputValue('');
    setIsAddingNote(false);
  };
  const editNote = note => {
    setSelectedNote(note);
    setTitleInputValue(note.title);
    setBodyInputValue(note.body);
    setIsAddingNote(true);
  };

  const deleteNote = () => {
    const filteredNotes = notes.filter(note => note.id !== selectedNote.id);
    setNotes(filteredNotes);
    setSelectedNote(null);
    setShowDeleteConfirmation(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notebook</Text>
      <ScrollView style={styles.noteList}>
        {notes.map(note => (
          <TouchableOpacity key={note.id} onPress={() => editNote(note)}>
            <View style={styles.note}>
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text style={styles.noteBody}>{note.body}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => setIsAddingNote(true)} style={styles.addButton}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>

      <Modal visible={isAddingNote || selectedNote !== null} animationType="slide">
  <View style={styles.modalContainer}>

    <View  style= { styles.headding}> 
      <Text style= { styles.headingtext} > Write your Note</Text>
    </View>

    <TextInput
      value={titleInputValue}
      onChangeText={setTitleInputValue}
      placeholder="Enter note title..."
      style={styles.input}
    />
    {isAddingNote || selectedNote ? (
      <TextInput
        value={bodyInputValue}
        onChangeText={setBodyInputValue}
        placeholder="Enter note body..."
        multiline
        style={[styles.input, styles.bodyInput]}
      />
    ) : null}
    <View style={styles.modalButtonContainer}>
      <TouchableOpacity onPress={saveNote} style={[styles.modalButton, styles.saveButton]}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setSelectedNote(null); setIsAddingNote(false); }} style={[styles.modalButton, styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      {selectedNote && (
        <TouchableOpacity onPress={() => setShowDeleteConfirmation(true)} style={[styles.modalButton, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
</Modal>


      <Modal visible={showDeleteConfirmation} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.confirmationText}>Are you sure you want to delete this note?</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity onPress={deleteNote} style={[styles.modalButton, styles.deleteButton]}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowDeleteConfirmation(false)} style={[styles.modalButton, styles.cancelButton]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  headding: {
marginBottom: 30,

  },
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  noteList: {
    flex: 1,
  },
  note: {
    marginBottom: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteBody: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bodyInput: {
    height: 200,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  saveButton: {
    backgroundColor: 'green',
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default NoteBook;




