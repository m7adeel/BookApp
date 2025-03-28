import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Image from "./Image";
import { positions } from "@/data/chapters";

import translate from "translate-google-api";

type DialogueType = {
  speaker: string;
  text: string;
};

type ConversationWithImageProps = {
  dialogues: DialogueType[];
  imageSource: string;
  imagePosition: string;
  showTranslations: boolean
};

export default function ConversationWithImage({
  dialogues,
  imageSource,
  imagePosition,
  showTranslations = false,
}: ConversationWithImageProps) {
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

  const isImageRight = imagePosition === positions.RIGHT;

  const ConversationContent = () => (
    <View style={styles.conversationContainer}>
      {dialogues.map((dialogue, index) => (
        <>
          <View key={index} style={styles.dialogueContainer}>
            <Text style={styles.speaker}>{dialogue.speaker}:</Text>
            <View>
              <Text style={styles.dialogue}>{dialogue.text}</Text>
              {showTranslations && (
                <View key={index} style={styles.translationContainer}>
                  <Text style={styles.translationText}>{translatedTextList[index]}</Text>
                </View>
              )}
            </View>
          </View>
        </>
      ))}
    </View>
  );

  const ImageContent = () => (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {isImageRight ? (
        <>
          <ConversationContent />
          <ImageContent />
        </>
      ) : (
        <>
          <ImageContent />
          <ConversationContent />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  conversationContainer: {
    flex: 1,
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
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
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
