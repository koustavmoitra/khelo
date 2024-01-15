import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useLayoutEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Dropdown from 'react-native-modal-dropdown';
import CalendarModal from './CalendarModal';
import LocationModal from './LocationModal';



export default function Nearby() {
  const navigation = useNavigation();
  const [isGameModalVisible, setGameModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const [isLocationModalVisible, setLocationModalVisible] = useState(false);


  // game modal
  const openGameModal = () => {
    setGameModalVisible(true);
  };
  const closeGameModal = () => {
    setGameModalVisible(false);
  };
  const handleGameSelect = (index, value) => {
    setSelectedGame(value);
    closeGameModal();
  };


// calandar modal
  const openCalendarModal = () => {
    setSelectedDate('');
    setCalendarModalVisible(true);
  };
  const closeCalendarModal = () => {
    setCalendarModalVisible(false);
  };


// location modal
  const openLocationModal = () => {
    setSelectedDate('');
    setLocationModalVisible(true);
  };
  const closeLocationrModal = () => {
    setLocationModalVisible(false);
  };



  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={styles.headerTitle}>Near By</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View>
        <Text style={{ textAlign: 'center', padding: 10, fontWeight: 'bold', fontSize: 25 }}>Nearby Matches </Text>
      </View>

      <View style={styles.container}>


        {/* select game button */}
        <TouchableOpacity style={[styles.bigButton, { width: '80%' }]} onPress={openGameModal}>
          <Ionicons name="add-circle-outline" size={46} color="black" />
          <Text style={styles.buttonText}>Select Game</Text>
        </TouchableOpacity>


        {/* Modal for Selecting Game */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isGameModalVisible}
          onRequestClose={closeGameModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Game</Text>
              <Dropdown
                options={['Cricket', 'Football', 'Tennis', 'Kabaddi']}
                onSelect={handleGameSelect}
                style={styles.dropdown}
                dropdownStyle={styles.dropdownContainer}
                textStyle={{ fontSize: 18 }}
                defaultValue={selectedGame || 'Select a Game'}
              />
            </View>
          </View>
        </Modal>


        {/* three buttons with location, date, and time */}
        <View style={styles.smallButtonsContainer}>
          <TouchableOpacity style={styles.smallButton} onPress={openLocationModal}>
            <Ionicons style={styles.icon} name="location" size={28} color="black" />
            <Text style={styles.buttonText}>Location</Text>
          </TouchableOpacity>
          <LocationModal isVisible={isLocationModalVisible} onClose={closeLocationrModal} />


          <TouchableOpacity style={styles.smallButton} onPress={openCalendarModal}>
            <Ionicons style={styles.icon} name="calendar" size={28} color="black" />
            <Text style={styles.buttonText}>Date</Text>
          </TouchableOpacity>
          <CalendarModal isVisible={isCalendarModalVisible} onClose={closeCalendarModal} />


          <TouchableOpacity style={styles.smallButton}>
            <Ionicons style={styles.icon} name="alarm" size={28} color="black" />
            <Text style={styles.buttonText}>Time</Text>
          </TouchableOpacity>
        </View>


        {/*  "Let's Play" button */}
        <TouchableOpacity style={[styles.letsPlayButton, { width: '70%' }]}>
          <Text style={styles.letsPlayText}>Let's Play</Text>
        </TouchableOpacity>



        {/* "View Matches" button */}
        <TouchableOpacity
          style={[styles.bigButton, { width: '80%' }]}
          onPress={() => navigation.navigate('ViewMatches')}
        >
          <Text style={styles.viewMatchesText}>View Matches</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigButton: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  smallButtonsContainer: {
    flexDirection: 'column',
    marginVertical: 10,
    width: '50%',
    justifyContent: 'space-between', 
  },
  smallButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 10, 
    borderWidth: 2,           
    borderColor: 'darkgray',
  },
  letsPlayButton: {
    backgroundColor: '#129E74',
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
    shadowColor: 'darkgreen',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,           
    borderColor: 'darkgreen', 
  },
  letsPlayText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewMatchesText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 2,
    borderColor: 'darkgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%', 
  },
  dropdownContainer: {
    width: '70%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
  },

});
