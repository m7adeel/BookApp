import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Svg, { Line } from "react-native-svg";

const data = [
  { id: "1", question: "Apple", answer: "Animal" },
  { id: "2", question: "Car", answer: "Vehicle" },
  { id: "3", question: "Dog", answer: "Fruit" },
  { id: "4", question: "Rose", answer: "Flower" },
];

export default function MatchColumns({ headers, leftValues, rightValues }) {
  const leftColumn = leftValues
  const rightColumn = rightValues

  const [selected, setSelected] = useState({ left: null, right: null });
  const [matches, setMatches] = useState([]);

  const handleSelect = (side, value) => {
    // Prevent selecting already matched items
    if (matches.some((match) => match[side] === value)) return;

    setSelected((prev) => {
      const newSelection = { ...prev, [side]: value };

      if (newSelection.left && newSelection.right) {

        setMatches((prevMatches) => [...prevMatches, newSelection]);

        return { left: null, right: null }; // Reset selection after matching attempt
      }

      return newSelection;
    });
  };

  return (
    <View style={styles.container}>
      {/* SVG Lines for Matches */}
      <Svg height="100%" width="100%" style={styles.svg}>
        {matches.map((match, index) => {
          const leftIndex = leftColumn.indexOf(match.left);
          const rightIndex = rightColumn.indexOf(match.right);
          return (
            <Line
              key={index}
              x1="130" y1={50 + leftIndex * 80}
              x2="230" y2={50 + rightIndex * 80}
              stroke="green"
              strokeWidth="2"
            />
          );
        })}
      </Svg>

      <View style={styles.columns}>
        {/* Left Column (Questions) */}
        <View style={styles.column}>
          {leftColumn.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                selected.left === item && styles.selected,
                matches.some((match) => match.left === item) && styles.matched,
              ]}
              onPress={() => handleSelect("left", item)}
              disabled={matches.some((match) => match.left === item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Right Column (Answers) */}
        <View style={styles.column}>
          {rightColumn.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                selected.right === item && styles.selected,
                matches.some((match) => match.right === item) && styles.matched,
              ]}
              onPress={() => handleSelect("right", item)}
              disabled={matches.some((match) => match.right === item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  columns: { flexDirection: "row", width: "100%", justifyContent: "space-between" },
  column: { width: "40%", alignItems: "center" },
  item: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#333",
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  selected: { backgroundColor: "#d1e7dd" },
  matched: { backgroundColor: "#a3e635" },
  svg: { position: "absolute", top: 0, left: 0, zIndex: -1 },
});
