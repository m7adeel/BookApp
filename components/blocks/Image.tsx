import { Image as RNImage, StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'

type ImageProps = {
  source: string
  style?: object
}

export default function Image({ source, style }: ImageProps) {
  // Get screen width for responsive sizing
  const screenWidth = Dimensions.get('window').width
  const defaultWidth = screenWidth * 0.8 // 80% of screen width
  const defaultPath = "@assets/images"
  console.log(source)
  const path = defaultPath + source
  console.log(path)
  return (
    <View style={styles.container}>
      <RNImage
        source={{ uri: path }}
        style={[
          styles.image,
          { width: defaultWidth, height: defaultWidth * 0.75 }, // 4:3 aspect ratio
          style
        ]}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  image: {
    borderRadius: 8,
  }
})