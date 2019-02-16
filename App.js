import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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

class MovieCard extends React.Component{
  render (){
    return (
      <View>
        <Text>{ this.props.title }</Text>
        <Text>{ this.props.origin }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
