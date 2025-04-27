// src/types/index.ts
export interface EntryData {
    id: string;
    date: string;
    weight?: number;
    calories?: number;
  }
  
  export interface UserSettings {
    calorieGoal: number;
    weightGoal?: number;
  }
  
  export type RootTabParamList = {
    Home: undefined;
    Log: undefined;
    Progress: undefined;
    Settings: undefined;
  };