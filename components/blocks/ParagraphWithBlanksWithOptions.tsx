import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import HeaderSelectOptions from "./common/HeaderSelectOptions";

type ParagraphWithBlanksProps = {
  text: string; // Paragraph with "____" as blank spaces
  options: string[]; // Available choices for the blanks
  showOptions?: boolean; // Toggle to show all options above the paragraph
};

export default function ParagraphWithBlanksWithOptions({
  text,
  options,
  showOptions = true
}: ParagraphWithBlanksProps) {
  // Split paragraph into parts using "____" as blank markers
  const parts = text.split("____");
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(parts.length - 1).fill("")
  );

  const handleSelection = (index: number, value: string) => {
    const newSelections = [...selectedAnswers];
    newSelections[index] = value;
    setSelectedAnswers(newSelections);
  };

  return (
    <View style={styles.container}>
      {/* Display selectable options at the top if enabled */}
      {showOptions && <HeaderSelectOptions values={options} />}

      {/* Render paragraph with dropdowns */}
      <Text style={styles.paragraph}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < selectedAnswers.length && (
              <Picker
                selectedValue={selectedAnswers[index]}
                onValueChange={(itemValue) => handleSelection(index, itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Option" value="" />
                {options.map((option, i) => (
                  <Picker.Item key={i} label={option} value={option} />
                ))}
              </Picker>
            )}
          </React.Fragment>
        ))}
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  picker: {
    width: "100%",
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginVertical: 5,
  },
});
