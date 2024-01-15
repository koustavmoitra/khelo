import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Modal, Button } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';




export default function ViewMatches() {
  const [isModalVisibleShare, setModalVisibleShare] = useState(false);


  const handleSharePress = () => {
    setModalVisibleShare(true);
  };

  
  const openWhatsApp = () => {
    // Use deep linking to open WhatsApp
    Linking.openURL('whatsapp://send?text=Hello%20from%20my%20app');
  };

  const openFacebook = () => {
    // Use deep linking to open Facebook
    Linking.openURL('https://www.facebook.com/sharer/sharer.php?u=myappurl');
  };

  const openInstagram = () => {
    // Use deep linking to open Instagram
    Linking.openURL('https://www.instagram.com/');
  };


  return (
    <ScrollView>
      <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 10 }}>My Matches <TouchableOpacity onPress={handleSharePress}>
          <Ionicons name='share-social' size={35} style={[styles.icon]} />
          </TouchableOpacity> </Text>

          <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisibleShare}
        onRequestClose={() => setModalVisibleShare(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Share via</Text>
            <View style={styles.shareIconsContainer}>
              <TouchableOpacity onPress={openWhatsApp}>
                <FontAwesome name='whatsapp' size={30} style={styles.shareIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={openFacebook}>
                <FontAwesome name='facebook' size={30} style={styles.shareIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={openInstagram}>
                <FontAwesome name='instagram' size={30} style={styles.shareIcon} />
              </TouchableOpacity>
            </View>
            <Button title="Cancel" onPress={() => setModalVisibleShare(false)} />
          </View>
        </View>
      </Modal>

      {/* Upper Section */}
      <View style={styles.upperSection}>
        <View style={styles.upperBox}>
          <Text style={styles.upperBoxText}>Cricket Game Created <Ionicons name='checkmark-done-outline' size={40} style={styles.icon} /></Text>
          <Ionicons name='person-add-outline' size={40} style={styles.icon} />
          <Text style={styles.additionalInfoText}>1 Joined</Text>
          <Text style={styles.additionalInfoText}>Howrah <Ionicons name='location-outline' size={24} style={styles.icon} /> </Text>
          <Text style={styles.additionalInfoText}>13-01-2023 <Ionicons name="calendar" size={24} style={styles.icon} /> </Text>
        </View>
      </View>

  {/* Thin line above "Recommendation" */}
  <View style={styles.line} />


      {/* Lower Section */}
      <View style={styles.lowerSection}>
        <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 10, marginTop: 5 }}> Recommendation </Text>
        <View style={styles.lowerBox}>
          {/* Cricket Match Text */}
          <Text style={styles.cricketMatchText}>Cricket Match 🏏</Text>
          <Text style={styles.locationText}>Salt Lake <Ionicons name='location' size={24} style={styles.icon} /> 19-01-2022 <Ionicons name="calendar" size={24} style={styles.icon} /></Text>

          <Text style={styles.peopleJoinedText}> 9 People Joined <Ionicons name='person-add-outline' size={30} style={styles.icon} />
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: 'bold' }}>Join</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lowerBox}>
          {/* Cricket Match Text */}
          <Text style={styles.cricketMatchText}>Football Match ⚽</Text>
          <Text style={styles.locationText}>Howrah <Ionicons name='location' size={24} style={styles.icon} /> 22-01-2022 <Ionicons name="calendar" size={24} style={styles.icon} /></Text>
          <Text style={styles.peopleJoinedText}>5 People Joined <Ionicons name='person-add-outline' size={30} style={styles.icon} /> </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: 'bold' }}>Join</Text>
          </TouchableOpacity>

        </View>

      <View style={styles.lowerBox}>
          {/* Cricket Match Text */}
          <Text style={styles.cricketMatchText}>Cricket Match 🏏</Text>
          <Text style={styles.locationText}>Kolkata <Ionicons name='location' size={24} style={styles.icon} /> 30-01-2022 <Ionicons name="calendar" size={24} style={styles.icon} /></Text>

          <Text style={styles.peopleJoinedText}> 3 People Joined <Ionicons name='person-add-outline' size={30} style={styles.icon} />
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: 'bold' }}>Join</Text>
          </TouchableOpacity>
        </View>
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperBox: {
    width: '90%',
    height: 200,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperBoxText: {
    color: 'darkgreen',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  additionalInfoText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    padding: 3,
  },
  lowerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerBox: {
    width: '80%',
    height: 200,
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  cricketMatchText: {
    color: 'darkgreen',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '600',
    marginBottom: 10,
    fontWeight:'bold',
  },
  locationText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  peopleJoinedText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Inter',
    marginBottom: 10,
  },
  cricketIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#129E74',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    width: '40%',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: 20,
  },
  shareIcon: {
    color: 'black', // You can adjust the color as needed
    padding:15,
    marginBottom:5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonsContainerLogout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButtonOption: {
    flex: 1,
    backgroundColor: '#007BFF', // Adjust the color as needed
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  shareIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  shareIcon: {
    color: 'black', // You can adjust the color as needed
    padding:15,
    marginBottom:5,
  },
});