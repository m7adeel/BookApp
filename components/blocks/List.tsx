import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

type ListProps = {
  children: string[];
};

export default function List({ children }: ListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={children}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionItem}>
            <Text style={styles.questionText}>
              {item}
            </Text>
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
  questionItem: {
  },
  questionText: {
    fontSize: 16,
  },
});
