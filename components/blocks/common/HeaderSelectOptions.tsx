import { View, Text, StyleSheet } from "react-native";
import React from "react";

type HeaderSelectOptionsProps = {
  values: string[]
};

export default function HeaderSelectOptions({
  values,
}: HeaderSelectOptionsProps) {
  return (
    <View style={styles.optionsContainer}>
      {values.map((option, index) => (
        <View key={index} style={styles.optionItem}>
          <Text style={styles.optionText}>{option}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 2,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  optionItem: {
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    padding: 8,
    margin: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
