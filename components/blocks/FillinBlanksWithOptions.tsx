import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import HeaderSelectOptions from "./common/HeaderSelectOptions";

import translate from "translate-google-api";

type BlankProps = {
  value: string; // The sentence with a blank (e.g., "A ____ delivers letters.")
  labels?: string[]; // Hint text for the dropdown (Optional)
};

type FillinBlanksWithOptionsProps = {
  values: BlankProps[]; // Array of fill-in-the-blank sentences
  options: string[]; // All selectable options
  showOptions: boolean;
  showTranslations: boolean;
};

export default function FillinBlanksWithOptions({
  values,
  options,
  showOptions = true,
  showTranslations = false,
}: FillinBlanksWithOptionsProps) {
  const [translatedTextList, setTranslatedTextList] = useState(
    Array(values.length).fill("")
  );
  useEffect(() => {
    const translateAll = async () => {
      const translatedArray = await Promise.all(
        values.map(async (value) => {
          const res = await translate(value.value, { to: "bn" });
          return res;
        })
      );
      setTranslatedTextList(translatedArray);
    };

    translateAll();
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(values.length).fill("")
  );
  const [activePickerIndex, setActivePickerIndex] = useState<number | null>(null);

  const handleSelection = (index: number, value: string) => {
    const newSelections = [...selectedAnswers];
    newSelections[index] = value;
    setSelectedAnswers(newSelections);
    setActivePickerIndex(null);
  };

  return (
    <View style={styles.container}>
      {/* Display Selectable Options at the Top */}
      {showOptions && <HeaderSelectOptions values={options} />}

      {/* Fill-in-the-Blanks Section */}
      <View style={styles.blanksContainer}>
        {values.map((item, index) => {
          // Split the sentence at "____" to get parts
          const parts = item.value.split("__________");
          
          return (
            <View key={index} style={styles.blankItem}>
              <Text style={styles.text}>
                {parts.map((part, partIndex) => (
                  <React.Fragment key={partIndex}>
                    {part}
                    {partIndex < parts.length - 1 && (
                      <TouchableOpacity
                        onPress={() => setActivePickerIndex(index)}
                        activeOpacity={0.7}
                      >
                        <Text
                          style={[
                            styles.inlineBlank,
                            selectedAnswers[index] ? styles.filledInlineBlank : null,
                          ]}
                        >
                          {selectedAnswers[index] || " [tap to select] "}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </React.Fragment>
                ))}
              </Text>
              
              {showTranslations && (
                <View style={styles.translationContainer}>
                  <Text style={styles.translationText}>
                    {translatedTextList[index]}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
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
              data={options}
              keyExtractor={(item, index) => `option-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    activePickerIndex !== null &&
                      selectedAnswers[activePickerIndex] === item &&
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
                        selectedAnswers[activePickerIndex] === item &&
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
}

// Styles
const styles = StyleSheet.create({
  container: {},
  blanksContainer: {
    padding: 3,
  },
  blankItem: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    color: "#212529",
  },
  picker: {
    width: "100%",
    height: 55,
  },
  translationContainer: {
    backgroundColor: "#F2F7FF",
    borderLeftWidth: 3,
    borderLeftColor: "#4A6FA5",
    padding: 5,
    borderRadius: 5,
  },
  translationText: {
    fontSize: 12,
    color: "#333",
    fontStyle: "italic",
  },
  inlineBlank: {
    backgroundColor: "#f1f3f5",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "#dee2e6",
    color: "#6c757d",
    fontWeight: "500",
    overflow: "hidden",
  },
  filledInlineBlank: {
    backgroundColor: "#e7f5ff",
    borderColor: "#4dabf7",
    color: "#1971c2",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    maxHeight: "60%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  optionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    backgroundColor: "#f8f9fa",
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343a40",
  },
  closeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#e9ecef",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 14,
    color: "#495057",
    fontWeight: "bold",
  },
  optionsList: {
    flexGrow: 0,
    maxHeight: 300,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  selectedOptionItem: {
    backgroundColor: "#e7f5ff",
  },
  optionText: {
    fontSize: 16,
    color: "#495057",
  },
  selectedOptionText: {
    color: "#1c7ed6",
    fontWeight: "500",
  },
});
