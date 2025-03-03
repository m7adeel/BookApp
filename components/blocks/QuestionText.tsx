import { Text, StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import TextWithTranslation from './common/TextWithTranslation'

import translate from 'translate-google-api'

type QuestionTextProps = {
  value: string
  showTranslations: boolean
}

export default function QuestionText({ value, showTranslations }: QuestionTextProps) {
  const [translatedText, setTranslatedText] = useState('')
  useEffect(()=> {
    translate(value,{to: 'bn'}).then((res)=>{
      setTranslatedText(res)
    })
  },[])
  
  return (
    <View style={styles.container}>
      <TextWithTranslation text={value} textStyle={styles.text}/>
      {showTranslations && (
        <View style={styles.translationContainer}>
          <Text style={styles.translationText}>{translatedText}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  translationContainer: {
    backgroundColor: '#F2F7FF',
    borderLeftWidth: 3,
    borderLeftColor: '#4A6FA5',
    padding: 12,
    marginTop: 8,
    borderRadius: 5,
  },
  translationText: {
    fontSize: 12,
    color: '#333',
    fontStyle: 'italic',
  }
})