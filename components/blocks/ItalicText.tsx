import { Text, StyleSheet } from 'react-native'
import React from 'react'

type ItalicTextProps = {
  value: string
}

export default function ItalicText({ value }: ItalicTextProps) {
  return (
    <Text style={styles.italicText}>
      {value}
    </Text>
  )
}

const styles = StyleSheet.create({
  italicText: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
})