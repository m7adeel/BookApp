import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Image from './Image'
import { positions } from '@/data/chapters'

type DialogueType = {
  speaker: string
  text: string
}

type ConversationWithImageProps = {
  dialogues: DialogueType[]
  imageSource: string
  imagePosition: string
}

export default function ConversationWithImage({ 
  dialogues, 
  imageSource, 
  imagePosition 
}: ConversationWithImageProps) {
  const isImageRight = imagePosition === positions.RIGHT

  const ConversationContent = () => (
    <View style={styles.conversationContainer}>
      {dialogues.map((dialogue, index) => (
        <View key={index} style={styles.dialogueContainer}>
          <Text style={styles.speaker}>{dialogue.speaker}:</Text>
          <Text style={styles.dialogue}>{dialogue.text}</Text>
        </View>
      ))}
    </View>
  )

  const ImageContent = () => (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  )

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
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'flex-start',
    gap: 15,
  },
  conversationContainer: {
    flex: 1,
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
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  }
})