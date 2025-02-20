import { View, StyleSheet } from 'react-native'
import React from 'react'
import RenderBlock from './RenderBlock'

type ContainerProps = {
  children: any[]
}

export default function Container({ children }: ContainerProps) {
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
    padding: 15,
    backgroundColor: '#fff',
  }
}) 