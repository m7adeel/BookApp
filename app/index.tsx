import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import chapters from '@/data/chapters'

export default function Index() {
  const router = useRouter()
  // const chaptersData = Array.from({ length: 30 }, (_, index) => ({
  //   id: index + 1,
  //   title: `Chapter ${index + 1}`
  // }))

  const chaptersData = chapters.map((chapter, index) => {
    return {
      id: index + 1,
      title: chapter.lesson,
      description: chapter.name
    }
  })

  const renderChapter = ({ item }: { item: { id: number; title: string; description: string } }) => (
    <Pressable
      style={styles.chapterItem}
      onPress={() => router.push(`/chapters/${item.id}`)}
    >
      <View>
        <Text style={styles.chapterTitle}>{item.title}</Text>
        <Text style={styles.chapterDescription}>{item.description}</Text>
      </View>
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={chaptersData}
        renderItem={renderChapter}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    padding: 16
  },
  chapterItem: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  chapterNumber: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    fontWeight: '600'
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6
  },
  chapterDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  }
})