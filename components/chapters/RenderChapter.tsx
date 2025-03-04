import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LearningObjectives from '../general/LearningObjectives'
import RenderBlock from '../blocks/RenderBlock'
import { Ionicons } from '@expo/vector-icons' // Import Ionicons from Expo

import * as Speech from 'expo-speech';
import { blockTypes } from '@/data/chapters';

type RenderChapterProps = {
  chapter: Object
}

const Speaker = (text: string, setIsSpeaking) => {
  Speech.speak(text, 
    {
      onStart: () => setIsSpeaking(true), // Speech started
      onDone: () => setIsSpeaking(false),  // Speech finished
      onStopped: () => setIsSpeaking(false), // Speech manually stopped
    }
  )
}

const parseAndRead = (content: any[], setIsSpeaking) => {
  content.forEach((block) => {
    if(block.type === blockTypes.IMAGE) return

    if(block.children) {
      parseAndRead(block.children, setIsSpeaking)
    } else if (block.type === blockTypes.FILL_IN_BLANKS_SELECT_OPTIONS) {
      block.values.forEach(value => {
        Speaker(value.value, setIsSpeaking)
      })
    } else if (block.type === blockTypes.IMAGE_GRID_WITH_TEXT) {
      block.values.forEach(value => {
        Speaker(value.left.word, setIsSpeaking)
        Speaker(value.right.word, setIsSpeaking)
      })
    } else if (block.type === blockTypes.MULTI_FILL_IN_BLANKS) {
      block.data.forEach(value => {
        Speaker(value.sentence, setIsSpeaking)
      })
    } else if(block.value) {
      Speaker(block.value, setIsSpeaking)
    } else if (block.values) {
      block.values.forEach(value => {
        Speaker(value, setIsSpeaking)
      })
    } else if (block.dialogues) {
      block.dialogues.forEach(dialogue => {
        Speaker(dialogue.speaker, setIsSpeaking)
        Speaker(dialogue.text, setIsSpeaking)
      })
    } else if (block.lines) {
      block.lines.forEach(line => {
        Speaker(line, setIsSpeaking)
      })
    }
  })
}

export default function RenderChapter({ chapter }: RenderChapterProps) {
  const [showTranslation, setShowTranslation] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [activeTab, setActiveTab] = useState('chapter') // Track active tab
  
  const learningObjTitle = "After completing the lesson, students will be able to:"
  
  const toggleTranslation = () => {
    setShowTranslation(!showTranslation)
  }

  const readChapter = () => {
    if(isSpeaking) {
      Speech.stop()
      return
    }

    Speaker(learningObjTitle, setIsSpeaking)

    chapter.learningObjectives.forEach((lo: string)=>{
      Speaker(lo, setIsSpeaking)
    })

    parseAndRead(chapter.content, setIsSpeaking)
  }

  return (
    <View style={styles.pageContainer}>
      <ScrollView style={styles.container}>
        <LearningObjectives items={chapter.learningObjectives} title={learningObjTitle} showTranslations={showTranslation}/>
        {
          chapter.content.map((block, index) => {
            return <RenderBlock key={index} block={block} showTranslations={showTranslation}/>
          })
        }
        
        {/* Add bottom padding to ensure content isn't hidden behind the floating bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Floating Bottom Bar */}
      <View style={styles.floatingBarContainer}>
        <View style={styles.floatingBar}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'chapter' && styles.activeTab]} 
            onPress={() => setActiveTab('chapter')}
          >
            <Ionicons name="book-outline" size={24} color="#4A6FA5" />
            <Text style={styles.tabButtonText}>Chapter</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'read' && styles.activeTab]} 
            onPress={readChapter}
          >
            <Ionicons 
              name={isSpeaking ? "stop-circle-outline" : "play-outline"} 
              size={24} 
              color="#4A6FA5" 
            />
            <Text style={styles.tabButtonText}>
              {isSpeaking ? "Stop" : "Read"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'translation' && styles.activeTab]} 
            onPress={toggleTranslation}
          >
            <Ionicons 
              name="language-outline" 
              size={24} 
              color="#4A6FA5" 
            />
            <Text style={styles.tabButtonText}>
              {showTranslation ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    position: 'relative',
  },
  container: { 
    padding: 0,
    flex: 1,
  },
  bottomSpacer: {
    height: 80, // Add space at the bottom to prevent content being hidden behind floating bar
  },
  floatingBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  floatingBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: '85%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#F0F8FF',
  },
  tabButtonText: {
    color: '#4A6FA5',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 2,
  },
  lessonTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  listItem: { fontSize: 14, marginLeft: 10, marginBottom: 5 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: { fontSize: 14, marginBottom: 10 },
  formBox: {
    backgroundColor: "#E8F0FE",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  exampleText: { fontSize: 14, marginBottom: 5 },
  highlight: { fontWeight: "bold", color: "#007BFF" },
  inputContainer: { marginBottom: 20 },
  inputLabel: { fontSize: 14, fontWeight: "600", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
    backgroundColor: "#FFF",
  },
  radioButton: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  radioLabel: { fontSize: 14 },
  matchingRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  matchingWord: { fontSize: 16, width: 100 },
  picker: { height: 40, flex: 1, borderColor: "#000" },
  subText: { fontSize: 14, marginBottom: 10, lineHeight: 20 },
  textArea: { 
    borderWidth: 1, 
    borderColor: '#CCCCCC', 
    padding: 10, 
    height: 100, 
    textAlignVertical: 'top', 
    borderRadius: 5, 
    backgroundColor: '#FFFFFF',
    marginBottom: 15
  },
  poemText: { fontSize: 16, fontStyle: 'italic', marginBottom: 20, textAlign: 'center' },
  submitButton: { marginTop: 20 },
});