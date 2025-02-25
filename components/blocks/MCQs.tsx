import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MCQS = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.option,
                        selectedOption === option && styles.selectedOption
                    ]}
                    onPress={() => handleSelect(option)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    option: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
    },
    selectedOption: {
        backgroundColor: '#4CAF50',  // Green color for selection
        borderColor: '#388E3C',
    },
    optionText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MCQS;
