import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import SplashScreen from '../components/SplashScreen'

import { useColorScheme } from '@/hooks/useColorScheme';
import '../styles/global.css';
import React from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded || isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            title: 'Chapters',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="chapters/[id]"
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="WordDetails"/>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
