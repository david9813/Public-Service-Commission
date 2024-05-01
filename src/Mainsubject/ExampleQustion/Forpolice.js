import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Forpolice = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>
            {" "}
            प्रदेश लोक सेवा आयोग, मधेश प्रदेश
          </Text>
          <Text style={styles.HeaderText}>
            {" "}
            प्रशासन सेवा (अप्राविधिक), सामान्य प्रशासन/लेखा समुह, सहायक चौथो,
            खरिदार वा सो सरह पदको प्रतियोगितात्मक लिखित परीक्षा{" "}
          </Text>
          <Text style={{ textAlign: "center" }}>२०८०/०२/०५</Text>
        </View>

        <View style={styles.ContanerOne}>
          <Text>समय : २:३० मिनेट </Text>
          <Text> पत्रः द्वितीय </Text>
          <Text> पूर्णाङ्क : १००</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            विषय : कार्यालय व्यवस्थापन{" "}
          </Text>
          <Text style={{ textAlign: "center" }}>(Office Management) </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            {" "}
            निम्न प्रश्नहरुको उत्तर Section अनुसार छुट्टाछुट्टै उत्तरपुस्तिकामा
            लेख्नुपर्नेछ, अन्यथा उत्तरपुस्तिका रद्द हुनेछ।
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Section - A
          </Text>
        </View>

        <View style={styles.Qustion_Contaner}>
          <Text style={styles.Qustion_Text}>
            १. एउटा असल पत्रमा हुनुपर्ने गुणहरुको चर्चा गर्नुहोस् । (Discuss the
            attributes of a good letter.) (5) {"\n"}
            {"\n"}
            २. कार्यालयमा दर्ता र चलानी किन गरिन्छ ? दर्ता र चलानी बीच के फरक
            हुन्छ ? उदाहरण सहित लेखुहोस् । (Why is Registration and Dispatch
            done in the Office? What is the difference between Registration
            and Dispatch? Write with examples.) २+३=५ {"\n"}
            {"\n"}
            ३. टिप्पणी र प्रतिवेदन वीचको फरक बारेमा प्रकाश पार्दै टिप्पणी तयार
            गर्दा ध्यान दिनुपर्ने कुराहरु के-के हुन उल्लेख गर्नुहोस् ।
            (Highlighting the difference between a Commentary and a Report
            writing and, mention the points to be considered while preparing a
            commentary.) ५+५=१० {"\n"}
            {"\n"}
            ४. अनुक्रमणिका (Indexing) भन्नाले के लाई बुझाउँछ ? परिभाषा प्रस्तुत
            गर्दै यसको आवश्यक्ता तथा महत्व किन छ ? स्पष्ट गर्नुहोस् । (Define
            Indexing. Clarify its necessity and importance.) ५ {"\n"}
            {"\n"}
            ५. . बैठक व्यवस्थापन अन्तर्गत के कस्ता कार्य पर्दछन् ? सिलसिलेवार
            रुपमा छोटकरीमा चर्चा गर्नुहोस् ? (What activities are done in
            meeting management? Briefly discuss sequentially.) ५ {"\n"}
            {"\n"}
            ६. कार्यालयमा जनसम्पर्क व्यवस्थापनको आवश्यक्ताको चर्चा गर्नुका साथै
            नेपालको विद्दमान परिप्रेक्ष्यमा
          </Text>
        </View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {" "}
          Section - B{" "}
        </Text>
        <View style={styles.Qustion_Contaner}>
          <Text style={styles.Qustion_Text}>
            ७. जनसम्पर्क व्यवस्थापनका चुनौतीहरु उल्लेख गर्नुहोस् । (Discuss the
            necessity of Public Relation Management in Office and also mention
            the challenges of Public Relation Management in the existing
            context of Nepal.) ५+५=१० {"\n"}
            {"\n"}
            ८. मधेश प्रदेश लोक सेवा आयोगको काम, कर्तव्य र अधिकारहरु उल्लेख
            गर्नुहोस् (Describe the functions, duties and rights of Provincial
            Public Service Commission of Madhesh) ५ {"\n"}
            {"\n"}
            ९. मधेश प्रदेशका मुख्यमन्त्री तथा मन्त्रिपरिषदको कार्यालयको कामहरु
            उल्लेख गर्नुहोस् । (Describe the functions of Office of the Chief
            Minister and Council of Ministers in Madhesh Pradesh.) १० {"\n"}
            {"\n"}
            १०. नागरिकका कर्तव्यवारे नेपालको संविधानमा गरिएका व्यवस्थावारे उल्लेख
            गर्दै नेपालमा नागरिकको कर्तव्य पालनामा देखिएका समस्या र समाधानका
            उपायहरु वारे आफ्नो सुझाव पेश गर्नुहोस् । (Mentioning the
            Provisions made in the Constitution of Nepal regarding the duties
            of Citizens and submit your suggestions regarding the problems and
            solutions found in the fulfilment of the duties of citizens in
            Nepal.) ४+६=१० {"\n"}
          </Text>
        </View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {" "}
          Section - c{" "}
        </Text>
        <View style={styles.Qustion_Contaner}>
          <Text style={styles.Qustion_Text}>
            ११. बावु र छोराको हालको उमेरको योगफल ४४ छ। ८ वर्ष पछि बाबुको उमेर
            छोराको उमेरको दुई गुणा हुनेछ भने तिनिहरुको हालको उमेर पत्ता
            लगाउनुहोस् । (The sum of the present ages of the father and son is
            44. After 8 years, the age of the father will be twice of the age
            of the son. Find their present ages.) ५ {"\n"} {"\n"}
            १२.२. एउटा कक्षामा भएका ५० जना विद्यार्थिहरुलाई नेपाली, ईतिहास वा
            दुवै विषय मन पर्दछन् । ति मध्ये २० जनाले दुवै विषय मन पराउदछन। यदि
            नेपाली मन पर्नेको संख्याको अनुपात ३:२ छ, भेन चित्र प्रयोग गरी
            पत्ता लगाउनुहोस् :- i) कति जना विद्यार्थिलाई नेपाली मन पर्छ ? ii)
            कति जनालाई ईतिहास मात्र मन पर्छ ?(50 students in a classroom like
            Nepali, History or both subjects. Out of them 20 like both
            subjects. If ५ the ratio of the numbers of the students who like
            Nepali and History is 3:2, using the Ven-diagram find; i. How many
            students like Nepali? ii. How many like History only?) ५ {"\n"}{"\n"}
            १३. एउटा घडी १७% नोक्सान खाएर रु.४१५० मा विक्री भएको थियो। उक्त घडीको
            खरिद मुल्य कति थियो ? (A watch was sold for Rs.4150 at a loss of
            17%. What would have been the purchase price?) ५ {"\n"}{"\n"}
            1४. रु. ८००० को प्रति वर्ष १५% का दरले २ वर्ष ४ महिना पछिको चक्रिय
            प्रणालीमा हुने व्याज पत्ता लगाउनुहोस् । (Find the compound
            interest on Rs.8000 at 15% per annum for 2 year 4 months,
            compounded annually.)५ {"\n"}{"\n"}
            1५. तलका अङ्कहरुको औसत निकाल्नुहोस क. ८७,८४, ८६, ९०.८२,८८, ७८, ७५ ख.
            १, ३, ५, ७, ९, ११, १३, १५ (Find the average of the following figures;
            I. 87, 84, 86, 90, 82, 88, 78, 75 ख.1, 3, 5, 7, 9, 11, 13, 15)५ {"\n"}{"\n"}
            1६. त्रिभुज ABC को क्षेत्रफल निकाल्नुहोस जस्मा AB=5cm, BC=7cm र CA= 6
            cm छ (Find the area of a triangle ABC having side AB-5cm, BC=7cm and
            CA= 6cm. )५{" "}
          </Text>
          <Text>समाप्त </Text>
        </View> 
      </ScrollView>
    </View>
  );
};

export default Forpolice;

const styles = StyleSheet.create({
  Header: {
    paddingTop: 20,
  },
  HeaderText: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 15,
  },
  ContanerOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  Qustion_Contaner: {
    padding: 20,
  },
  Qustion_Text: {
    padding: 20,
    fontWeight: "bold",
  },
});
