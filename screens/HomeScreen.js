import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Мое первое iOS приложение! 🎉</Text>
        <Text style={styles.subtitle}>Добро пожаловать!</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Это ваше первое приложение, созданное с помощью React Native и Expo.
          Теперь вы можете тестировать его прямо на вашем iPhone!
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]} 
            onPress={() => onNavigate('counter')}
          >
            <Text style={styles.buttonText}>Счетчик 🔢</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]} 
            onPress={() => onNavigate('about')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>О приложении ℹ️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8F4FF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 15,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4A90E2',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  secondaryButtonText: {
    color: '#4A90E2',
  },
});