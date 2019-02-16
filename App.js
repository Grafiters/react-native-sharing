import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MovieCard from './components/MovieCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>FBI OPEN UP</Text>
        <MovieCard
          title="pemgetahuan"
          origin="USA"
        />
        <MovieCard 
          title="Simba"
          origin="order"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#56a1c9',
    flex: 1,
    marginTop: StatusBar.currentHeight,
    color: '#fff'
  },
});
