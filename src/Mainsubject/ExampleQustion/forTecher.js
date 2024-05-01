import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const Fortecher = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            नेपाल सरकार {"\n"}शिक्षक सेवा आयोग
          </Text>
          <Text style={styles.titleText}>
            {" "}
            {"\n"}खुला प्रतियोगितात्मक लिखित परीक्षा {"\n"}नमुना प्रश्नपत्र २०७८
          </Text>
        </View>

        <View style={styles.header}>
          <View style={styles.subTitleContainer}>
            <Text>तह : माध्यमिक {"\n"} विषय : नेपाली</Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>
              {" "}
              पूर्णाङ्क : १०० {"\n"} उत्तीर्णाङ्क : ४० {"\n"}
              समय ३ घण्टा
            </Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>खण्ड क</Text>
        <Text style={styles.content}>
          १. उच्चारण स्थानका आधारमा नेपाली व्यञ्जन वर्णको वर्गीकरण गरी यसको
          प्रभावकारी शिक्षणका कुनै पाँच कार्यकलाप प्रस्तुत गर्नुहोस् । (५+५){" "}
          {"\n"} २. कक्षा १० मा निबन्ध विधा शिक्षण गर्नका लागि एउटा एकाइ योजनाको
          नमुना निर्माण गर्नुहोस् । (१०) {"\n"}३. नेपाली भाषा शिक्षणमा त्रुटि
          विश्लेषण र व्यतिरेकी विश्लेषणको उपयोग कसरी गर्न सकिन्छ ? विश्लेषणात्मक
          उत्तर दिनुहोस् । (५+५)
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {" "}
          {"\n"}खण्ड ख{" "}
        </Text>

        <Text style={styles.content}>
          ४.भाषिक परिवर्तनका पाँच कारणहरू उल्लेख गरी अर्थका प्रकारहरूको सोदाहरण
          चर्चा गर्नुहोस् । (५+५) ५.{"\n"} माध्यमिक तहका विद्यार्थीहरूको
          वर्णविन्यासगत त्रुटिलाई निराकरण गर्न कार्यमूलक अनुसन्धानको ढाँचा
          निर्माण गर्नुहोस् । (१०) {"\n"}६. प्रश्नपत्र निर्माणमा ब्लुम्स
          टेक्सोनोमीको प्रयोग किन आवश्यक छ ? कक्षा ९ का नेपाली विषयका
          विद्यार्थीको मूल्याङ्कनमा उपयोगी कुनै ज्ञान, बोध, प्रयोग र उच्च दक्षता
          तहको एक एक ओटा विषयगत प्रश्न तयार गर्नुहोस् । (४+६) 
          {"\n"}द्रष्टव्यः पाठ्यक्रमको खण्ड क बाट पूर्णाङ्क ५० का ५ प्रश्न र
          खण्ड ख बाट पूर्णाङ्क ५० का ५ प्रश्न गरी १०० पूर्णाङ्कको परीक्षाका लागि
          यस्तै प्रकृतिका प्रश्नहरू दिइने छ ।
        </Text>
        
      </View>
    </ScrollView>
  );
};

export default Fortecher;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  subTitleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  scoreContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
  scoreText: {
    textAlign: "right",
    fontSize: 14,
    color: "#666666",
  },
  content: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
    color: "#444444",
  },
});
