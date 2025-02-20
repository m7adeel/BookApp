import { View, Text } from 'react-native'
import React from 'react'

type LanguageFocusProps = {
  children: any[]
}

export default function LanguageFocus({ children }: LanguageFocusProps) {
  return (
    <View>
      <Text>LanguageFocus</Text>
    </View>
  )
}