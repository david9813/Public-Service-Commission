import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, Alert, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import * as ImagePicker from 'expo-image-picker';

const Userpost = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [commentTexts, setCommentTexts] = useState({});
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedPostText, setEditedPostText] = useState('');
  const [postIdToEdit, setPostIdToEdit] = useState(null);
  const [commentIdToEdit, setCommentIdToEdit] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');
  const simulatedUserName = 'User1';

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const addPost = () => {
    if (newPostText.trim() || selectedImage) {
      const newPost = {
        id: Date.now().toString(),
        text: newPostText,
        image: selectedImage,
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostText('');
      setSelectedImage(null);
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const addComment = (postId) => {
    const commentText = commentTexts[postId];
    if (commentText && commentText.trim()) {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return { 
            ...post, 
            comments: [...post.comments, { name: simulatedUserName, text: commentText.trim() }] 
          };
        }
        return post;
      }));
      setCommentTexts({ ...commentTexts, [postId]: '' });
    }
  };

  const editPost = (postId) => {
    const postToEdit = posts.find(post => post.id === postId);
    setPostIdToEdit(postId);
    setEditedPostText(postToEdit.text);
    setEditModalVisible(true);
  };

  const savePostEdit = () => {
    setPosts(posts.map(post => post.id === postIdToEdit ? { ...post, text: editedPostText } : post));
    setEditModalVisible(false);
    setPostIdToEdit(null);
    setEditedPostText('');
  };

  const deletePost = (postId) => {
    Alert.alert(
      "Delete Post",
      "Are you sure you want to delete this post?",
      [
        { text: "Cancel" },
        { text: "Delete", onPress: () => setPosts(posts.filter(post => post.id !== postId)) },
      ]
    );
  };

  const editComment = (postId, commentIndex) => {
    const commentToEdit = posts.find(post => post.id === postId).comments[commentIndex];
    setCommentIdToEdit(commentIndex);
    setEditedCommentText(commentToEdit.text);
    setPostIdToEdit(postId);
  };

  const saveCommentEdit = () => {
    setPosts(posts.map(post => {
      if (post.id === postIdToEdit) {
        const updatedComments = post.comments.map((comment, index) => {
          if (index === commentIdToEdit) {
            return { ...comment, text: editedCommentText };
          }
          return comment;
        });
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
    setEditedCommentText('');
    setPostIdToEdit(null);
    setCommentIdToEdit(null);
  };

  const deleteComment = (postId, commentIndex) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const updatedComments = post.comments.filter((_, index) => index !== commentIndex);
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.createPostContainer}>
            <TextInput
              style={styles.input}
              placeholder="What's on your mind?"
              value={newPostText}
              onChangeText={setNewPostText}
              multiline
            />
            <View style={styles.uploadContainer}>
              <TouchableOpacity onPress={selectImage} style={styles.uploadIcon}>
                <Icon name="camera" size={20} color="#fff" />
              </TouchableOpacity>
              {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.previewImage} />
              )}
            </View>
            <TouchableOpacity style={styles.postButton} onPress={addPost}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profilePic} />
              <Text style={styles.username}>{simulatedUserName}</Text>
              <View style={styles.postActions}>
                <TouchableOpacity onPress={() => editPost(item.id)}>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletePost(item.id)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.postText}>{item.text}</Text>
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.postImage} />
            )}
            
            <View style={styles.commentContainer}>

            <TouchableOpacity onPress={() => likePost(item.id)}>
                <Text style={styles.likeButton}>👍 {item.likes} Likes</Text>
              </TouchableOpacity>


              <TextInput
                style={styles.commentInput}
                placeholder="Write a comment..."
                value={commentTexts[item.id] || ''}
                onChangeText={(text) => setCommentTexts({ ...commentTexts, [item.id]: text })}
              />
              <TouchableOpacity onPress={() => addComment(item.id)}>
                <Text style={styles.commentButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
            {item.comments.length > 0 && (
              <View style={styles.commentsList}>
                {item.comments.map((comment, index) => (
                  <View key={index} style={styles.commentItem}>
                    <Text style={styles.commentText}>
                      <Text style={styles.commentAuthor}>{comment.name}</Text>: {comment.text}
                    </Text>
                    <View style={styles.commentActions}>
                      <TouchableOpacity onPress={() => editComment(item.id, index)}>
                        <Text style={styles.editText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => deleteComment(item.id, index)}>
                        <Text style={styles.deleteText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      />




      {/* Edit Post Modal */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Post</Text>
            <TextInput
              style={styles.modalInput}
              value={editedPostText}
              onChangeText={setEditedPostText}
            />
            <TouchableOpacity style={styles.modalButton} onPress={savePostEdit}>
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setEditModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Edit Comment Modal */}
      <Modal
        visible={commentIdToEdit !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCommentIdToEdit(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Comment</Text>
            <TextInput
              style={styles.modalInput}
              value={editedCommentText}
              onChangeText={setEditedCommentText}
            />
            <TouchableOpacity style={styles.modalButton} onPress={saveCommentEdit}>
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setCommentIdToEdit(null)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    
    </View>
  );
};

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#f0f2f5',
    },
    createPostContainer: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      margin: 10,
      elevation: 2,
    },
    input: {
      backgroundColor: '#f5f5f5',
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 12,
      borderRadius: 25,
      fontSize: 16,
      paddingHorizontal: 20,
    },
    uploadContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    uploadIcon: {
      backgroundColor: '#28a745',
      padding: 10,
      borderRadius: 20,
      marginRight: 10,
    },
    previewImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginTop: 10,
    },
    postButton: {
      backgroundColor: '#1877f2',
      borderRadius: 20,
      paddingVertical: 10,
      marginTop: 10,
      alignItems: 'center',
    },
    postButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    post: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      margin: 10,
      elevation: 3,
    },
    postHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    username: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    postActions: {
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    },
    editText: {
      color: '#1877f2',
      marginRight: 10,
    },
    deleteText: {
      color: 'red',
    },
    postText: {
      fontSize: 16,
      marginBottom: 10,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginTop: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    likeButton: {
      color: '#1877f2',
      fontWeight: 'bold',
    },
    commentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    commentInput: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 8,
      borderRadius: 20,
      marginRight: 10,
      paddingHorizontal: 15,
    },
    commentButtonText: {
      color: '#1877f2',
      fontWeight: 'bold',
    },
    commentsList: {
      marginTop: 10,
    },
    commentItem: {
      marginVertical: 5,
    },
    commentText: {
      fontSize: 14,
      color: '#555',
    },
    commentAuthor: {
      fontWeight: 'bold',
      color: '#1877f2',
    },
    commentActions: {
      flexDirection: 'row',
      marginTop: 5,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    modalInput: {
      height: 100,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    modalButton: {
      backgroundColor: '#1877f2',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    modalButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  }); 

export default Userpost;
