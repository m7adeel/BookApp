import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ImageGridWithTextProps = {
    data: {
        left: { word: string; image: any };
        right: { word: string; image: any };
    }[];
}

// Generic component for displaying word pairs with images
const ImageGridWithText = ({ data }: ImageGridWithTextProps) => {
  return (
    <View style={styles.container}>
      {/* LEFT COLUMN */}
      <View style={styles.column}>
        {data.map((item, index) => (
          <View key={`left-${index}`} style={styles.row}>
            <Image source={item.left.image} style={styles.image} />
            <Text style={styles.word}>{item.left.word}</Text>
          </View>
        ))}
      </View>

      {/* RIGHT COLUMN */}
      <View style={styles.column}>
        {data.map((item, index) => (
          <View key={`right-${index}`} style={styles.row}>
            <Text style={styles.word}>{item.right.word}</Text>
            <Image source={item.right.image} style={styles.image} />
          </View>
        ))}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  column: {
    flex: 1, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImageGridWithText;
