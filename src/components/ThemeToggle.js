import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { useTheme } from '../theme/useTheme';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme.mode);
  const colors = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={() => dispatch(toggleTheme())}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        Tema: {mode === 'light' ? '☀️ Light' : '🌙 Dark'}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
});
