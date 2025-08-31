import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AboutScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => onNavigate('home')}
        >
          <Text style={styles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.title}>О приложении</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎉 Поздравляем!</Text>
          <Text style={styles.cardContent}>
            Вы только что создали свое первое iOS приложение без использования Xcode!
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🛠️ Технологии</Text>
          <Text style={styles.cardContent}>
            Это приложение создано с использованием:
          </Text>
          <Text style={styles.listItem}>• React Native - для кроссплатформенной разработки</Text>
          <Text style={styles.listItem}>• Expo - для упрощения разработки и тестирования</Text>
          <Text style={styles.listItem}>• JavaScript - язык программирования</Text>
          <Text style={styles.listItem}>• Ubuntu Linux - серверная среда разработки</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📱 Как тестировать</Text>
          <Text style={styles.cardContent}>
            Для тестирования на вашем iPhone:
          </Text>
          <Text style={styles.listItem}>1. Скачайте приложение "Expo Go" из App Store</Text>
          <Text style={styles.listItem}>2. Запустите команду "npm start" в терминале</Text>
          <Text style={styles.listItem}>3. Отсканируйте QR-код камерой iPhone</Text>
          <Text style={styles.listItem}>4. Наслаждайтесь живым обновлением кода!</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚀 Что дальше?</Text>
          <Text style={styles.cardContent}>
            Теперь вы можете:
          </Text>
          <Text style={styles.listItem}>• Добавлять новые экраны и компоненты</Text>
          <Text style={styles.listItem}>• Работать с API и базами данных</Text>
          <Text style={styles.listItem}>• Добавлять анимации и переходы</Text>
          <Text style={styles.listItem}>• Использовать камеру и геолокацию</Text>
          <Text style={styles.listItem}>• Публиковать приложение в App Store</Text>
        </View>
        
        <View style={[styles.card, styles.successCard]}>
          <Text style={styles.successTitle}>✨ Отличная работа!</Text>
          <Text style={styles.successContent}>
            Вы преодолели барьер отсутствия Xcode и создали настоящее мобильное приложение.
            Теперь весь мир iOS разработки открыт для вас!
          </Text>
        </View>
        
        <View style={styles.navigationHint}>
          <TouchableOpacity 
            style={styles.hintButton} 
            onPress={() => onNavigate('counter')}
          >
            <Text style={styles.hintButtonText}>Попробуйте счетчик! →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    paddingLeft: 10,
  },
  successCard: {
    backgroundColor: '#E8F5E8',
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  successContent: {
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  navigationHint: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  hintButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hintButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});