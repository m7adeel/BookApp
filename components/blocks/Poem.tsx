import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Poem = ({ title, author, lines }) => {
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);

  // return (
  //   <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
  //     <Text style={styles.title}>{title}</Text>
  //     <Text style={styles.author}>by {author}</Text>
  //     {lines.map((line, index) => (
  //       <Text key={index} style={styles.line}>
  //         {line}
  //       </Text>
  //     ))}
  //   </Animated.View>
  // );

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>- by {author}</Text>
      {lines.map((line, index) => (
        <Text key={index} style={styles.line}>
          {line}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  author: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'right',
    marginBottom: 10,
  },
  line: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginBottom: 3,
  },
});

export default Poem;
