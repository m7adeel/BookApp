import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

type ShortAnswerProps = {
  label: string; 
};

export default function ShortAnswer({ label }: ShortAnswerProps) {
  const [answer, setAnswer] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
        placeholder={label}
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
