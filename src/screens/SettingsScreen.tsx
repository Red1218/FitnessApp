// src/screens/SettingsScreen.tsx
// For LogEntryScreen.tsx (and similar for other screens)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../types';

type Props = NativeStackScreenProps<RootTabParamList, 'Settings'>;

const SettingsScreen: React.FC<Props> = () => {
  const [calorieGoal, setCalorieGoal] = useState<string>('2000');
  const [weightGoal, setWeightGoal] = useState<string>('');

  const saveSettings = () => {
    // Will implement settings storage later
    Alert.alert('Success', 'Settings saved!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Daily Calorie Goal:</Text>
        <TextInput
          style={styles.input}
          value={calorieGoal}
          onChangeText={setCalorieGoal}
          placeholder="Enter daily calorie goal"
          keyboardType="number-pad"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Weight Goal (lbs):</Text>
        <TextInput
          style={styles.input}
          value={weightGoal}
          onChangeText={setWeightGoal}
          placeholder="Enter target weight"
          keyboardType="decimal-pad"
        />
      </View>
      
      <Button title="Save Settings" onPress={saveSettings} />
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

export default SettingsScreen;