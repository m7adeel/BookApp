import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import TextWithTranslation from "../blocks/common/TextWithTranslation";

import translate from "translate-google-api";

const RenderItem = ({ item, showTranslations }) => {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    translate(item, { to: "bn" }).then((res) => {
      setTranslatedText(res);
    });
  }, []);
  return (
    <>
      <TextWithTranslation textStyle={styles.listItem} text={`✔️ ${item}`} />
      {showTranslations && (
        <View style={styles.translationContainer}>
          <Text style={styles.translationText}>{translatedText}</Text>
        </View>
      )}
    </>
  );
};

export default function LearningObjectives({ title, items, showTranslations }) {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    translate(title, { to: "bn" }).then((res) => {
      setTranslatedText(res);
    });
  }, []);
  return (
    <View style={{ marginBottom: 20 }}>
      {/* <Text style={styles.subtitle}>{title}</Text> */}
      <TextWithTranslation text={title} textStyle={styles.subtitle} />
      {showTranslations && (
        <View style={styles.translationContainer}>
          <Text style={styles.translationText}>{translatedText}</Text>
        </View>
      )}
      {items.map((item) => (
        <RenderItem
          item={item}
          key={item}
          showTranslations={showTranslations}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  listItem: { fontSize: 14, marginLeft: 10, marginBottom: 5 },
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
