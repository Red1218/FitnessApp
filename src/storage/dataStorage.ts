// src/storage/dataStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EntryData, UserSettings } from '../types';

// Keys
const ENTRIES_KEY = '@fitness_tracker_entries';
const SETTINGS_KEY = '@fitness_tracker_settings';

// Save a new entry
export const saveEntry = async (entry: Partial<EntryData>): Promise<boolean> => {
  try {
    // Get existing entries
    const existingEntriesJson = await AsyncStorage.getItem(ENTRIES_KEY);
    const existingEntries: EntryData[] = existingEntriesJson 
      ? JSON.parse(existingEntriesJson) 
      : [];
    
    // Add new entry with timestamp
    const newEntry: EntryData = {
      ...entry,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    } as EntryData;
    
    const updatedEntries = [...existingEntries, newEntry];
    
    // Save updated entries
    await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(updatedEntries));
    return true;
  } catch (error) {
    console.error('Error saving entry:', error);
    return false;
  }
};

// Get all entries
export const getEntries = async (): Promise<EntryData[]> => {
  try {
    const entriesJson = await AsyncStorage.getItem(ENTRIES_KEY);
    return entriesJson ? JSON.parse(entriesJson) : [];
  } catch (error) {
    console.error('Error getting entries:', error);
    return [];
  }
};

// Save settings
export const saveSettings = async (settings: UserSettings): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    return true;
  } catch (error) {
    console.error('Error saving settings:', error);
    return false;
  }
};

// Get settings
export const getSettings = async (): Promise<UserSettings> => {
  try {
    const settingsJson = await AsyncStorage.getItem(SETTINGS_KEY);
    return settingsJson 
      ? JSON.parse(settingsJson) 
      : { calorieGoal: 2000 }; // Default settings
  } catch (error) {
    console.error('Error getting settings:', error);
    return { calorieGoal: 2000 };
  }
};