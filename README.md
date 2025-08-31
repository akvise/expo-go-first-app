# Expo Go - Первое iOS Приложение 📱

> **React Native приложение с русскоязычным интерфейсом, созданное без Xcode**
> 
> Демонстрирует навигацию, анимации и интерактивные элементы. Поддерживает удаленное тестирование из любой точки мира через туннели.
> 
> **English**: First React Native iOS app with Russian interface. Built without Xcode with remote testing support via tunnels.

[![React Native](https://img.shields.io/badge/React%20Native-0.79.6-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2053-000020.svg)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Особенности

- **Русский интерфейс** с эмодзи
- **3 экрана**: Главный, Счетчик, О приложении  
- **Анимации** при нажатии на кнопки
- **Простая навигация** через useState
- **Адаптивный дизайн** для разных экранов iPhone

## 🚀 Быстрый старт

### Локальная разработка (одна сеть)
```bash
git clone git@github.com:akvise/expo-go-first-app.git
cd expo-go-first-app
npm install
npm start
```

### Удаленная разработка (разные страны/сети)
```bash
git clone git@github.com:akvise/expo-go-first-app.git
cd expo-go-first-app
npm install
make tunnel
```

## 🌍 Тестирование из разных стран

### Способ 1: Expo Tunnel (Рекомендуемый)
Самый простой способ для подключения iPhone из другой страны:

```bash
# Запуск с туннелем
make tunnel
# или
npx expo start --tunnel
```

**Как это работает:**
- Expo автоматически создает ngrok туннель
- Генерируется публичный URL доступный из любой точки мира
- QR код работает из любой страны
- Подключение стабильное и быстрое

### Способ 2: Ручная настройка ngrok
Если встроенный туннель не работает:

```bash
# Установить ngrok
npm install -g ngrok

# В первом терминале - запустить Expo
npm start

# Во втором терминале - создать туннель на порт 19000
ngrok http 19000

# Использовать HTTPS URL от ngrok в браузере
# Заменить localhost в URL на ngrok адрес
```

### Способ 3: Cloudflare Tunnel (Продвинутый)
Для постоянного доступа:

```bash
# Установить cloudflared
# macOS
brew install cloudflare/cloudflare/cloudflared
# Linux
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# Создать туннель
cloudflared tunnel --url http://localhost:19000
```

## 📱 Подключение iPhone

### Шаг 1: Установка Expo Go
- Скачайте "Expo Go" из App Store
- Бесплатное приложение от Expo

### Шаг 2: Подключение
**Если QR код работает:**
1. Запустите `make tunnel` в терминале
2. Отсканируйте QR код камерой iPhone
3. Выберите "Открыть в Expo Go"

**Если QR код не работает:**
1. Скопируйте ссылку из терминала (начинается с `exp://`)
2. Откройте Expo Go на iPhone
3. Нажмите "Enter URL manually"
4. Вставьте ссылку

### Шаг 3: При проблемах подключения
- Перезапустите: `make stop && make tunnel`
- Попробуйте другую сеть WiFi на iPhone
- Используйте мобильный интернет вместо WiFi
- Встряхните iPhone → "Reload"

## 🛠 Команды разработки

```bash
# Быстрые команды через Makefile
make tunnel    # Запуск с туннелем для удаленного доступа
make stop      # Остановка всех процессов Expo
make clean     # Очистка кэша и перезапуск
make install   # Установка зависимостей
make status    # Проверка запущенных процессов
make help      # Помощь по командам

# Стандартные команды npm
npm start      # Локальная разработка
npm run ios    # Запуск iOS симулятора (нужен macOS)
npm run web    # Запуск в браузере
```

## 🏗 Структура проекта

```
expo-go-first-app/
├── App.js              # Главный файл с навигацией
├── screens/            # Экраны приложения
│   ├── HomeScreen.js   # Стартовый экран
│   ├── CounterScreen.js # Интерактивный счетчик
│   └── AboutScreen.js  # Информация о приложении
├── assets/             # Иконки приложения
├── Makefile           # Команды для разработки
└── package.json       # Зависимости проекта
```

## 🎨 Технологии

- **React Native 0.79.6** - Фреймворк для мобильной разработки
- **Expo SDK 53** - Платформа и инструменты
- **React 19** - UI библиотека
- **JavaScript** - Язык программирования
- **Новая архитектура React Native** - Улучшенная производительность

## 📋 Архитектура

### Навигация
- Кастомная навигация через `useState`
- Централизованное управление в `App.js`
- Передача коллбэков через пропсы

### Стилизация
- React Native StyleSheet
- Цветовая схема: Синий (#4A90E2), Зеленый (#4CAF50), Красный (#F44336)
- iOS-стиль с тенями и скругленными углами
- Flexbox макеты

### Компоненты
- Функциональные компоненты с хуками
- React.useState для состояния
- Animated API для анимаций
- TouchableOpacity для кнопок

## 🌐 Поддержка разных сетей

### Локальная сеть (одна WiFi)
✅ `npm start` - работает автоматически

### Разные WiFi сети  
✅ `make tunnel` - создает публичный доступ

### Разные страны
✅ `make tunnel` - работает через ngrok

### Мобильный интернет
✅ `make tunnel` - работает со всеми операторами

### Корпоративные сети
⚠️ Может потребовать настройку прокси

## 🔧 Решение проблем

### "Не удается подключиться"
```bash
make stop
make clean
make tunnel
```

### "Metro bundler не запускается"
```bash
rm -rf node_modules
npm install
make tunnel
```

### "QR код не работает"
- Используйте ручной ввод URL в Expo Go
- Попробуйте мобильный интернет вместо WiFi
- Проверьте не блокирует ли firewall порты

### "Приложение зависает при загрузке"
- Встряхните iPhone → Reload
- Закройте и откройте Expo Go
- Перезапустите туннель

## 📝 Что дальше?

- Добавить React Navigation для сложной навигации
- Интегрировать с API (fetch, axios)
- Добавить AsyncStorage для сохранения данных
- Использовать камеру и геолокацию
- Подготовить к публикации в App Store

## 🤝 Контрибьют

Форкните проект, внесите изменения и создайте Pull Request!

## 📄 Лицензия

MIT License - можете использовать код как угодно.

---

**🎉 Поздравляем!** Вы создали свое первое iOS приложение без Xcode и можете тестировать его на любом iPhone в мире!