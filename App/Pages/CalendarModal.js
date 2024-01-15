import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';


const CalendarModal = ({ isVisible, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('');
  
    return (
      <Modal isVisible={isVisible} onBackdropPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateButtonText}>Select Date</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    dateButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
    },
    dateButtonText: {
      color: 'white',
      fontSize: 16,
    },
    datePicker: {
      width: 200,
      marginTop: 10,
    },
    dateInput: {
      borderWidth: 0,
    },
    dateText: {
      fontSize: 16,
      color: 'black',
    },
  });
  
  export default CalendarModal;
  