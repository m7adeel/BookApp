import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Image from './Image'
import { positions } from '@/data/chapters'
import TextWithTranslation from './common/TextWithTranslation'

type ParagraphWithImageProps = {
  value: string
  imageSource: object
  imagePosition: string
}

export default function ParagraphWithImage({ 
  value, 
  imageSource, 
  imagePosition 
}: ParagraphWithImageProps) {
  const isImageRight = imagePosition === positions.RIGHT

  const ConversationContent = () => (
    <View style={styles.conversationContainer}>
      <TextWithTranslation text={value}/>
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