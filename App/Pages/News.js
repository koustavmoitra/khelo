import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const News = () => {
  const navigation = useNavigation();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={styles.headerTitle}>News</Text>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5c69686b8f704033be0c9efac48e5e6b');
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNewsPress(item)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: item.urlToImage }} style={{ width: 120, height: 120, borderRadius: 10, marginRight: 10 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{item.title}</Text>
          <Text style={{ fontSize: 13 }}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleNewsPress = (item) => {
    // Handle navigation to a detailed news page or any other action
    // You can use the 'navigation' object to navigate to a detailed news page
    // For example: navigation.navigate('NewsDetail', { newsItem: item });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={50} color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={newsData}
          keyExtractor={(item) => item.url}
          renderItem={renderNewsItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default News;
