import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
