


import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const QuizData = [
  {
  question: "आर्थिक नीतिको मुख्य लक्ष्य के हो?",
  options: ["अधिकतम नाफा", "मूल्य स्थिरता", "पूर्ण रोजगारी", "सन्तुलित व्यापार"],
  correctAnswer: "मूल्य स्थिरता"
  },
  {
  question: "अर्थशास्त्रमा, GDP भनेको के हो?",
  options: ["सामान्य विकास नीति", "कुल गार्हस्थ उत्पादन", "कूल गार्हस्थ उत्पादन", "सामान्य विकास कार्यक्रम"],
  correctAnswer: "कूल गार्हस्थ उत्पादन"
  },
  {
  question: "कुन आर्थिक प्रणाली सरकारी योजना र नियन्त्रणमा धेरै निर्भर छ?",
  options: ["पुँजीवाद", "साम्यवाद", "समाजवाद", "बजार अर्थतन्त्र"],
  correctAnswer: "साम्यवाद"
  },
  {
  question: "मुद्रास्फीति भनेको के हो?",
  options: ["वस्तु र सेवाहरूको सामान्य मूल्य स्तरमा कमी", "वस्तु तथा सेवाको सामान्य स्तरको मूल्य बढिरहेको दर", "अर्थतन्त्रले लामो समयसम्म घट्ने आर्थिक गतिविधिको अनुभव गर्ने अवस्था", "देशको सिमाना भित्र उत्पादित वस्तु र सेवाहरूको कुल मूल्य"],
  correctAnswer: "वस्तु तथा सेवाको सामान्य स्तरको मूल्य बढिरहेको दर"
  },
  {
  question: "तलका मध्ये कुन वित्तीय नीतिको अंग होइन?",
  options: ["सरकारी खर्च", "कर", "मुद्रा आपूर्ति नियमन", "बजेट घाटा/अधिशेष व्यवस्थापन"],
  correctAnswer: "मुद्रा आपूर्ति नियमन"
  },
  {
  question: "मुद्रा आपूर्ति नियन्त्रण गर्न केन्द्रीय बैंकहरूले प्रयोग गर्ने मुख्य उपकरण के हो?",
  options: ["वित्तीय नीति", "ब्याज दर", "सरकारी खर्च", "विदेशी मुद्रा सञ्चिति"],
  correctAnswer: "ब्याज दर"
  },
  {
  question: "तलका मध्ये कुन आर्थिक कार्यसम्पादनको प्रमुख सूचक हो?",
  options: ["जीडीपी वृद्धि दर", "बेरोजगारी दर", "उपभोक्ता मूल्य सूचकांक (CPI)", "शेयर बजार सूचकांक"],
  correctAnswer: "शेयर बजार सूचकांक"
  },
  {
  question: "अर्थशास्त्रमा LDC भनेको के हो?",
  options: ["अल्पविकसित देश", "कम विकास लागत", "सीमित माग क्षमता", "स्थानीय विकास परिषद्"],
  correctAnswer: "अल्पविकसित देश"
  },
  {
  question: "कुन आर्थिक सूचकले उपभोग्य वस्तु र सेवाहरूको बजार टोकरीको लागि सहरी उपभोक्ताहरूले तिरेको मूल्यमा समयसँगै औसत परिवर्तन मापन गर्छ?",
  options: ["जीडीपी", "सीपीआई", "PPI", "GNP"],
  correctAnswer: "सीपीआई"
  },
  {
  question: "मौद्रिक नीतिको मुख्य उद्देश्य के हो?",
  options: ["मुद्रास्फीति नियन्त्रण गर्न", "आर्थिक वृद्धि प्रवर्द्धन गर्न", "सरकारी खर्च नियमन गर्ने", "आय असमानता कम गर्न"],
  correctAnswer: "मुद्रास्फीति नियन्त्रण गर्न"
  },
  {
  question: "तलका मध्ये कुनलाई उत्पादनको कारक मानिने छैन?",
  options: ["श्रम", "भूमि", "पैसा", "पुँजी"],
  correctAnswer: "पैसा"
  },
  {
  question: "विश्व बैंकको प्राथमिक कार्य के हो?",
  options: ["अन्तर्राष्ट्रिय व्यापार प्रवर्द्धन", "विकासोन्मुख राष्ट्रहरूलाई ऋण उपलब्ध गराउने", "विश्व वित्तीय बजार नियमन", "मौद्रिक नीतिको मापदण्ड निर्धारण गर्ने"],
  correctAnswer: "विकासोन्मुख राष्ट्रहरूलाई ऋण उपलब्ध गराउने"
  },
  {
  question: "कुन आर्थिक सिद्धान्तले बजार असफलतालाई सच्याउन र सामाजिक कल्याणको प्रवर्द्धन गर्न सरकारी हस्तक्षेपको वकालत गर्छ?",
  options: ["केनेसियन अर्थशास्त्र", "शास्त्रीय अर्थशास्त्र", "मुद्रावाद", "आपूर्ति पक्ष अर्थशास्त्र"],
  correctAnswer: "केनेसियन अर्थशास्त्र"
  },
  {
  question: "विश्व व्यापार नियमहरू नियमन गर्ने र सदस्य राष्ट्रहरू बीचको विवाद समाधान गर्ने अन्तर्राष्ट्रिय संस्थालाई के भनिन्छ?",
  options: ["विश्व बैंक", "अन्तर्राष्ट्रिय मुद्रा कोष (IMF)", "विश्व व्यापार संगठन (WTO)", "संयुक्त राष्ट्र संघ (UN)"],
  correctAnswer: "विश्व व्यापार संगठन (WTO)"
  },
  {
  question: "कुन आर्थिक अवधारणाले निश्चित अवधिमा देशको सिमाना भित्र उत्पादन भएका सबै अन्तिम वस्तु र सेवाहरूको कुल मूल्यलाई जनाउँछ?",
  options: ["सकल राष्ट्रिय उत्पादन (जीएनपी)", "सकल घरेलु उत्पादन (जीडीपी)", "शुद्ध राष्ट्रिय आय (NNI)", "राष्ट्रिय आय"],
  correctAnswer: "सकल घरेलु उत्पादन (GDP)"
  },
  {
  question: "जनताले चाहेका सबै वस्तु तथा सेवाहरू उत्पादन गर्न पर्याप्त स्रोतसाधन नभएको अवस्थालाई वर्णन गर्न प्रयोग गरिने शब्दलाई के भनिन्छ?",
  options: ["अभाव", "अधिशेष", "अभाव", "प्रचुरता"],
  correctAnswer: "अभाव"
  },
  {
  question: "तलका मध्ये कुन बजार अर्थतन्त्रको विशेषता होइन?",
  options: ["स्रोतको निजी स्वामित्व", "सरकार द्वारा केन्द्रीय योजना", "माग र आपूर्ति द्वारा मूल्य निर्धारण", "उत्पादकहरू बीच प्रतिस्पर्धा"],
  correctAnswer: "सरकार द्वारा केन्द्रीय योजना"
  },
  {
  question: "अर्थशास्त्रमा 'लोचता' शब्दले के बुझाउँछ?",
  options: ["मानिसको चाहना पूरा गर्ने असलको क्षमता", "मूल्यमा परिवर्तनको लागि माग गरिएको मात्राको प्रतिक्रिया", "खरिदका लागि उपलब्ध वस्तु वा सेवाको कुल रकम", "देशको आर्थिक उत्पादनको मापन"],
  correctAnswer: "मूल्यमा परिवर्तनको लागि माग गरिएको मात्राको प्रतिक्रिया"
  },
  {
  question: "तलका मध्ये कुन प्रतिगामी करको उदाहरण हो?",
  options: ["आयकर", "बिक्री कर", "सम्पत्ति कर", "कर्पोरेट कर"],
  correctAnswer: "बिक्री कर"
  },
  {
  question: "वित्तीय नीतिको मुख्य उद्देश्य के हो?",
  options: ["मुद्रास्फीति नियन्त्रण", "बेरोजगारी व्यवस्थापन", "ब्याज दर नियमन", "सरकारी खर्चलाई स्थिर बनाउने"],
  correctAnswer: "सरकारी खर्चलाई स्थिर बनाउने"
  }
  ];

const Economics= ({ navigation }) => {

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
  
  

export default Economics

