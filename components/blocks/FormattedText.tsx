import { Text, StyleSheet } from 'react-native'
import React from 'react'

type FormattedTextProps = {
  value: string
  number?: number
}

export default function FormattedText({ value, number }: FormattedTextProps) {
  return (
    <Text style={styles.text}>
      {number && <Text style={styles.number}>{number}. </Text>}
      {value}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  number: {
    fontWeight: '600',
  }
}) 