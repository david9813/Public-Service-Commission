import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const QuizData = [
 
      {
        question: "नेपालको सबैभन्दा ठूलो शहर कुन हो?",
        options: ["पोखरा", "बुटवल", "बिराटनगर", "काठमाडौं"],
        correctAnswer: "काठमाडौं"
      },
      {
        question: "नेपालको राजधानी कुन हो?",
        options: ["पोखरा", "बिराटनगर", "काठमाडौं", "ललितपुर"],
        correctAnswer: "काठमाडौं"
      },
      {
        question: "नेपालको सबैभन्दा महत्वपूर्ण आर्थिक उत्पादक क्षेत्र कुन हो?",
        options: ["खानिज", "खेलकुद", "वन्यजन्तु", "कृषि"],
        correctAnswer: "कृषि"
      },
      {
        question: "नेपालको सर्वाधिक नजिकै रहेको विदेशी देश कुन हो?",
        options: ["जापान", "भारत", "पाकिस्तान", "बांग्लादेश"],
        correctAnswer: "भारत"
      },
      {
        question: "नेपालको उत्तरी सीमा कुन देशसँग छ?",
        options: ["भारत", "चीन", "बांग्लादेश", "भूटान"],
        correctAnswer: "चीन"
      },
      {
        question: "नेपालको पश्चिमी सीमा कुन देशसँग छ?",
        options: ["चीन", "भारत", "पाकिस्तान", "भूटान"],
        correctAnswer: "भारत"
      },
      {
        question: "नेपालको दक्षिणी सीमा कुन देशसँग छ?",
        options: ["भारत", "चीन", "भूटान", "बांग्लादेश"],
        correctAnswer: "भारत"
      },
      {
        question: "नेपालको सर्वाधिक प्राचीन नगर कुन हो?",
        options: ["काठमाडौं", "भक्तपुर", "ललितपुर", "पाटन"],
        correctAnswer: "पाटन"
      },
      {
        question: "नेपालको पहिलो राजा को नाम के हो?",
        options: ["पृथ्वीनारायण शाह", "प्रताप मल्ल", "महेन्द्र मल्ल", "गौतमी प्रियादर्शन"],
        correctAnswer: "पृथ्वीनारायण शाह"
      },
      {
        question: "नेपालको सर्वाधिक उच्च शिक्षा निकाय कुन हो?",
        options: ["त्रिभुवन विश्वविद्यालय", "काठमाडौं विश्वविद्यालय", "पोखरा विश्वविद्यालय", "पाटन विश्वविद्यालय"],
        correctAnswer: "त्रिभुवन विश्वविद्यालय"
      },
      {
        question: "नेपालको राष्ट्रिय भाषा के हो?",
        options: ["नेपाली", "हिन्दी", "अंग्रेजी", "मैथिली"],
        correctAnswer: "नेपाली"
      }
    ];
    

const CurrentEvents = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false); 
  const [sound, setSound] = useState(null); // State variable to hold the sound object

  const handleAnswer = async (selectedOptionIndex) => {
    const correctAnswerIndex = QuizData[currentQuestion].options.indexOf(QuizData[currentQuestion].correctAnswer);
    if (selectedOption === null) {
      if (selectedOptionIndex === correctAnswerIndex) {
        setScore(prevScore => prevScore + 1);
        setShowCorrect(true);
        await soundright(); // Play correct sound
      } else {
        setShowIncorrect(true);
        setShowRightAnswer(true); // Set to true when the wrong option is selected
        await soundwrong(); // Play wrong sound
      }
      setSelectedOption(selectedOptionIndex);
      // Trigger next question if current question is answered
      setTimeout(() => {
        if (selectedOptionIndex === correctAnswerIndex) {
          nextQuestion();
        } else {
         
        }
      }, 2000); // Delay for 2 seconds before moving to next question or going back
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setShowCorrect(false);
      setShowIncorrect(false);
      setShowRightAnswer(false); // Reset the state when going back
    }
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setShowCorrect(false);
      setShowIncorrect(false);
      setShowRightAnswer(false); // Reset the state for next question
    } else {
      setShowScore(true);
    }
  };

  const Home = () => {
    navigation.navigate('QuizHome');
  };

  const playAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setShowCorrect(false);
    setShowIncorrect(false);
    setShowRightAnswer(false); // Reset the state for playing again
  };

  // for sound
  const soundright = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./right.mp3')
    );
    setSound(sound); // Set the sound state
    console.log('Playing Sound');
    await sound.playAsync(); 
  };

  // for wrong 
  const soundwrong = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./wrong.mp3')
    );
    setSound(sound); // Set the sound state
    console.log('Playing Sound');
    await sound.playAsync(); 
  };

  const checkAnswer = () => {
    // Show the correct answer for a brief moment
    setShowRightAnswer(true);
    // After a short delay, hide the correct answer
    setTimeout(() => {
      setShowRightAnswer(false);
    }, 2000); // Adjust the delay time as needed
  };

  return (
    <View style={styles.container}>
      {showCorrect && (
        <Ionicons name="checkmark-circle" size={100} color="green" />
      )}
      {showIncorrect && (
        <Ionicons name="close-circle" size={100} color="red" />
      )}

      {showRightAnswer && (
        <View style={styles.rightAnswerContainer}>
          <Text style={styles.rightAnswerText}>Correct Answer: {QuizData[currentQuestion].correctAnswer}</Text>
        </View>
      )}
      <Text>{currentQuestion + 1} / {QuizData.length} Questions</Text>

      {showScore ? (
        <View>
          <Text>Your score is: {score}</Text>
          <TouchableOpacity onPress={playAgain}>
            <Text style={styles.lastpage}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Home}>
            <Text style={styles.lastpage}>Go Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{QuizData[currentQuestion].question}</Text>
          </View>

          <View style={styles.optionContainer}>
            {QuizData[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswer(index)}
                style={[
                  styles.optionButton,
                  selectedOption === index && { backgroundColor: showCorrect ? 'green' : showIncorrect ? 'red' : 'grey' }
                ]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={goBack} style={styles.buttongoback}>
              <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={nextQuestion} style={styles.buttonNext}>
              <Ionicons name="arrow-forward-circle-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={checkAnswer} style={styles.button}>
            <Ionicons name="checkmark-circle-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Check Answer</Text>
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 
  
    container: {
      flex: 1,
      backgroundColor: '#ffffff', // White background
      alignItems: 'center',
      justifyContent: 'center',
    },
    questionContainer: {
      backgroundColor: '#3498db', // Blue
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    questionText: {
      fontWeight: 'bold',
      textAlign: 'center',
      width: 350,
      color: '#ffffff', // White text
    },
    optionContainer: {
      alignItems: 'center',
      borderWidth: 6,
    },
    optionButton: {
      backgroundColor: '#2ecc71', // Green
      padding: 10,
      margin: 10,
      borderRadius: 5,
      width: 350,
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionText: {
      color: '#ffffff', // White text
      fontWeight: 'bold',
    },
    lastpage: {
      backgroundColor: '#e74c3c', // Red
      padding: 10,
      margin: 10,
      borderRadius: 5,
      width: 350,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightAnswerContainer: {
      backgroundColor: '#f39c12', // Orange
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    rightAnswerText: {
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#3498db', // Blue
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      width: 360,
    },
    buttonText: {
      color: '#ffffff', // White text
      marginLeft: 10, // Adjust spacing between icon and text as needed
    },
    buttonNext: {
      backgroundColor: '#2ecc71', // Green
      padding: 10,
      margin: 20,
      borderRadius: 10,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttongoback: {
      backgroundColor: '#e74c3c', // Red
      padding: 10,
      margin: 20,
      width: 150,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  });
  
  




export default CurrentEvents

