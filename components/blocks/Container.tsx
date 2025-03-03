import { View, StyleSheet } from 'react-native'
import React from 'react'
import RenderBlock from './RenderBlock'

type ContainerProps = {
  children: any[]
  showTranslations: boolean
}

export default function Container({ children, showTranslations }: ContainerProps) {
  return (
    <View style={[styles.container]}>
      {children.map((child, index) => (
        <RenderBlock key={index} block={child} showTranslations={showTranslations}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  }
}) 