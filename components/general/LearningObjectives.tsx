import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RenderItem = ({ item }) => {
  return <Text style={styles.listItem}>✔️ {item}</Text>;
};

export default function LearningObjectives({ title, items }) {
  return (
    <View>
      <Text style={styles.subtitle}>{title}</Text>
      {items.map((item) => (
        <RenderItem item={item} key={item}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  listItem: { fontSize: 14, marginLeft: 10, marginBottom: 5 },
});
