import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type DialogueType = {
  speaker: string;
  text: string;
  answerKey?: string[]; // Optional correct answers for blanks
};

type ConversationProps = {
  dialogues: DialogueType[];
};

export default function FillInTheBlanksConversation({ dialogues }: ConversationProps) {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleChangeText = (index: number, blankIndex: number, text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`${index}-${blankIndex}`]: text,
    }));
  };

  return (
    <View style={styles.container}>
      {dialogues.map((dialogue, index) => {
        const parts = dialogue.text.split(/(___|\{\})/g); // Splitting on blanks

        return (
          <View key={index} style={styles.dialogueContainer}>
            <Text style={styles.speaker}>{dialogue.speaker}:</Text>
            <View style={styles.dialogueWrapper}>
              {parts.map((part, blankIndex) =>
                part === '___' || part === '{}' ? (
                  <TextInput
                    key={`${index}-${blankIndex}`}
                    style={styles.input}
                    onChangeText={(text) => handleChangeText(index, blankIndex, text)}
                    value={answers[`${index}-${blankIndex}`] || ''}
                    placeholder="..."
                  />
                ) : (
                  <Text key={`${index}-text-${blankIndex}`} style={styles.dialogueText}>
                    {part}
                  </Text>
                )
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
  },
  dialogueContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  speaker: {
    fontWeight: '600',
    color: '#444',
    minWidth: 50,
  },
  dialogueWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  dialogueText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#888',
    minWidth: 50,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 5,
  },
});
