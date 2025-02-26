import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  Pressable,
} from "react-native";

import translate from "translate-google-api";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Speech from "expo-speech";

const { width } = Dimensions.get("window");

const TextWithTranslation = ({ text, textStyle }) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [translation, setTranslation] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleWordPress = (word) => {
    setSelectedWord(word);
    setModalVisible(true);
    handleTranslation(word);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTranslation("");
  };

  const readWord = (word) => {
    Speech.speak(word);
    Speech.speak(translation);
  };

  const openDetails = () => {
    closeModal();
    router.push(
      { pathname: "/WordDetails", params: { word: selectedWord } },
    );
  };

  const handleTranslation = async (word) => {
    translate(word, { to: "bn" })
      .then((res) => {
        setTranslation(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text.split(" ").map((word, index) => (
          <TouchableWithoutFeedback
            key={index}
            onLongPress={() => handleWordPress(word)}
          >
            <Text
              style={[
                styles.word,
                textStyle,
                word === selectedWord && isModalVisible
                  ? styles.selectedWord
                  : null,
              ]}
            >
              {word}{" "}
            </Text>
          </TouchableWithoutFeedback>
        ))}
      </Text>

      {/* Bottom Modal */}
      <Modal animationType="slide" transparent visible={isModalVisible}>
        <Pressable style={modalStyles.overlay} onPress={closeModal}>
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalContent}>
              <View style={modalStyles.buttonRow}>
                <Text style={modalStyles.modalText}>
                  {selectedWord} - {translation}
                </Text>
                <TouchableOpacity
                  onPress={() => readWord(selectedWord)}
                  style={{
                    padding: 5,
                    margin: 2,
                    backgroundColor: "#3498db",
                    borderRadius: 50,
                  }}
                >
                  <Ionicons name="volume-high" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={modalStyles.buttonRow}>
                <TouchableOpacity
                  style={modalStyles.closeButton}
                  onPress={closeModal}
                >
                  <Text style={modalStyles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={modalStyles.detailsButton}
                  onPress={openDetails}
                >
                  <Text style={modalStyles.detailsButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  text: {
    flexWrap: "wrap",
  },
  word: {
    // Keeping your original word style
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    position: "absolute",
    bottom: 10,
    width: "95%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  modalContent: {
    width: "100%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  closeButton: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#555",
    fontSize: 14,
    fontWeight: "500",
  },
  detailsButton: {
    backgroundColor: "#3498db",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});

const styles = StyleSheet.create({
  text: {
    flexWrap: "wrap",
  },
  container: {
    
  },
  word: {},
  selectedWord: {
    color: "#3498db",
    fontWeight: "500",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContainer: {
    position: "absolute",
    borderWidth: 1,
    bottom: 10,
    width: "95%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TextWithTranslation;
