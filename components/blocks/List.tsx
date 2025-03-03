import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import translate from "translate-google-api";

type ListProps = {
  children: string[];
  showTranslations: boolean;
};

export default function List({ children, showTranslations }: ListProps) {
  const [translatedTextList, setTranslatedTextList] = useState(
    Array(children.length).fill("")
  );
  useEffect(() => {
    const translateAll = async () => {
      const translatedArray = await Promise.all(
        children.map(async (dialogue) => {
          const res = await translate(dialogue, { to: "bn" });
          return res;
        })
      );
      setTranslatedTextList(translatedArray);
    };

    translateAll();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={children}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionItem}>
            <Text style={styles.questionText}>{item}</Text>
            {showTranslations && (
              <View key={index} style={styles.translationContainer}>
                <Text style={styles.translationText}>
                  {translatedTextList[index]}
                </Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
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
    padding: 5,
    borderRadius: 5,
  },
  translationText: {
    fontSize: 12,
    color: "#333",
    fontStyle: "italic",
  },
});
