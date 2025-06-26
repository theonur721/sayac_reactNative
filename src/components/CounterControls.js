import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';
import { useTheme } from '../theme/useTheme';

const CounterControls = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const colors = useTheme();

  // Koşullu renk belirle
  const countTextColor = count >= 7 ? '#E63946' : colors.primary;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.countText, { color: countTextColor }]}>{count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.secondary }]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.secondary }]}
          onPress={() => dispatch(reset())}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.secondary }]}
          onPress={() => dispatch(increment())}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterControls;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    padding: 15,
    borderRadius: 12,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
});
