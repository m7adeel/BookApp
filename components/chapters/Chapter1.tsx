import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import LearningObjectives from "../general/LearningObjectives";

const Chapter1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    eyes: "",
    hair: "",
    height: "",
    goodAt1: "",
    goodAt2: "",
    hobby1: "",
    hobby2: "",
    like: "",
    dislike: "",
  });

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [wordMatches, setWordMatches] = useState({
    interesting: "",
    frightened: "",
    happy: "",
    excited: "",
    warmly: "",
  });

  const [discussionNotes, setDiscussionNotes] = useState('');
  const [paragraph, setParagraph] = useState('');

  const correctMatches = {
    interesting: "amusing",
    frightened: "afraid",
    happy: "glad",
    excited: "thrilled",
    warmly: "lovingly",
  };

  const handleSubmit = () => {
    let score = 0;

    if (selectedAnswer === "b") {
      score += 1;
    }

    let matchScore = Object.keys(correctMatches).reduce((acc, key) => {
      return acc + (wordMatches[key] === correctMatches[key] ? 1 : 0);
    }, 0);

    Alert.alert(
      "Results",
      `MCQ Score: ${score}/1\nWord Match Score: ${matchScore}/5`
    );
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handlePoemRead = () => {
    Alert.alert("Poem Reading", "Reading aloud: 'Let's Play' by Kate Greenaway...");
  };

  const learningObj = [
    "Read and understand texts",
    "Talk about people, places, and familiar objects",
    "Write short paragraphs"
  ]

  const learningObjTitle = "After completing the lesson, students will be able to:"

  return (
    <ScrollView style={styles.container}>
      {/* Lesson Header */}
      {/* <Text style={styles.lessonTitle}>Lesson 1: Going to a new school</Text> */}

      <LearningObjectives items={learningObj} title={learningObjTitle}/>

      {/* Story Introduction */}
      <Text style={styles.sectionTitle}>Tarun's Story</Text>
      <Text style={styles.paragraph} selectable>
        Tarun has moved to a new city with his parents. He is going to a new
        school, and his new teacher has given him the following form to fill
        out. His teacher wants to know more about Tarun.
      </Text>

      {/* Example Form (Tarun's Info) */}
      <View style={styles.formBox}>
        <Text style={styles.exampleText}>
          1. My name is <Text style={styles.highlight}>Tarun Chowdhury</Text>.
        </Text>
        <Text style={styles.exampleText}>
          2. I am <Text style={styles.highlight}>11</Text> years old.
        </Text>
        <Text style={styles.exampleText}>
          3. I have <Text style={styles.highlight}>brown</Text> eyes,{" "}
          <Text style={styles.highlight}>brown</Text> hair, and I am{" "}
          <Text style={styles.highlight}>4 feet, 3 inches</Text> tall.
        </Text>
        <Text style={styles.exampleText}>
          4. I am good at <Text style={styles.highlight}>playing football</Text>{" "}
          and <Text style={styles.highlight}>drawing</Text>.
        </Text>
        <Text style={styles.exampleText}>
          5. My hobbies are{" "}
          <Text style={styles.highlight}>collecting stamps</Text> and{" "}
          <Text style={styles.highlight}>reading</Text>.
        </Text>
        <Text style={styles.exampleText}>
          6. I like to <Text style={styles.highlight}>read comic books</Text>{" "}
          and eat <Text style={styles.highlight}>peanuts</Text>.
        </Text>
        <Text style={styles.exampleText}>
          7. I really don't like any kind of{" "}
          <Text style={styles.highlight}>soft drinks</Text>.
        </Text>
      </View>

      {/* User Form */}
      <Text style={styles.sectionTitle}>
        Now write similar information about yourself:
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>1. My name is ___</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => handleInputChange("name", text)}
        />

        <Text style={styles.inputLabel}>2. I am ___ years old.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          onChangeText={(text) => handleInputChange("age", text)}
        />

        <Text style={styles.inputLabel}>
          3. I have ___ eyes, ___ hair, and I am ___ tall.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Eye color"
          onChangeText={(text) => handleInputChange("eyes", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hair color"
          onChangeText={(text) => handleInputChange("hair", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Height"
          onChangeText={(text) => handleInputChange("height", text)}
        />

        <Text style={styles.inputLabel}>4. I am good at ___ and ___.</Text>
        <TextInput
          style={styles.input}
          placeholder="First skill"
          onChangeText={(text) => handleInputChange("goodAt1", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Second skill"
          onChangeText={(text) => handleInputChange("goodAt2", text)}
        />

        <Text style={styles.inputLabel}>5. My hobbies are ___ and ___.</Text>
        <TextInput
          style={styles.input}
          placeholder="Hobby 1"
          onChangeText={(text) => handleInputChange("hobby1", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hobby 2"
          onChangeText={(text) => handleInputChange("hobby2", text)}
        />

        <Text style={styles.inputLabel}>6. I like to ___ and ___.</Text>
        <TextInput
          style={styles.input}
          placeholder="Like 1"
          onChangeText={(text) => handleInputChange("like", text)}
        />

        <Text style={styles.inputLabel}>7. I really don’t like ___.</Text>
        <TextInput
          style={styles.input}
          placeholder="Dislike"
          onChangeText={(text) => handleInputChange("dislike", text)}
        />
      </View>

      <Text style={styles.sectionTitle}>
        B. Read the following passage about Tarun's first day in the new school.
      </Text>

      <Image 
        source={require('../../assets/images/lesson1/l1-2.png')}
        style={{width: 150, height: 150, margin:'auto'}}
        resizeMode="contain"
      />

      {/* Passage */}
      <Text style={styles.paragraph}>
        My first day at the new school was interesting. I was going to school
        with my father in a rickshaw. We reached school after fifteen minutes.
        My father said goodbye and left me at the school gate. I went in and
        found that everyone had gone to class. I walked into my classroom and
        found a seat. After some time, a teacher came and warmly greeted us. I
        found the students very friendly in my new class.
      </Text>

      {/* Multiple Choice Question */}
      <Text style={styles.sectionTitle}>B1. Choose the right answer:</Text>
      <Text style={styles.radioLabel}>The passage is about</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setSelectedAnswer(newValue)}
        value={selectedAnswer}
      >
        <View style={styles.radioButton}>
          <RadioButton value="a" />
          <Text style={styles.radioLabel}>
            a) Who took Tarun to school the first day.
          </Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="b" />
          <Text style={styles.radioLabel}>
            b) How Tarun felt on the first day in school and why he felt so.
          </Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="c" />
          <Text style={styles.radioLabel}>
            c) What happened in the school on the first day.
          </Text>
        </View>
      </RadioButton.Group>

      {/* Word Matching Section */}
      <Text style={styles.sectionTitle}>B2. Match a word from Column A with a word (or words) from Column B that has (or have) similar meanings.</Text>
      {Object.keys(wordMatches).map((word, index) => (
        <View key={index} style={styles.matchingRow}>
          <Text style={styles.matchingWord}>{word}</Text>
          <Picker
            selectedValue={wordMatches[word]}
            style={styles.picker}
            onValueChange={(value) =>
              setWordMatches({ ...wordMatches, [word]: value })
            }
          >
            <Picker.Item label="Select a match" value="" />
            <Picker.Item label="lovingly" value="lovingly" />
            <Picker.Item label="amusing" value="amusing" />
            <Picker.Item label="afraid" value="afraid" />
            <Picker.Item label="glad" value="glad" />
            <Picker.Item label="thrilled" value="thrilled" />
          </Picker>
        </View>
      ))}

<Text style={styles.sectionTitle}>B3. Talk about your first day at school</Text>
      <Text style={styles.subText}>
        How did you feel? Happy, frightened, thrilled, or shy? Write your thoughts below.
      </Text>
      <TextInput
        style={styles.textArea}
        multiline
        placeholder="Write your thoughts here..."
        value={discussionNotes}
        onChangeText={setDiscussionNotes}
      />

      {/* Paragraph Writing */}
      <Text style={styles.sectionTitle}>B4. Write a paragraph on how you felt on your first day at school</Text>
      <TextInput
        style={styles.textArea}
        multiline
        placeholder="Write your paragraph here..."
        value={paragraph}
        onChangeText={setParagraph}
      />

      {/* Poem Display */}
      <Text style={styles.sectionTitle}>C. Read the following poem and end this lesson with fun and laughter - "Let's Play"</Text>
      <View style={{display:'flex', flexDirection:'row'}}>
      <Text style={styles.poemText} className="bg-blue-700">
        School is over, {"\n"}
        Oh, what fun! {"\n"}
        Lessons finished, {"\n"}
        Play begun. {"\n"}
        Who’ll run fastest, {"\n"}
        You or I? {"\n"}
        Who’ll laugh loudest? {"\n"}
        Let us try.
      </Text>
      <Image 
        source={require('../../assets/images/lesson1/l1-3.png')}
        style={{
          width: 150,
          height: 150,
          resizeMode: 'contain',
          marginLeft: 20
        }}
      />
      </View>

      <Button title="Read Poem Aloud" onPress={handlePoemRead} color="#007BFF" />

      {/* Punctuation Explanation */}
      <Text style={styles.sectionTitle}>C1. Notice the use of punctuation marks in the poem. Why are the exclamation marks (!), question marks (?), and full stops (.) used in these places?</Text>
      <TextInput
        style={styles.textArea}
        multiline
        placeholder="Write your answer here..."
        value={paragraph}
        onChangeText={setParagraph}
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} color="#007BFF" />
    </ScrollView>
  );
};

// Styles
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

export default Chapter1;
