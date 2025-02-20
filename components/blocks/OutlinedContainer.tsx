import { View, StyleSheet } from 'react-native'
import React from 'react'
import RenderBlock from './RenderBlock'

type OutlinedContainerProps = {
  children: any[]
}

export default function OutlinedContainer({ children }: OutlinedContainerProps) {
  return (
    <View style={[styles.container]}>
      {children.map((child, index) => (
        <RenderBlock key={index} block={child} />
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