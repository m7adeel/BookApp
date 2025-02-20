import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextWithTranslation from './common/TextWithTranslation'

type DialogueType = {
  speaker: string
  text: string
}

type ConversationProps = {
  dialogues: DialogueType[]
}

export default function Conversation({ dialogues }: ConversationProps) {
  return (
    <View style={styles.container}>
      {dialogues.map((dialogue, index) => (
        <View key={index} style={styles.dialogueContainer}>
          <Text style={styles.speaker}>{dialogue.speaker}:</Text>
          <TextWithTranslation text={dialogue.text} />
          {/* <Text style={styles.dialogue}>{dialogue.text}</Text> */}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
  },
  dialogueContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  speaker: {
    fontWeight: '600',
    color: '#444',
    minWidth: 50,
  },
  dialogue: {
    flex: 1,
    color: '#333',
  }
})