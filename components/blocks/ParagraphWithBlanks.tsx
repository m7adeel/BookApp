import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import TextWithTranslation from "./common/TextWithTranslation";

import translate from "translate-google-api";

type ParagraphWithBlanksProps = {
  text: string; // Paragraph with blanks as '___'
  showTranslations: boolean;
};

export default function ParagraphWithBlanks({
  text,
  showTranslations,
}: ParagraphWithBlanksProps) {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    translate(text, { to: "bn" }).then((res) => {
      setTranslatedText(res);
    });
  }, []);

  const parts = text.split("___");
  const [answers, setAnswers] = useState<string[]>(
    new Array(parts.length - 1).fill("")
  );

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
            {/* <TextWithTranslation textStyle={styles.text} text={part}/> */}
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
      {showTranslations && (
        <View style={styles.translationContainer}>
          <Text style={styles.translationText}>{translatedText}</Text>
        </View>
      )}
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
