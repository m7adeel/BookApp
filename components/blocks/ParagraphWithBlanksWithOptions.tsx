import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import HeaderSelectOptions from "./common/HeaderSelectOptions";

import translate from "translate-google-api";

type ParagraphWithBlanksProps = {
  text: string; // Paragraph with "____" as blank spaces
  options: string[]; // Available choices for the blanks
  showOptions?: boolean; // Toggle to show all options above the paragraph
  onComplete?: (selections: string[]) => void; // Optional callback when all blanks are filled
  showTranslations: boolean;
};

export default function ParagraphWithBlanksWithOptions({
  text,
  options,
  showOptions = true,
  onComplete,
  showTranslations,
}: ParagraphWithBlanksProps) {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    translate(text, { to: "bn" }).then((res) => {
      setTranslatedText(res);
    });
  }, []);

  // Split paragraph into parts using "____" as blank markers
  const parts = text.split("____");
  const blankCount = parts.length - 1;

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(blankCount).fill("")
  );
  const [activePickerIndex, setActivePickerIndex] = useState<number | null>(
    null
  );

  const handleSelection = (index: number, value: string) => {
    const newSelections = [...selectedAnswers];
    newSelections[index] = value;
    setSelectedAnswers(newSelections);
    setActivePickerIndex(null);

    // Check if all blanks are filled and call onComplete if provided
    if (onComplete && newSelections.every((answer) => answer !== "")) {
      onComplete(newSelections);
    }
  };

  const openOptionSelector = (index: number) => {
    setActivePickerIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Display selectable options at the top if enabled */}
      {showOptions && (
        <View style={styles.optionsContainer}>
          <HeaderSelectOptions values={options} />
        </View>
      )}

      {/* Paragraph content with inline blanks */}
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraphText}>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {/* <TextWithTranslation textStyle={styles.paragraphText} text={part}/> */}
              {index < blankCount && (
                <TouchableOpacity
                  onPress={() => openOptionSelector(index)}
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
            <Text style={styles.translationText}>{translatedText}</Text>
          </View>
        )}
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

// Enhanced styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  optionsContainer: {},
  paragraphContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  paragraphText: {
    fontSize: 16,
    lineHeight: 30,
    color: "#212529",
  },
  inlineBlank: {
    backgroundColor: "#f1f3f5",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
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
  answersContainer: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#dee2e6",
  },
  answersHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#212529",
  },
  answerItem: {
    flexDirection: "row",
    marginVertical: 4,
  },
  answerLabel: {
    fontSize: 14,
    color: "#6c757d",
    marginRight: 6,
    width: 70,
  },
  answerValue: {
    fontSize: 14,
    color: "#212529",
    fontWeight: "500",
  },
  translationContainer: {
    backgroundColor: "#F2F7FF",
    borderLeftWidth: 3,
    borderLeftColor: "#4A6FA5",
    padding: 12,
    marginTop: 8,
    borderRadius: 5,
  },
  translationText: {
    fontSize: 12,
    color: "#333",
    fontStyle: "italic",
  },
});
