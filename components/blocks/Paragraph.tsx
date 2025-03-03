import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import TextWithTranslation from "./common/TextWithTranslation";

import translate from "translate-google-api";

type ParagraphProps = {
  value: string;
  showTranslations: boolean
};

export default function Paragraph({ value, showTranslations }: ParagraphProps) {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    translate(value, { to: "bn" }).then((res) => {
      setTranslatedText(res);
    });
  }, []);

  return (
    <>
      <TextWithTranslation text={value} />
      {showTranslations && (
        <View style={styles.translationContainer}>
          <Text style={styles.translationText}>{translatedText}</Text>
        </View>
      )}
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  translationContainer: {
    backgroundColor: '#F2F7FF',
    borderLeftWidth: 3,
    borderLeftColor: '#4A6FA5',
    padding: 12,
    marginTop: 8,
    borderRadius: 5,
  },
  translationText: {
    fontSize: 12,
    color: '#333',
    fontStyle: 'italic',
  }
})