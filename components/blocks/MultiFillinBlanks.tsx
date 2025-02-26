import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

type MultiFillInBlanksProps = {
  data: { sentence: string; labels: string[] }[]; // Array of sentences with blanks
  numeric?: boolean;
};

export default function MultiFillInBlanks({ data, numeric }: MultiFillInBlanksProps) {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleChangeText = (sentenceIndex: number, blankIndex: number, text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`${sentenceIndex}-${blankIndex}`]: text,
    }));
  };

  return (
    <View style={styles.container}>
      {data.map((item, sentenceIndex) => {
        const parts = item.sentence.split("___"); // Split text by blanks

        return (
          <View key={sentenceIndex} style={styles.sentenceContainer}>
            <Text style={styles.text}>
              {parts.map((part, blankIndex) => (
                <React.Fragment key={`${sentenceIndex}-${blankIndex}`}>
                  {part}
                  {blankIndex < parts.length - 1 && (
                    <TextInput
                      style={styles.input}
                      placeholder={item.labels[blankIndex] || "..."}
                      value={answers[`${sentenceIndex}-${blankIndex}`] || ""}
                      onChangeText={(text) => handleChangeText(sentenceIndex, blankIndex, text)}
                      keyboardType={numeric ? "numeric" : "default"}
                    />
                  )}
                </React.Fragment>
              ))}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  sentenceContainer: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#888",
    minWidth: 50,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 5,
  },
});
