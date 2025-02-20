import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FreeAnswer from "./FreeAnswer";

type QuestionListProps = {
  questions: string[];
};

export default function QuestionList({ questions }: QuestionListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionItem}>
            <Text style={styles.questionText}>
              {item}
            </Text>
            <FreeAnswer />
          </View>
        )}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  questionItem: {
  },
  questionText: {
    fontSize: 16,
  },
});
