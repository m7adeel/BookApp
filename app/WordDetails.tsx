import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Alert
} from 'react-native';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from 'expo-router';

import translate from 'translate-google-api';

const WordDetails = ({ route }) => {
  const { word } = useLocalSearchParams();
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sound, setSound] = useState();
  const [translation, setTranslation] = useState('');
  const [sentences, setSentences] = useState([]);

  useEffect(() => {
    fetchWordData();
    handleTranslation();
  }, []);

  const handleTranslation = async () => {
      translate(word, { to: "bn" })
        .then((res) => {
          setTranslation(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };

  const extractSentences = (data) => {
    const sentences = data.meanings.map(meaning => meaning.definitions.map(def => def.example)).flat().filter(Boolean);
    console.log(sentences)
    setSentences(sentences);
  }

  const fetchWordData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      
      if (!response.ok) {
        throw new Error('Word not found');
      }
      
      const data = await response.json();
      setWordData(data[0]);
      extractSentences(data[0]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const playSound = async (audioUrl) => {
    try {
      // Unload any existing sound
      if (sound) {
        await sound.unloadAsync();
      }
      
      // Load and play the new audio
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );
      
      setSound(newSound);
    } catch (error) {
      Alert.alert('Error', 'Could not play audio');
    }
  };

  // Clean up when component unmounts
  useEffect(() => {
    return sound
      ? () => sound.unloadAsync()
      : undefined;
  }, [sound]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0066cc" />
          <Text style={styles.loadingText}>Looking up "{word}"...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchWordData}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Word and Phonetic Section */}
        <View style={styles.header}>
          <Text style={styles.wordTitle}>{wordData.word}</Text>
          <Text style={styles.phonetic}>{wordData.phonetic}</Text>
        </View>

        {/* Bengali Translation */}
        <Text style={[styles.wordTitle, {marginBottom:20}]}>{translation}</Text>

        {/* Pronunciations */}
        {wordData.phonetics && wordData.phonetics.length > 0 && (
          <View style={styles.pronunciationContainer}>
            <Text style={styles.sectionTitle}>Pronunciation</Text>
            {wordData.phonetics.map((phonetic, index) => (
              phonetic.audio && (
                <TouchableOpacity 
                  key={index}
                  style={styles.pronunciationItem}
                  onPress={() => playSound(phonetic.audio)}
                >
                  <Text style={styles.pronunciationText}>
                    {phonetic.text || 'Listen'} 
                    {phonetic.audio.includes('-uk.') ? ' (UK)' : ''}
                    {phonetic.audio.includes('-us.') ? ' (US)' : ''}
                  </Text>
                  <Ionicons name="volume-high" size={24} color="#0066cc" style={styles.speakerIcon} />
                </TouchableOpacity>
              )
            ))}
          </View>
        )}

        {/* Meanings */}
        {wordData.meanings && wordData.meanings.map((meaning, index) => (
          <View key={index} style={styles.meaningContainer}>
            <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
            
            {/* Definitions */}
            <View style={styles.definitionsContainer}>
              {meaning.definitions.map((def, defIndex) => (
                <View key={defIndex} style={styles.definitionItem}>
                  <Text style={styles.definitionNumber}>{defIndex + 1}.</Text>
                  <View style={styles.definitionContent}>
                    <Text style={styles.definition}>{def.definition}</Text>
                    
                    {/* Example if available */}
                    {def.example && (
                      <Text style={styles.example}>"{def.example}"</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>

            {/* Synonyms */}
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <View style={styles.synonymsContainer}>
                <Text style={styles.synonymsTitle}>Synonyms:</Text>
                <View style={styles.synonymsList}>
                  {meaning.synonyms.map((synonym, synIndex) => (
                    <Text key={synIndex} style={styles.synonym}>{synonym}</Text>
                  ))}
                </View>
              </View>
            )}

            {/* Antonyms */}
            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <View style={styles.antonymsContainer}>
                <Text style={styles.antonymsTitle}>Antonyms:</Text>
                <View style={styles.antonymsList}>
                  {meaning.antonyms.map((antonym, antIndex) => (
                    <Text key={antIndex} style={styles.antonym}>{antonym}</Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}

         {/* Sentences */}
         {sentences && sentences.length > 0 && (
              <View style={styles.sentencesContainer}>
                <View style={styles.sentencesTitleContainer}>
                  <Text style={styles.sentencesTitle}>Example Sentences</Text>
                </View>
                
                {sentences.map((sentence, index) => (
                  <View key={index} style={styles.sentenceCard}>
                    <View style={styles.sentenceNumberBadge}>
                      <Text style={styles.sentenceNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.sentenceText}>
                      <Text style={styles.highlightedWord}>
                        {sentence}
                      </Text>
                    </Text>
                  </View>
                ))}
              </View>
            )}

        {/* Source */}
        {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
          <View style={styles.sourceContainer}>
            <Text style={styles.sourceTitle}>Source:</Text>
            {wordData.sourceUrls.map((url, index) => (
              <Text key={index} style={styles.sourceUrl}>{url}</Text>
            ))}
          </View>
        )}

        {/* License */}
        {wordData.license && (
          <View style={styles.licenseContainer}>
            <Text style={styles.licenseText}>
              License: {wordData.license.name}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#444',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#d32f2f',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    marginBottom: 24,
  },
  wordTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },
  phonetic: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  pronunciationContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  pronunciationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9f0f8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  pronunciationText: {
    fontSize: 16,
    color: '#0066cc',
    flex: 1,
  },
  speakerIcon: {
    width: 24,
    height: 24,
  },
  meaningContainer: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 16,
  },
  partOfSpeech: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  definitionsContainer: {
    marginBottom: 16,
  },
  definitionItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  definitionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginRight: 8,
    minWidth: 20,
  },
  definitionContent: {
    flex: 1,
  },
  definition: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  example: {
    fontSize: 15,
    color: '#666',
    marginTop: 6,
    fontStyle: 'italic',
  },
  synonymsContainer: {
    marginTop: 8,
    marginBottom: 12,
  },
  synonymsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
  },
  synonymsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  synonym: {
    fontSize: 15,
    color: '#0066cc',
    backgroundColor: '#e9f0f8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  antonymsContainer: {
    marginTop: 8,
  },
  antonymsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
  },
  antonymsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  antonym: {
    fontSize: 15,
    color: '#d32f2f',
    backgroundColor: '#ffebee',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  // New Sentences styling
  sentencesContainer: {
    marginBottom: 24,
    marginTop: 8,
  },
  sentencesTitleContainer: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    paddingLeft: 12,
    marginBottom: 16,
  },
  sentencesTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  sentenceCard: {
    backgroundColor: '#f5f9f5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 1,
    borderLeftColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
    paddingLeft: 40,
  },
  sentenceNumberBadge: {
    position: 'absolute',
    left: 10,
    top: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentenceNumberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  sentenceText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  highlightedWord: {
    // Special styling to highlight the searched word in sentences
    textShadowColor: 'rgba(76, 175, 80, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  sourceContainer: {
    marginTop: 20,
    marginBottom: 12,
  },
  sourceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  sourceUrl: {
    fontSize: 14,
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
  licenseContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  licenseText: {
    fontSize: 14,
    color: '#666',
  },
});

export default WordDetails;