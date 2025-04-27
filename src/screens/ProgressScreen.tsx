// src/screens/ProgressScreen.tsx
// For LogEntryScreen.tsx (and similar for other screens)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../types';

type Props = NativeStackScreenProps<RootTabParamList, 'Progress'>;

const ProgressScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weight Trend</Text>
        <Text>Chart will be displayed here</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Calorie History</Text>
        <Text>Chart will be displayed here</Text>
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
    marginBottom: 16,
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

export default ProgressScreen;
