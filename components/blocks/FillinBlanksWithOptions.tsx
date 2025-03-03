import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
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

  const handleSelection = (index: number, value: string) => {
    const newSelections = [...selectedAnswers];
    newSelections[index] = value;
    setSelectedAnswers(newSelections);
  };

  return (
    <View style={styles.container}>
      {/* Display Selectable Options at the Top */}
      {showOptions && <HeaderSelectOptions values={options} />}

      {/* Fill-in-the-Blanks Section */}
      <View style={styles.blanksContainer}>
        {values.map((item, index) => (
          <View key={index} style={styles.blankItem}>
            <Text style={styles.text}>
              {item.value} {/* Before Blank */}
            </Text>
            {showTranslations && (
              <View key={index} style={styles.translationContainer}>
                <Text style={styles.translationText}>
                  {translatedTextList[index]}
                </Text>
              </View>
            )}
            <Picker
              selectedValue={selectedAnswers[index]}
              onValueChange={(itemValue) => handleSelection(index, itemValue)}
              style={styles.picker}
            >
              <Picker.Item
                label={item.labels?.[0] || "Select Option"}
                value=""
              />
              {options.map((option, i) => (
                <Picker.Item key={i} label={option} value={option} />
              ))}
            </Picker>
          </View>
        ))}
      </View>
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
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
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
  }
});
