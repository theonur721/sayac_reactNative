import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
