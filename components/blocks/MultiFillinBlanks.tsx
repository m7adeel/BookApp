import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

import translate from "translate-google-api";

type MultiFillInBlanksProps = {
  data: { sentence: string; labels: string[] }[]; // Array of sentences with blanks
  numeric?: boolean;
  showTranslations: boolean;
};

export default function MultiFillInBlanks({
  data,
  numeric,
  showTranslations = false,
}: MultiFillInBlanksProps) {
  const [translatedTextList, setTranslatedTextList] = useState(
    Array(data.length).fill("")
  );
  useEffect(() => {
    const translateAll = async () => {
      const translatedArray = await Promise.all(
        data.map(async (blank) => {
          const res = await translate(blank.sentence, { to: "bn" });
          return res;
        })
      );
      setTranslatedTextList(translatedArray);
    };

    translateAll();
  }, []);

  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleChangeText = (
    sentenceIndex: number,
    blankIndex: number,
    text: string
  ) => {
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
                      onChangeText={(text) =>
                        handleChangeText(sentenceIndex, blankIndex, text)
                      }
                      keyboardType={numeric ? "numeric" : "default"}
                    />
                  )}
                </React.Fragment>
              ))}
            </Text>
            {showTranslations && (
              <View key={sentenceIndex} style={styles.translationContainer}>
                <Text style={styles.translationText}>
                  {translatedTextList[sentenceIndex]}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
