import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  Pressable
} from 'react-native';

const { width } = Dimensions.get('window');

const TextWithTranslation = ({ text }) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleWordPress = (word) => {
    setSelectedWord(word);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openDetails = () => {
    closeModal()
    router.push('/WordDetails')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text.split(' ').map((word, index) => (
          <TouchableWithoutFeedback key={index} onLongPress={() => handleWordPress(word)}>
            <Text style={[styles.word]}>{word} </Text>
          </TouchableWithoutFeedback>
        ))}
      </Text>

      {/* Bottom Modal */}
      <Modal animationType="slide" transparent visible={isModalVisible}>
        <Pressable style={styles.overlay} onPress={closeModal}>
            <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{selectedWord}</Text>
            <View style={{display:'flex', flexDirection:'row'}}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openDetails} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Details</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flexWrap: 'wrap',
  },
  word: {
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    position: 'absolute',
    borderWidth: 1,
    bottom: 10,
    width: "95%",
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TextWithTranslation;