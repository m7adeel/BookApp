import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextWithTranslation from "../blocks/common/TextWithTranslation";

const RenderItem = ({ item }) => {
  return <TextWithTranslation textStyle={styles.listItem} text={`✔️ ${item}`} />
};

export default function LearningObjectives({ title, items }) {
  return (
    <View style={{ marginBottom: 20 }}>
      {/* <Text style={styles.subtitle}>{title}</Text> */}
      <TextWithTranslation text={title} textStyle={styles.subtitle} />
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
