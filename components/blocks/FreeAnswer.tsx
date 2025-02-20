import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function FreeAnswer({ label= "Write your answer here..." }) {
  const [paragraph, setParagraph] = useState('')

  return (
    <TextInput
    style={styles.textArea}
    multiline
    placeholder={label}
    value={paragraph}
    onChangeText={setParagraph}
  />
  )
}

const styles = StyleSheet.create({
  textArea: { 
    borderWidth: 1, 
    borderColor: '#CCCCCC', 
    padding: 10, 
    height: 100, 
    textAlignVertical: 'top', 
    borderRadius: 5, 
    backgroundColor: '#FFFFFF',
    marginBottom: 15
  },
})