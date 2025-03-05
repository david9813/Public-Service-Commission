// Home.js
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import History from "./Mainsubject/History";
import Geography from "./Mainsubject/Geography";
import QuizHome from "./Quiz/QuizHome";
import MuchMore from "./Mainsubject/MuchMore";
import Qustion from "./Mainsubject/Qustion";
import CurrentEvents from "./Quiz/CurrentEvents";
import GeographyEnvironment from "./Quiz/GeographyEnvironment";
import PoliticsGovernance from "./Quiz/PoliticsGovernance";
import Economics from "./Quiz/Economics";
import GeneralKnowledgeNepal from "./Quiz/GeneralKnowledgeNepal";
import LiteratureLanguage from "./Quiz/LiteratureLanguage";
import ScienceTechnology from "./Quiz/ScienceTechnology";
import SocialIssues from "./Quiz/SocialIssues";
import InternationalRelations from "./Quiz/InternationalRelations";

import Forpolice from "./Mainsubject/ExampleQustion/Forpolice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import forTecher from "./Mainsubject/ExampleQustion/forTecher";


import Userpost from "./Userpost/Userpost";
import Userchat from "./Userpost/Userchat";
import Frind from "./Userpost/Frind";

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>

      <View style={styles.A}>
        <View style={styles.container}>
          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
            }
          >
            <Text style={styles.buttonText}>
              लोक सेवा परीक्षाका लागि प्रश्नहरू
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL("https://lawcommission.gov.np/np/?cat=87")
            }
          >
            <Text style={styles.buttonText}>नेपालको संविधान</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://gorkhapatraonline.com/categories/loksewa"
              )
            }
          >
            <Text style={styles.buttonText}>
              गोरखापत्रमा आज प्रकाशित प्रश्नहरू
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://psc.gov.np/")}
          >
            <Text style={styles.buttonText}>लोक सेवा आयोग</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("नमुना प्रश्न")}
          >
            <Text style={styles.buttonText}>नमुना प्रश्न</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("विविध समग्री")}
          >
            <Text style={styles.buttonText}>विविध समग्री</Text>
          </TouchableOpacity>
        </View>
        
      </View>


    </ScrollView>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>

<Stack.Screen
  name="लोक सेवा तयारी"
  component={Home}
  options={({ navigation }) => ({
    headerLeft: () => null,  // Hide the back arrow
    headerStyle: {
      backgroundColor: "#B23850",
    },
    // Header title at the top
    headerTitle: () => (
      <View style={styles.headerTitleContainer}>
        {/* Title - "लोक सेवा तयारी" */}
        <Text style={styles.headerTitle}>लोक सेवा तयारी</Text>
      </View>
    ),

    headerRight: () => (
      <View style={styles.iconContainer}>


         {/* Home Icon */}
         <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons name="home-outline" size={40} color="#fff" />
        </TouchableOpacity>


 {/* frind Icon */} 

<TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate("frind")}
        >
          <MaterialCommunityIcons name="account-multiple" size={40} color="#fff" />
        </TouchableOpacity>

        

       
       
<TouchableOpacity
  style={styles.headerIcon}
  onPress={() => navigation.navigate("Userchat")}
>
  <AntDesign name="wechat" size={30} color="#fff" /> 
</TouchableOpacity>

       

  
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate("Userpost")}
        >
         <MaterialCommunityIcons name="book-multiple" size={30} color="#fff" /> 
        </TouchableOpacity>

{/* Menu Icon to open drawer */}
<TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.headerIcon}
        >
          <MaterialCommunityIcons name="menu" size={40} color="#fff" />
        </TouchableOpacity>

      </View>
    ),
    headerStyle: {
      backgroundColor: "#B23850", // Background color for the header
      height: 140, // Adjusted height for both title and icons
    },
    headerTitleStyle: {
      textAlign: "center",
      color: "#fff",
      fontSize: 24, 
    
    
    },
  })}
/>

      <Stack.Screen
        name="लोक सेवा परीक्षाका लागि प्रश्नहरू"
        component={QuizHome}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("लोक सेवा तयारी")}
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="नमुना प्रश्न"
        component={Qustion}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("लोक सेवा तयारी")}
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
          },
        })}
      />
      <Stack.Screen
        name="विविध समग्री"
        component={MuchMore}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("लोक सेवा तयारी")}
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
          },
        })}
      />
      <Stack.Screen
        name="Qustions"
        component={Geography}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="वर्तमान घटनाहरू"
        component={CurrentEvents}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="भूगोल र पर्यावरण"
        component={GeographyEnvironment}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="राजनीति र शासन"
        component={PoliticsGovernance}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="अर्थतन्त्र"
        component={Economics}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="नेपालको सामान्य ज्ञान"
        component={GeneralKnowledgeNepal}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="नेपाली साहित्य र भाषा"
        component={LiteratureLanguage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="विज्ञान र प्रविधि नेपालमा"
        component={ScienceTechnology}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="सामाजिक समस्याहरू"
        component={SocialIssues}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="नेपालसँग सम्बन्धित अन्तर्राष्ट्रिय सम्बन्धहरू"
        component={InternationalRelations}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("लोक सेवा परीक्षाका लागि प्रश्नहरू")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />

      <Stack.Screen name="Qustion" component={Qustion} />
      <Stack.Screen
        name="खुला प्रतियोगितात्मक लिखित परीक्षा"
        component={Forpolice}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("नमुना प्रश्न")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />

      <Stack.Screen name="शिक्षक सेवा आयोग" component={forTecher} options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("नमुना प्रश्न")
              }
              style={{ marginLeft: 30 }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#B23850",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
          },
        })}
      />


<Stack.Screen
  name="Userpost"
  component={Userpost}
  options={{
    headerTitle: "User Post",
    headerStyle: {
      backgroundColor: "#B23850",
    },
    headerTitleStyle: {
      textAlign: "center",
      color: "#fff",
      fontSize: 18,
    },
  }}
/>



<Stack.Screen
  name="Userchat"
  component={Userchat}
  options={{
    headerTitle: "User Chat",
    headerStyle: {
      backgroundColor: "#B23850",
    },
    headerTitleStyle: {
      textAlign: "center",
      color: "#fff",
      fontSize: 18,
    },
  }}
/>



<Stack.Screen
  name="frind"
  component={Frind}
  options={{
    headerTitle: " frind list",
    headerStyle: {
      backgroundColor: "#B23850",
    },
    headerTitleStyle: {
      textAlign: "center",
      color: "#fff",
      fontSize: 18,
    },
  }}
/>

    </Stack.Navigator>
  );
}

export default HomeStack;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#ffffff", // White background
  },
  A: {},
  container: {
    padding: 20,
    headerTitleStyle: {
      textAlign: "left",
    },
  },
  separator: {
    height: 30,
  },
  button: {
    backgroundColor: "#3498db", // Blue
    padding: 20,
    marginBottom: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff", // White text
    textAlign: "center",
    fontSize: 20,
  },

  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginLeft: 80

  },


  headerTitle: {
    color: '#fff',
    fontSize: 24, 
    fontWeight: 'bold', 
  },


  iconContainer: {
    flexDirection: 'row', 
    marginTop: 20, 
    paddingBottom: 0,
    paddingRight: 40
  },

  // Individual icon style
  headerIcon: {
    marginHorizontal: 15, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});