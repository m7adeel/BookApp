import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import TextWithTranslation from './common/TextWithTranslation'

type QuestionTextProps = {
  value: string
}

export default function QuestionText({ value }: QuestionTextProps) {
  return (
    <View style={{marginTop: 20}}>
    <TextWithTranslation text={value} textStyle={styles.text}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
  }
}) 