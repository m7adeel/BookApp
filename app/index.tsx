import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import chapters from '@/data/chapters'

import BookImage from '../assets/images/book.png'

import { BlurView } from "expo-blur";

const colors = [
  '#FF6B6B', // coral red
  '#4ECDC4', // turquoise
  '#FFD166', // yellow
  '#6A0572', // purple
  '#FF9A8B', // salmon
  '#6A7FDB', // blue
  '#06D6A0', // green
  '#F25F5C', // red
  '#50B2C0', // teal
  '#FAC05E', // amber
]

export default function Index() {
  const router = useRouter()

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
      <View style={[styles.chapterNumber]}>
        <Image source={BookImage} style={[{ width: 50, height: 50 }]} tintColor={colors[item.id % colors.length]} />
        <View style={[styles.chapaterImageShadow]}></View>
      </View>
      <View style={styles.contentContainer}>
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginVertical: 24,
    paddingHorizontal: 20,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  chapterItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  chapterNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#4A6FA5',
    paddingVertical: 15,
    paddingLeft: 10,
  },
  chapaterImageShadow: {
  },
  numberText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  chapterDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
})