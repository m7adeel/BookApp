import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Animated 
} from 'react-native';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const [progress] = useState(new Animated.Value(0));
  const [ornamentScale] = useState(new Animated.Value(0.5));

  useEffect(() => {
    // Animate ornament scale
    Animated.spring(ornamentScale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true
    }).start();

    // Animate progress bar with easing
    Animated.timing(progress, {
      toValue: 1,
      duration: 2500,
      easing: (t) => t * (2 - t), // easeOutQuad
      useNativeDriver: false
    }).start();
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground} />
      <View style={styles.content}>
        {/* Animated Ornament */}
        <Animated.View 
          style={[
            styles.ornamentContainer,
            { 
              transform: [{ scale: ornamentScale }],
              opacity: ornamentScale.interpolate({
                inputRange: [0.5, 1],
                outputRange: [0.5, 1]
              })
            }
          ]}
        >
          <View style={styles.ornament}>
            <View style={[styles.ornamentLayer, styles.layerPrimary]} />
            <View style={[styles.ornamentLayer, styles.layerSecondary]} />
            <View style={[styles.ornamentLayer, styles.layerAccent1]} />
            <View style={[styles.ornamentLayer, styles.layerAccent2]} />
          </View>
        </Animated.View>

        {/* Title and Subtitle */}
        <Text style={styles.titleText}>English for Today</Text>
        <Text style={styles.subtitleText}>Class Six</Text>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Animated.View 
            style={[
              styles.progressBar,
              { width: progressWidth }
            ]}
          />
        </View>

        <Text style={styles.loadingText}>
          Loading contents...
        </Text>

        <Text style={styles.publisherText}>
          National Curriculum and Textbook Board, Bangladesh
        </Text>

        {/* Credit Footer */}
        <Text style={styles.creatorText}>Brought to you by: Muhammad Adeel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'linear-gradient(135deg, #FFD54F, #FF8A65)', // Smooth warm gradient
  },
  content: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  ornamentContainer: {
    marginBottom: 30
  },
  ornament: {
    width: 200,
    height: 200,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, // For Android
  },
  ornamentLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  layerPrimary: {
    backgroundColor: '#9C27B0',
    transform: [{ scale: 0.9 }]
  },
  layerSecondary: {
    backgroundColor: '#2196F3',
    transform: [{ scale: 0.7 }]
  },
  layerAccent1: {
    backgroundColor: '#E91E63',
    transform: [{ scale: 0.5 }]
  },
  layerAccent2: {
    backgroundColor: '#4CAF50',
    transform: [{ scale: 0.3 }]
  },
  titleText: {
    color: '#6A1B9A',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitleText: {
    color: '#4A148C',
    fontSize: 24,
    marginBottom: 20
  },
  progressContainer: {
    width: '80%',
    height: 10,
    backgroundColor: 'rgba(106, 27, 154, 0.3)',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 15
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6A1B9A',
    borderRadius: 5
  },
  loadingText: {
    color: '#4A148C',
    fontSize: 16,
    marginBottom: 20
  },
  publisherText: {
    color: '#4A148C',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10
  },
  creatorText: {
    color: '#6A1B9A',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20
  }
});

export default SplashScreen;
