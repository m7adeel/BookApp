import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

type FillInBlanksProps = {
  value: string;
  labels: string[];
  numeric?: boolean;
  number?: number;
};

export default function FillInBlanks({
  value,
  labels,
  numeric,
  number,
}: FillInBlanksProps) {
  const [answers, setAnswers] = useState<string[]>(
    new Array(labels.length).fill("")
  );

  const handleInputChange = (index, text) => {
    const newAnswers = [...answers];
    newAnswers[index] = text;
    setAnswers(newAnswers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{value}</Text>
      {labels.map((label, index) => {
        return (

          <TextInput
            style={styles.input}
            value={answers.at(index)}
            placeholder={label}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        );
      })}
    </View>
  );
}

// ---- A good approach can be used ----
// export default function FillInBlanks({ value, labels, numeric, number }: FillInBlanksProps) {
//   const [answers, setAnswers] = useState<string[]>(new Array(labels.length).fill(''))

//   const parts = value.split('___')

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         {number && <Text style={styles.number}>{number}. </Text>}
//         {parts.map((part, index) => (
//           <React.Fragment key={index}>
//             {part}
//             {index < parts.length - 1 && (
//               <TextInput
//                 style={styles.input}
//                 placeholder={labels[index]}
//                 value={answers[index]}
//                 onChangeText={(text) => {
//                   const newAnswers = [...answers]
//                   newAnswers[index] = text
//                   setAnswers(newAnswers)
//                 }}
//                 keyboardType={numeric ? 'numeric' : 'default'}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  number: {
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
    backgroundColor: "#FFF",
  },
  inputLabel: { fontSize: 14, fontWeight: "600", marginTop: 10 },
});
