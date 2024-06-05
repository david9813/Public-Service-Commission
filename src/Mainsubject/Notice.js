import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';

const Notice = () => {
  const [nepalNews, setNepalNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchNews('nepal', setNepalNews);
      await fetchNews('world', setWorldNews);
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(fetchData, 24 * 60 * 60 * 1000); // Refresh news every day

    return () => clearInterval(interval);
  }, []);

  const fetchNews = async (query, setNews) => {
    try {
      console.log(`Fetching news for query: ${query}`);
      const response = await fetch(`https://gnews.io/api/v4/search?q=${query}&country=us&token=efd3327e26dab807e4babdce40990306`);
      const data = await response.json();
      console.log(`Data fetched for ${query}: `, data);
      setNews(data.articles || []); // Ensure articles is an array
    } catch (error) {
      console.error(`Error fetching ${query} news:`, error);
      setNews([]); // Set to empty array in case of error
    }
  };

  const openArticle = (url) => {
    Linking.openURL(url);
  };

  const renderArticles = (title, articles) => (
    <>
      <Text style={styles.title}>{title}</Text>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <TouchableOpacity key={index} onPress={() => openArticle(article.url)} style={styles.articleContainer}>
            {article.image && <Image source={{ uri: article.image }} style={styles.image} />}
            <View style={styles.textContainer}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.source}>{article.source.name}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noNews}>No news available</Text>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderArticles("Today's News Related to Nepal", nepalNews)}
          {renderArticles('Most Reading News Today from the World', worldNews)}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  articleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  source: {
    fontSize: 14,
    color: '#888',
  },
  noNews: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Notice;