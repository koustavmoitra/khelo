import React, { useLayoutEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import Login from './Login';
import { Linking } from 'react-native';



export default function Profile({ navigation }) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleLogout, setModalVisibleLogout] = useState(false);
  const [isModalVisibleShare, setModalVisibleShare] = useState(false);
  const [checked, setChecked] = useState('male'); // Initial value



  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerTitle}>Profile</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  // share function
  const handleSharePress = () => {
    setModalVisibleShare(true);
  };


  // logout function
  const handleLogoutPress = () => {
    console.log("Logout button pressed");
    setModalVisibleLogout(true);
  };
  const handleLogoutConfirmation = (confirmed) => {
    setModalVisibleLogout(false);

    if (confirmed) {
      navigation.navigate('Login');
    }
  };

  const handleModalSubmit = () => {
    // handle the submission of the modal form
    setModalVisible(false); // Close the modal after submission
  };


  const openWhatsApp = () => {
    Linking.openURL('whatsapp://send?text=Hello%20from%20my%20app');
  };

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/sharer/sharer.php?u=myappurl');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/');
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.profileInfo}>

        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={handleSharePress}>
            <Ionicons name='share-social-outline' size={30} style={styles.icon} />
            <Text style={styles.iconText}>Share </Text>
          </TouchableOpacity>
        </View>

{/* share modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisibleShare}
          onRequestClose={() => setModalVisibleShare(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Share Profile via</Text>
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



{/* logout button */}
        <View style={styles.rightIcon}>
          <TouchableOpacity onPress={handleLogoutPress}>
            <Ionicons name='log-out-outline' size={30} style={styles.icon} />
            <Text style={styles.iconText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>


{/* logout modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisibleLogout}
        onRequestClose={() => setModalVisibleLogout(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtonsContainerLogout}>
              <TouchableOpacity
                style={styles.modalButtonOption}
                onPress={() => handleLogoutConfirmation(true)}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonOption}
                onPress={() => handleLogoutConfirmation(false)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>



      {/* profile Avatar with edit Icon */}
      <View style={styles.avatarContainer}>
        <Image source={require('./../Assets/Images/profilepic.jpg')} style={{ width: '50%', height: 170, alignSelf: 'center', resizeMode: 'cover', borderRadius: 100, borderColor: '#fff', borderWidth: 2, }} />
       
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name='create-outline' size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>


      {/* Input Fields non-editable*/}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name :</Text>
        <TextInput
          style={styles.input}
          placeholder=" Koustav" editable={false}
        />

        <Text style={styles.label}>Last Name :</Text>
        <TextInput
          style={styles.input}
          placeholder="Moitra" editable={false}
        />

        <Text style={styles.label}>Email :</Text>
        <TextInput
          style={styles.input}
          placeholder="koustavmoitra711@gmail.com" editable={false}
        />


        <Text style={styles.label}>Mobile :</Text>
        <TextInput
          style={styles.input}
          placeholder=" 8917580392" editable={false}
        />

        <Text>Gender</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="male"
            status={checked === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('male')}
          />
          <Text>Male</Text>

          <RadioButton
            value="female"
            status={checked === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('female')}
          />
          <Text>Female</Text>

          <RadioButton
            value="Others"
            status={checked === 'Others' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Others')}
          />
          <Text>Others</Text>
        </View>
      </View>

      {/* Modal for editing Profile */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput style={styles.modalInput} placeholder="First Name" />
            <TextInput style={styles.modalInput} placeholder="Last Name" />
            <TextInput style={styles.modalInput} placeholder="Email" />
            <TextInput style={styles.modalInput} placeholder="Mobile" />
            <Text>Gender</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="male"
                status={checked === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('male')}
              />
              <Text>Male</Text>

              <RadioButton
                value="female"
                status={checked === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('female')}
              />
              <Text>Female</Text>

              <RadioButton
                value="Others"
                status={checked === 'Others' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Others')}
              />
              <Text>Others</Text>
            </View>

            <TouchableOpacity style={styles.modalUploadButton}>
              <Text style={styles.modalButtonText}>Upload Image</Text>
            </TouchableOpacity>
            <Button title="Submit" onPress={handleModalSubmit} />
          </View>
        </View>
      </Modal>
    </ScrollView>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  profileText: {
    fontSize: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 5,
    padding: 10,
  },
  labelContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  // New styles for the modal
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
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
  },
  modalUploadButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
  },

  modalButton: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: 'white',
  },

  // logout model
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
    backgroundColor: '#007BFF', 
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
    color: 'black', 
    padding: 15,
    marginBottom: 5,
  },

});
