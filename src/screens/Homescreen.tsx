// src/screens/HomeScreen.tsx
// For LogEntryScreen.tsx (and similar for other screens)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../types';

type Props = NativeStackScreenProps<RootTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>
      <Text style={styles.subtitle}>Welcome to your weight loss journey</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Summary</Text>
        <Text>Calories: Not logged yet</Text>
        <Text>Weight: Not logged yet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f8fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;