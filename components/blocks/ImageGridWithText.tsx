import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TextWithTranslation from './common/TextWithTranslation';

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
          <View key={`left-${index}`} style={[styles.row, {marginRight: 10}]}>
            <Image source={item.left.image} style={styles.image} />
            {/* <Text style={styles.word}>{item.left.word}</Text> */}
            <TextWithTranslation textStyle={styles.word} text={item.left.word} />
          </View>
        ))}
      </View>

      {/* RIGHT COLUMN */}
      <View style={styles.column}>
        {data.map((item, index) => (
          <View key={`right-${index}`} style={[styles.row, {marginLeft: 10}]}>
            {/* <Text style={styles.word}>{item.right.word}</Text> */}
            <TextWithTranslation textStyle={styles.word} text={item.right.word} />
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
    justifyContent: 'space-evenly',
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
