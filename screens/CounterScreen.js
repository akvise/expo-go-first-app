import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default function CounterScreen({ onNavigate }) {
  const [count, setCount] = useState(0);
  const [scaleValue] = useState(new Animated.Value(1));

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const increment = () => {
    setCount(count + 1);
    animateButton();
  };

  const decrement = () => {
    setCount(count - 1);
    animateButton();
  };

  const reset = () => {
    setCount(0);
    animateButton();
  };

  const getCounterColor = () => {
    if (count > 0) return '#4CAF50';
    if (count < 0) return '#F44336';
    return '#666';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => onNavigate('home')}
        >
          <Text style={styles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Счетчик</Text>
      </View>
      
      <View style={styles.content}>
        <Animated.View style={[styles.counterContainer, { transform: [{ scale: scaleValue }] }]}>
          <Text style={[styles.counterText, { color: getCounterColor() }]}>
            {count}
          </Text>
        </Animated.View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.button, styles.decrementButton]} 
            onPress={decrement}
          >
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={reset}
          >
            <Text style={styles.resetButtonText}>СБРОС</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.incrementButton]} 
            onPress={increment}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.description}>
          {count === 0 && "Начните нажимать кнопки! 🚀"}
          {count > 0 && count < 10 && "Отлично! Продолжайте! 👍"}
          {count >= 10 && "Вау! Вы достигли двузначного числа! 🎉"}
          {count < 0 && count > -10 && "Отрицательные числа тоже важны! 📉"}
          {count <= -10 && "Глубокий минус! 🕳️"}
        </Text>
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
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 65,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  counterText: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    gap: 15,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
    flex: 1,
  },
  decrementButton: {
    backgroundColor: '#F44336',
    flex: 1,
  },
  resetButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#666',
    flex: 1,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
});