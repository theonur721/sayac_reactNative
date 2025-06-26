import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterControls from '../components/CounterControls';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../theme/useTheme';

const CounterScreen = () => {
  const colors = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.topSection}>
        <ThemeToggle />
      </View>

      <View style={styles.centerSection}>
        <CounterControls />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
