import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const LiteratureLanguage = () => {
  return (
    <ScrollView>
    

    <View style={styles.container}>
       

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>नेपाली साहित्य र भाषा</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>प्रमुख साहित्यिक कृतिहरू र लेखकहरू:</Text>
        <Text style={styles.sectionContent}>
         
        <Text style={styles.bold}>विष्णु शर्मा:</Text> 'घुमघाममा जीवन', 'दर्शन अनुहार', 'मेरो धर्ती', र 'प्रतीक्षा' जस्ता महत्त्वपूर्ण कृतिहरूको लेखक। {'\n'}
          <Text style={styles.bold}> लक्ष्मीप्रसाद देवकोटा:</Text>'मुनामदन', 'साँझ बिर्ता', 'गीता', र 'साँझको सागर' जस्ता उत्कृष्ट कृतिहरूका लेखक।{"\n"}
          <Text style={styles.bold}> डेक बहादुर थापा:</Text> 'मल्ल अक्बर', 'अन्तर्वार्ता', र 'सानु संग दीर्घकालिन अन्तर्वार्ता' जस्ता महत्त्वपूर्ण कृतिहरूको लेखक।{"\n"}
         <Text style={styles.bold}>भूपी शेरचन:</Text> 'बद्री', 'चारूता', 'अर्का कुरा', र 'खलासी को नाटक' जस्ता प्रसिद्ध कृतिहरूको लेखक।
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>नेपाली व्याकरण र भाषाका दक्षता:</Text>
        <Text style={styles.sectionContent}>
         <Text style={styles.bold}>ध्वनि विज्ञान: </Text>नेपाली भाषामा ध्वनिक प्रणालीको अध्ययन, ध्वनिहरूको विशेषताहरू, उच्चारण कौशलको अध्ययन।{"\n"}
          <Text style={styles.bold}>शब्दरचना:</Text> शब्द र तत्वहरूको संरचना, क्रियाकलापहरू, पूर्वप्रत्ययहरू, प्रत्ययहरू, विशेषणहरू, सर्वनामहरू, आदि।{"\n"}
         <Text style={styles.bold}> वाक्य रचना: </Text> वाक्यको संरचना, वाक्यको प्रकारहरू, प्रत्यय प्रणाली, वाक्यांशहरू, समास, भाषाका आचरणहरू, उपमा, र उपमा आदि।{'\n'}
       <Text style={styles.bold}> अर्थशास्त्र: </Text> शब्दहरूको अर्थ, व्याकरणिक अर्थ, अर्थात्मक अर्थ, क्रियाकलाप, सामान्य औपचारिकता, पर्यायवाची र विपरीतार्थीहरूको अध्ययन।{'\n'}
      <Text style={styles.bold}>  सन्धि र समास: </Text> सन्धिहरूका प्रकार र अर्थ, समास निर्माणका नियमहरू, समासका प्रकारहरू, र तिनीहरूको अर्थ।
        </Text>

        <View>
          <Text> नेपाली साहित्य र भाषा को यस ढंगले पढ्ने छात्रहरूलाई लोक सेवा आयोगका परीक्षामा महत्त्वपूर्ण मद्दत पुर्याउनेछ, 
            जसले नेपाली साहित्य र भाषा बारेमा उनीहरूको समग्र अभिवृद्धि गराउनेछ</Text>
        </View>
      </View>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',}
});

export default LiteratureLanguage

