import { Text } from 'react-native'
import React from 'react'
import TextWithTranslation from './common/TextWithTranslation'

type ParagraphProps = {
  value: string
}

export default function Paragraph({ value }: ParagraphProps) {

  return (
    <TextWithTranslation text={value}/>
  )
}