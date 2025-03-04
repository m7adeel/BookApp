import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FreeAnswer from "./FreeAnswer";

import translate from "translate-google-api";

import TextWithTranslation from "./common/TextWithTranslation";

type QuestionListProps = {
  questions: string[];
  showTranslations: boolean;
};

export default function QuestionList({
  questions,
  showTranslations,
}: QuestionListProps) {
  const [translatedTextList, setTranslatedTextList] = useState([...questions]);
  useEffect(() => {
    const translateAllQuestions = async () => {
      const translatedArray = await Promise.all(
        questions.map(async (question) => {
          const res = await translate(question, { to: "bn" });
          return res;
        })
      );
      setTranslatedTextList(translatedArray);
    };

    translateAllQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionItem}>
            <TextWithTranslation text={item} textStyle={styles.questionText} />
            {showTranslations && (
              <View style={styles.translationContainer}>
                <Text style={styles.translationText}>
                  {translatedTextList[index]}
                </Text>
              </View>
            )}
            <FreeAnswer />
          </View>
        )}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  questionItem: {},
  questionText: {
    fontSize: 16,
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
