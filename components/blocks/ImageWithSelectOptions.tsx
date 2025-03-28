import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import HeaderSelectOptions from "./common/HeaderSelectOptions";

type ImageWithSelectOptionsProps = {
  values: string[];
  images: any[]; // Update this with proper image type if available
};

const ImageWithSelectOptions = ({ values, images }: ImageWithSelectOptionsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array(images.length).fill("")
  );
  const [activePickerIndex, setActivePickerIndex] = useState<number | null>(null);

  const handleSelection = (index: number, value: string) => {
    const newSelections = [...selectedOptions];
    newSelections[index] = value;
    setSelectedOptions(newSelections);
    setActivePickerIndex(null);
  };

  return (
    <View style={styles.container}>
      {/* Display Options at the Top */}
      <HeaderSelectOptions values={values}/>

      {/* Display Images with Select Options */}
      <View style={styles.imageContainer}>
        {images.map((source, index) => (
          <View key={index} style={styles.imageBlock}>
            <Image
              source={source}
              style={styles.image}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={[
                styles.selectButton,
                selectedOptions[index] ? styles.filledSelectButton : null,
              ]}
              onPress={() => setActivePickerIndex(index)}
            >
              <Text style={[
                styles.selectButtonText,
                selectedOptions[index] ? styles.filledSelectButtonText : null,
              ]}>
                {selectedOptions[index] || "Tap to select"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Modal for option selection */}
      <Modal
        visible={activePickerIndex !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setActivePickerIndex(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.optionsHeader}>
              <Text style={styles.optionsTitle}>Choose an option</Text>
              <TouchableOpacity
                onPress={() => setActivePickerIndex(null)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={values}
              keyExtractor={(item, index) => `option-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    activePickerIndex !== null &&
                      selectedOptions[activePickerIndex] === item &&
                      styles.selectedOptionItem,
                  ]}
                  onPress={() =>
                    activePickerIndex !== null &&
                    handleSelection(activePickerIndex, item)
                  }
                >
                  <Text
                    style={[
                      styles.optionText,
                      activePickerIndex !== null &&
                        selectedOptions[activePickerIndex] === item &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              style={styles.optionsList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImageWithSelectOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 2,
    borderColor: '#ddd',
    borderWidth:1,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  imageContainer: {
  },
  imageBlock: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  selectButton: {
    backgroundColor: "#f1f3f5",
    borderRadius: 4,
    padding: 12,
    width: "100%",
    borderWidth: 1,
    borderColor: "#dee2e6",
    alignItems: "center",
  },
  filledSelectButton: {
    backgroundColor: "#e7f5ff",
    borderColor: "#4dabf7",
  },
  selectButtonText: {
    color: "#6c757d",
    fontSize: 16,
    fontWeight: "500",
  },
  filledSelectButtonText: {
    color: "#1971c2",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalContent: {
    width: "80%",
    maxHeight: "50%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  optionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionsTitle: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#666",
  },
  optionsList: {
    flexGrow: 0,
    maxHeight: 250,
  },
  selectedOptionItem: {
    backgroundColor: "#f8f9fa",
  },
  selectedOptionText: {
    color: "#007AFF",
  },
});