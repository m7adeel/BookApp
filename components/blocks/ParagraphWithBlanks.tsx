import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type ParagraphWithBlanksProps = {
  text: string; // Paragraph with blanks as '___'
};

export default function ParagraphWithBlanks({ text }: ParagraphWithBlanksProps) {
  const parts = text.split("___");
  const [answers, setAnswers] = useState<string[]>(new Array(parts.length - 1).fill(""));

  const handleInputChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <TextInput
                style={styles.input}
                placeholder="..."
                value={answers[index]}
                onChangeText={(text) => handleInputChange(index, text)}
              />
            )}
          </React.Fragment>
        ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#555",
    minWidth: 50,
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 5,
  },
});
