import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import HeaderSelectOptions from "./common/HeaderSelectOptions";

const ImageWithSelectOptions = ({ values, images }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    Array(images.length).fill("")
  );

  const handleSelection = (index, value) => {
    const newSelections = [...selectedOptions];
    newSelections[index] = value;
    setSelectedOptions(newSelections);
  };

  return (
    <View style={styles.container}>
      {/* Display Options at the Top */}
      <HeaderSelectOptions values={values}/>

      {/* Display Images with Select Options */}
      <View style={styles.imageContainer}>
        {images.map((imageUri, index) => (
          <View key={index} style={styles.imageBlock}>
            <Image
              source={{ uri: imageUri }}
              style={styles.image}
              resizeMode="contain"
            />
            <Picker
              selectedValue={selectedOptions[index]}
              onValueChange={(itemValue) => handleSelection(index, itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select an option" value="" />
              {values.map((option, i) => (
                <Picker.Item key={i} label={option} value={option} />
              ))}
            </Picker>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ImageWithSelectOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 2,
    borderColor: '#ddd',
    borderWidth:1,
  },
  optionItem: {
    backgroundColor: '#f2f2f2',
    borderWidth:1,
    padding: 8,
    margin: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  imageContainer: {
  },
  imageBlock: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 50,
  },
});