import { Text, StyleSheet } from 'react-native'
import React from 'react'

type QuestionTextProps = {
  value: string
}

export default function QuestionText({ value }: QuestionTextProps) {
  return (
    <Text style={styles.text}>{value}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  }
}) 