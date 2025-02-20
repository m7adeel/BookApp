import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import LearningObjectives from '../general/LearningObjectives'
import RenderBlock from '../blocks/RenderBlock'

type RenderChapterProps = {
  chapter: Object
}

export default function RenderChapter({ chapter }: RenderChapterProps) {

  const learningObjTitle = "After completing the lesson, students will be able to:"
  return (
    <ScrollView style={styles.container}>
      <LearningObjectives items={chapter.learningObjectives} title={learningObjTitle}/>
      {
        chapter.content.map((block) => {
          return <RenderBlock block={block}/>
        })
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: { padding: 0, },
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

