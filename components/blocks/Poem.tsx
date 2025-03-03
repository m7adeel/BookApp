import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

import translate from "translate-google-api";

const Poem = ({ title, author, lines, showTranslations = false }) => {
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);

  // return (
  //   <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
  //     <Text style={styles.title}>{title}</Text>
  //     <Text style={styles.author}>by {author}</Text>
  //     {lines.map((line, index) => (
  //       <Text key={index} style={styles.line}>
  //         {line}
  //       </Text>
  //     ))}
  //   </Animated.View>
  // );

  const [translatedLines, setTranslatedLines] = useState(Array(lines.length));

  useEffect(() => {
    const translatePoem = async () => {
      const tr_lines = await Promise.all(
        lines.map(async (line: string) => {
          const res = await translate(line, { to: "bn" });
          return res;
        })
      );

      setTranslatedLines(tr_lines);
    };

    translatePoem();
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>- by {author}</Text>
      {lines.map((line, index) => (
        <>
          <Text key={index} style={styles.line}>
            {line}
          </Text>
          {showTranslations && (
            <View key={index} style={styles.translationContainer}>
              <Text style={styles.translationText}>
                {translatedLines[index]}
              </Text>
            </View>
          )}
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  author: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#666",
    textAlign: "right",
    marginBottom: 10,
  },
  line: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginBottom: 3,
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

export default Poem;
