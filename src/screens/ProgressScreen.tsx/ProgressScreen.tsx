import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProgressScreen = () => {
  // This would typically come from your app's state or storage
  const mockData = {
    weeklyWorkouts: [0, 1, 2, 1, 3, 0, 0], // Each number represents workouts per day
    monthlyCalories: 4500,
    totalMinutes: 380,
  };

  const renderWeeklyChart = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
      <View style={styles.chartContainer}>
        {mockData.weeklyWorkouts.map((count, index) => (
          <View key={index} style={styles.chartColumn}>
            <View style={styles.chartBarContainer}>
              <View 
                style={[
                  styles.chartBar, 
                  { height: count > 0 ? count * 30 : 0 }
                ]} 
              />
            </View>
            <Text style={styles.chartLabel}>{days[index]}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Progress</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Workout Frequency</Text>
        {renderWeeklyChart()}
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{mockData.monthlyCalories}</Text>
          <Text style={styles.statLabel}>Monthly Calories</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{mockData.totalMinutes}</Text>
          <Text style={styles.statLabel}>Total Minutes</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Achievements</Text>
        <View style={styles.achievement}>
          <View style={styles.achievementIcon}>
            <Text style={styles.achievementIconText}>🔥</Text>
          </View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>First Workout!</Text>
            <Text style={styles.achievementDescription}>
              You completed your first workout. Keep going!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    margin: 15,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  chartColumn: {
    alignItems: 'center',
  },
  chartBarContainer: {
    height: 120,
    width: 30,
    justifyContent: 'flex-end',
  },
  chartBar: {
    width: 20,
    backgroundColor: '#4a90e2',
    borderRadius: 3,
  },
  chartLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  statCard: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementIconText: {
    fontSize: 20,
  },
  achievementDetails: {
    marginLeft: 10,
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProgressScreen;