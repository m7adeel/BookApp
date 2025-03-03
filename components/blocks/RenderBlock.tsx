import React from 'react'
import { blockTypes } from '@/data/chapters'
import QuestionText from './QuestionText'
import Container from './Container'
import NumberedList from './NumberedList'
import FormattedText from './FormattedText'
import FillInBlanks from './FillInBlanks'
import Image from './Image'
import ImageWithSelectOptions from './ImageWithSelectOptions'
import OutlinedContainer from './OutlinedContainer'
import ItalicText from './ItalicText'
import ConversationWithImage from './ConversationWithImage'
import Conversation from './Conversation'
import Paragraph from './Paragraph'
import FreeAnswer from './FreeAnswer'
import MatchColumns from './MatchColumns'
import FillinBlanksWithOptions from './FillinBlanksWithOptions'
import QuestionList from './QuestionList'
import List from './List'
import Poem from './Poem'
import ParagraphWithImage from './ParagraphWithImage'
import ImageGridWithText from './ImageGridWithText'
import FillInTheBlanksConversation from './FillinTheBlanksConversation'
import MultiFillInBlanks from './MultiFillinBlanks'
import ShortAnswer from './ShortAnswer'
import ParagraphWithBlanks from './ParagraphWithBlanks'
import ParagraphWithBlanksWithOptions from './ParagraphWithBlanksWithOptions'
import MCQS from './MCQs'
import EditableTable from './EditableTable'

type RenderBlockProps = {
  block: any
  showTranslations: boolean
}

export default function RenderBlock({ block, showTranslations }: RenderBlockProps) {
  switch (block.type) {
    case blockTypes.QUESTION_TEXT:
      return <QuestionText value={block.value} showTranslations={showTranslations}/>
    
    case blockTypes.CONTAINER:
      return <Container children={block.children} showTranslations={showTranslations}/>

    case blockTypes.OUTLINED_CONTAINER:
      return <OutlinedContainer children={block.children} showTranslations={showTranslations}/>
    
    case blockTypes.NUMBERED_LIST:
      return <NumberedList children={block.children} childType={block.childType} showTranslations={showTranslations}/>
    
    case blockTypes.LIST:
      return <List children={block.values} showTranslations={showTranslations}/>
    
    case blockTypes.FORMATTED_TEXT:
      return <FormattedText value={block.value} number={block.number} showTranslations={showTranslations}/>

    case blockTypes.POEM:
      return <Poem title={block.title} author={block.author} lines={block.lines} showTranslations={showTranslations}/>
    
    case blockTypes.FILL_IN_BLANKS:
      return <FillInBlanks 
        value={block.value} 
        labels={block.labels} 
        numeric={block.numeric}
        showTranslations={showTranslations}
      />

    case blockTypes.MULTI_FILL_IN_BLANKS:
      return <MultiFillInBlanks data={block.data} numeric={block.numeric} showTranslations={showTranslations}/>

    case blockTypes.FILL_IN_BLANKS_SELECT_OPTIONS:
      return <FillinBlanksWithOptions values={block.values} options={block.options} showOptions={block.showOptions} showTranslations={showTranslations}/>

    case blockTypes.QUESTION_LIST:
      return <QuestionList questions={block.values} showTranslations={showTranslations}/>
    
    case blockTypes.IMAGE:
      return <Image source={block.value} style={block.style}/>
    
    case blockTypes.ITALIC_TEXT:
      return <ItalicText value={block.value} showTranslations={showTranslations}/>
    
    case blockTypes.CONVERSATION_WITH_IMAGE:
      return <ConversationWithImage 
        dialogues={block.dialogues}
        imageSource={block.imageSource}
        imagePosition={block.imagePosition}
        showTranslations={showTranslations}
      />
    
    case blockTypes.CONVERSATION:
      return <Conversation dialogues={block.dialogues} showTranslations={showTranslations}/>
    
    case blockTypes.PARAGRAPH:
      return <Paragraph value={block.value} showTranslations={showTranslations}/>

    case blockTypes.PARAGRAPH_WITH_IMAGE:
      return <ParagraphWithImage value={block.value} imagePosition={block.imagePosition} imageSource={block.imageSource} showTranslations={showTranslations}/>

    case blockTypes.FREE_ANSWER:
      return <FreeAnswer label={block.label} />

    case blockTypes.SHORT_ANSWER:
      return <ShortAnswer label={block.label} />

    case blockTypes.MATCH_COLUMNS:
      return <MatchColumns headers={block.headers} leftValues={block.leftValues} rightValues={block.rightValues}/>

    case blockTypes.IMAGE_WITH_SELECT_OPTIONS:
      return <ImageWithSelectOptions values={block.values} images={block.images} />

    case blockTypes.IMAGE_GRID_WITH_TEXT:
      return <ImageGridWithText data={block.values} showTranslations={showTranslations}/>

    case blockTypes.PARAGRAPH_WITH_BLANKS:
      return <ParagraphWithBlanks text={block.value} showTranslations={showTranslations}/>

    case blockTypes.CONVERSATION_WITH_BLANKS:
      return <FillInTheBlanksConversation dialogues={block.dialogues} showTranslations={showTranslations}/>

    case blockTypes.PARAGRAPH_WITH_BLANKS_WITH_OPTIONS:
      return <ParagraphWithBlanksWithOptions text={block.value} options={block.options} showOptions={block.showOptions} showTranslations={showTranslations}/>

    case blockTypes.MCQS:
      return <MCQS options={block.values} showTranslations={showTranslations}/>

    case blockTypes.ADD_ROWS_TABLE: 
      return <EditableTable initialColumns={block.columns} initialData={block.data} canAddRows={true} canAddColumns={false} canEdit={true}/>

    case blockTypes.ADD_COLUMNS_TABLE:
      return <EditableTable initialColumns={block.columns} initialData={block.data} canAddRows={false} canAddColumns={true} canEdit={true}/>

    case blockTypes.TABLE:
      return <EditableTable initialColumns={block.columns} initialData={block.data} canAddRows={false} canAddColumns={false} canEdit={true}/>

    case blockTypes.UNEDITABLE_TABLE:
      return <EditableTable initialColumns={block.columns} initialData={block.data} canAddRows={false} canAddColumns={false} canEdit={false}/>

    
    default:
      console.log("Block not found")
      return null
  }
} 