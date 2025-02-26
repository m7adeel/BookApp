import { Text, StyleSheet } from 'react-native'
import React from 'react'
import TextWithTranslation from './common/TextWithTranslation'

type QuestionTextProps = {
  value: string
}

export default function QuestionText({ value }: QuestionTextProps) {
  return (
    <TextWithTranslation text={value} textStyle={styles.text}/>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  }
}) 