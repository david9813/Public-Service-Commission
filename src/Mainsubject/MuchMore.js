
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MuchMore = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.header}>लोक सेवा आयोगको परीक्षा तयारीका लागि तपाईंले जान्नै पर्ने कुरा हरु</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. नेपालको इतिहास र सांस्कृति </Text>
                    <Text style={styles.content}>
                        - नेपालको प्राचीन, मध्यकालिन, र आधुनिक इतिहास। {"\n"}
                        - सांस्कृतिक धरोहर र परम्पराहरू।
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. वर्तमान घटनाहरू</Text>
                    <Text style={styles.content}>
                        - राष्ट्रिय र अन्तर्राष्ट्रिय घटनाहरू {"\n"}
                        - राजनीतिक, आर्थिक, र सामाजिक विकासहरू
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. भूगोल र पर्यावरण </Text>
                    <Text style={styles.content}>
                        - नेपालको भौतिक भूगोल, चरित्र, र मौसम {"\n"}
                        - पर्यावरण समस्याहरू र संरक्षण प्रयासहरू
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4.राजनीति र शासन</Text>
                    <Text style={styles.content}>
                        - सरकारको राजनीतिक तथा शासन गर्ने ढाँचा {"\n"}
                        - सार्वजनिक प्रशासन र शासन व्यवस्था
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5.अर्थतन्त्र</Text>
                    <Text style={styles.content}>
                        - आर्थिक नीति र विकास योजनाहरू {"\n"}
                        - प्रमुख आर्थिक सूचीहरू र रुझानहरू
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>6.नेपालको सामान्य ज्ञान</Text>
                    <Text style={styles.content}>
                        - विभिन्न क्षेत्रमा प्रसिद्ध व्यक्तित्वहरू {"\n"}
                        - महत्त्वपूर्ण उपलब्धिहरू
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>7. नेपाली साहित्य र भाषा</Text>
                    <Text style={styles.content}>
                        - प्रमुख साहित्यिक कृतिहरू र लेखकहरू {"\n"}
                        - नेपाली व्याकरण र भाषाका दक्षता
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>8.विज्ञान र प्रविधि नेपालमा</Text>
                    <Text style={styles.content}>
                        - विज्ञान र प्रविधिमा सफलताहरू। {"\n"}
                        - गर्दैछ अन्गिकृत र अद्वितीयताहरू।
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>9.सामाजिक समस्याहरू</Text>
                    <Text style={styles.content}>
                        - शिक्षा, स्वास्थ्य, रोजगार, र  अल्प सङ्ख्य समुदाय सम्बन्धी समस्याहरू {"\n"}
                        - सामाजिक कल्याणका लागि सरकारका पहलहरू
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>10.नेपालसँग सम्बन्धित अन्तर्राष्ट्रिय सम्बन्धहरू</Text>
                    <Text style={styles.content}>
                        - द्विपक्षीय र बहुपक्षीय सम्बन्धहरू {"\n"}
                        - नेपालको अंतर्राष्ट्रिय संगठनमा भूमिका
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Importance note </Text>
                    <Text style={styles.content}>
                        
                        परीक्षाको लागि पुराना प्रश्नपत्रहरूसँग नियमित प्रशिक्षण गर्नुहोस् र समाचारमा रहेर अपडेट रहुनुहोस्।
                        सम्बन्धित निर्देशनका लागि पनि लोक सेवा आयोगको दिएको विशेष शिक्षा सिलेबसलाई हेर्नुहोस्।

                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
    },
});



export default MuchMore

