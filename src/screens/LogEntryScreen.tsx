// src/screens/LogEntryScreen.tsx
// For LogEntryScreen.tsx (and similar for other screens)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../types';

type Props = NativeStackScreenProps<RootTabParamList, 'Log'>;

const LogEntryScreen: React.FC<Props> = () => {
  const [weight, setWeight] = useState<string>('');
  const [calories, setCalories] = useState<string>('');

  const saveEntry = () => {
    // Will implement local storage saving later
    console.log('Saving entry:', { weight, calories });
    Alert.alert('Success', 'Entry saved!');
    // Clear inputs
    setWeight('');
    setCalories('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Today's Data</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Weight (lbs):</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Enter your weight"
          keyboardType="decimal-pad"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Calories Consumed:</Text>
        <TextInput
          style={styles.input}
          value={calories}
          onChangeText={setCalories}
          placeholder="Enter calories consumed"
          keyboardType="number-pad"
        />
      </View>
      
      <Button title="Save Entry" onPress={saveEntry} />
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
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
  },
});

export default LogEntryScreen;