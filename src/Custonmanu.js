import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Share,
  Linking,
  StatusBar,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Custommenu = ({ navigation }) => {
  const handleExit = () => {
    BackHandler.exitApp();
  };

  const shareApp = async () => {
    const appMessage =
      "Check out this amazing app Download it now! https://play.google.com/store/apps/details?id=com.davidsapkota.JourneyofFaith";

    try {
      const result = await Share.share({
        message: appMessage,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("App shared successfully.");
        } else {
          console.log("Share was dismissed.");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share was dismissed.");
      }
    } catch (error) {
      console.error("Error sharing app:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Customizing status bar */}
      <StatusBar backgroundColor="#B23850" barStyle="light-content" />

      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate("लोक सेवा तयारी")}>
          <Text style={styles.text}> My Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seconditems}>
        <TouchableOpacity onPress={() => navigation.navigate("Note")}>
          <Text style={styles.text}>
            {" "}
            NoteBook <FontAwesome name="book" size={20} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("News")}>
          <Text style={styles.text}>
            {" "}
            News{" "}
            <MaterialCommunityIcons
              name="book-open-outline"
              size={20}
              color="#fff"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://david-sapkota.netlify.app/")}
        >
          <Text style={styles.text}>
            {" "}
            Contact <FontAwesome name="address-card" size={20} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.third}>
        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>Share & Exit</Text>
        <TouchableOpacity onPress={shareApp} style={styles.touchableOpacity}>
          <Text style={styles.text}>
            {" "}
            Share <Feather name="share-2" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit} style={styles.touchableOpacity}>
          <Text style={styles.text}>
            {" "}
            Exit{" "}
            <MaterialCommunityIcons
              name="exit-to-app"
              size={24}
              color="black"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    backgroundColor: "#B23850",
  },
  menuItem: {
    justifyContent: "center",
    backgroundColor: "#B23850",
    flex: 0.3,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    color: "#ffffff", // White text
  },
  seconditems: {
    justifyContent: "center",
    backgroundColor: "#3B8BEB",
    flex: 0.7,
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#b2bec3",
    fontSize: 20,
    fontWeight: "bold",
  },
  third: {
    backgroundColor: "#C4DBF6",
    flex: 0.4,
    color: "#ffffff",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionTitle: {
    padding: 10,
    marginLeft: 10,
    marginBottom: -20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Custommenu;
