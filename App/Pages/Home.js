import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList,TouchableOpacity,ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Nearby from './Nearby';
import Profile from './Profile';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Home = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={styles.headerTitle}>Home</Text>
        </View>
      ),
    });
  }, [navigation]);

  const ProductCard = ({ title, description, imageUrl }) => (
    <View style={styles.productCard}>
      <Image source={imageUrl} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{title}</Text>
      </View>
    </View>
  );

  

  const images = [
    require('../Assets/Images/bannermain.jpg'),
    require('../Assets/Images/banner4.jpg'),
    require('../Assets/Images/banner5.jpg'),
  ];

  const products = [
    { id: '1', title: 'cricket', imageUrl: require('../Assets/Images/cricket1.jpg') },
    { id: '2', title: 'football', imageUrl: require('../Assets/Images/s3.jpg') },
    { id: '3', title: 'tennis', imageUrl: require('../Assets/Images/tennis.png') },
  ];

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.sliderImage} />
  );

  return (
   

     <ScrollView>

      {/* Section 1: Image Slider */}
      <View style={styles.imageSliderContainer}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          layout="default"
          loop
        />
      </View>

      


      {/* Section 2: sports Cards */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Sports</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              imageUrl={item.imageUrl}
            />
          )}
        />
       <TouchableOpacity onPress={() => navigation.navigate("Sports")}>
          <Text style={styles.moreText}>more...</Text>
        </TouchableOpacity>
      </View>



      {/* Section 3: Latest News */}
      <View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>Latest News</Text>

  <View style={styles.bannerContainer}>
    <Image source={require('../Assets/Images/banner2.jpg')} style={styles.bannerImage} />
    <Image source={require('../Assets/Images/banner3.jpg')} style={styles.bannerImage} />
  </View>
  <TouchableOpacity onPress={() => navigation.navigate("News")}>
          <Text style={styles.moreText}>more...</Text>
        </TouchableOpacity>
</View>

    </ScrollView>
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
  imageSliderContainer: {
    height: 200,
    marginVertical: 10,
  },
  sliderImage: {
    width: '100%',
    height: '100%', 
    borderRadius: 10,
  },
  sectionContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCard: {
    marginRight: 20,
    width: 100,
    height: 150, // Adjust the height as needed
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '75%', // Adjust the height as needed
    borderRadius: 8,
  },
  productDetails: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%', // Adjust the height as needed
  },
  productTitle: {
    fontSize: 15, // Adjust the font size as needed
    fontWeight: 'bold',
    textAlign: 'center',
  },
   moreText: {
    fontSize: 16,
    color: 'blue', // Adjust the color as needed
    textAlign: 'right',
    marginTop: 10,
  },

   bannerContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  bannerImage: {
    width: '100%',
    height: 150, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 10,
    resizeMode :'contain',
  },
 
});

export default Home;
