import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import TextWithTranslation from "./common/TextWithTranslation";

import translate from "translate-google-api";

type DialogueType = {
  speaker: string;
  text: string;
};

type ConversationProps = {
  dialogues: DialogueType[];
  showTranslations: boolean;
};

export default function Conversation({
  dialogues,
  showTranslations = false,
}: ConversationProps) {
  const [translatedTextList, setTranslatedTextList] = useState(
    Array(dialogues.length).fill("")
  );
  useEffect(() => {
    const translateAll = async () => {
      const translatedArray = await Promise.all(
        dialogues.map(async (dialogue) => {
          const res = await translate(dialogue.text, { to: "bn" });
          return res;
        })
      );
      setTranslatedTextList(translatedArray);
    };

    translateAll();
  }, []);

  return (
    <View style={styles.container}>
      {dialogues.map((dialogue, index) => (
        <>
          <View key={index} style={styles.dialogueContainer}>
            <Text style={styles.speaker}>{dialogue.speaker}:</Text>
            <View>
              <TextWithTranslation text={dialogue.text} />
              {showTranslations && (
                <View key={index} style={styles.translationContainer}>
                  <Text style={[styles.translationText]}>
                    {translatedTextList[index]}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  dialogueContainer: {
    flexDirection: "row",
    gap: 5,
  },
  speaker: {
    fontWeight: "600",
    color: "#444",
    minWidth: 50,
  },
  dialogue: {
    flex: 1,
    color: "#333",
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
