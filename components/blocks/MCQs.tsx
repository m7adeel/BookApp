import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import translate from "translate-google-api";

const MCQS = ({ options, showTranslations }) => {
  const [translatedTextList, setTranslatedTextList] = useState(
    Array(options.length).fill("")
  );
  useEffect(() => {
    const translateAll = async () => {
      const translatedArray = await Promise.all(
        options.map(async (option) => {
          const res = await translate(option, { to: "bn" });
          return res;
        })
      );
      setTranslatedTextList(translatedArray);
    };

    translateAll();
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => handleSelect(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
          {showTranslations && (
            <View key={index} style={styles.translationContainer}>
              <Text style={styles.translationText}>
                {translatedTextList[index]}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
  },
  selectedOption: {
    backgroundColor: "#4CAF50", // Green color for selection
    borderColor: "#388E3C",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
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
});

export default MCQS;
