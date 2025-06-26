import { useSelector } from 'react-redux';
import { COLORS } from './colors';

export const useTheme = () => {
  const mode = useSelector(state => state.theme.mode); // light veya dark tema
  return COLORS[mode] || COLORS.light;
};
