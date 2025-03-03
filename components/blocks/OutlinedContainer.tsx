import { View, StyleSheet } from 'react-native'
import React from 'react'
import RenderBlock from './RenderBlock'

type OutlinedContainerProps = {
  children: any[]
  showTranslations: boolean
}

export default function OutlinedContainer({ children, showTranslations }: OutlinedContainerProps) {
  return (
    <View style={[styles.container]}>
      {children.map((child, index) => (
        <RenderBlock key={index} block={child} showTranslations={showTranslations} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1
  }
}) 