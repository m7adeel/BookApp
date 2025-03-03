import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import Chapter1 from '../../components/chapters/Chapter1'
import chapters from '@/data/chapters'
import { chapter2Data } from '@/data/chapters'
import RenderChapter from '@/components/chapters/RenderChapter'

export default function Chapter() {
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()
  const chapterIndex = parseInt(id as string) - 1
  const chapterData = chapters[chapterIndex]

  useEffect(() => {
    navigation.setOptions({
      title: chapterData.name
    })
  }, [navigation, chapterData])

  return (
    <View style={styles.container}>
        <RenderChapter chapter={chapterData.data}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  content: {
    fontSize: 16,
    lineHeight: 24
  }
})