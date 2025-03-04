import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LearningObjectives from '../general/LearningObjectives'
import RenderBlock from '../blocks/RenderBlock'

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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity 
          style={styles.translationButton} 
          onPress={readChapter}
        >
          <Text style={styles.translationButtonText}>
            {isSpeaking ? "Stop" : "Read Chapter"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.translationButton} 
          onPress={toggleTranslation}
        >
          <Text style={styles.translationButtonText}>
            {showTranslation ? "Hide Translation" : "Show Translation"}
          </Text>
        </TouchableOpacity>
      </View>

      <LearningObjectives items={chapter.learningObjectives} title={learningObjTitle} showTranslations={showTranslation}/>
      {
        chapter.content.map((block) => {
          return <RenderBlock block={block} showTranslations={showTranslation}/>
        })
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: { padding: 0, },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  translationButton: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 10,
  },
  translationButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
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

