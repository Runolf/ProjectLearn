/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { TasksScreen } from './src/screens/Tasks';

const App = ({children, title}) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TasksScreen />
      </SafeAreaView>
    </Provider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal"
  }
});

export default App;
