import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Image from "./Image";
import { positions } from "@/data/chapters";
import TextWithTranslation from "./common/TextWithTranslation";

import translate from "translate-google-api";

type ParagraphWithImageProps = {
  value: string;
  imageSource: object;
  imagePosition: string;
  showTranslations: boolean;
};

export default function ParagraphWithImage({
  value,
  imageSource,
  imagePosition,
  showTranslations,
}: ParagraphWithImageProps) {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    translate(value, { to: "bn" }).then((res) => {
      setTranslatedText(res);
    });
  }, []);

  const isImageRight = imagePosition === positions.RIGHT;

  const ConversationContent = () => (
    <View style={styles.conversationContainer}>
      <TextWithTranslation text={value} />
    </View>
  );

  const ImageContent = () => (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );

  return (
    <>
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
    flexDirection: "row",
    padding: 15,
    alignItems: "flex-start",
    gap: 15,
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
    width: "30%",
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
    padding: 12,
    marginTop: 8,
    borderRadius: 5,
  },
  translationText: {
    fontSize: 12,
    color: "#333",
    fontStyle: "italic",
  },
});
