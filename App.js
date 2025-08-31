import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CounterScreen from './screens/CounterScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'about':
        return <AboutScreen onNavigate={setCurrentScreen} />;
      case 'counter':
        return <CounterScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
