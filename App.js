import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import MovieCard from './components/MovieCard';

export default class App extends React.Component {

state = {
  movies: [
    {
      id : 1,
      poster: 'https://image.tmdb.org/t/p/w300/7xfWyoz4SF5LHZ713eMtC2aZ0lT.jpg',
      title : 'Anak Laut',
      origin: 'terbaru',
      rate : 7
    },
    {
      id : 2,
      poster: 'https://image.tmdb.org/t/p/w300/6EILpfK4c1ekAUTGo9ApU6s2Lgz.jpg',
      title : 'Anak kintil',
      origin: 'Pupuler',
      rate : 10
    },
    {
      id : 3,
      poster: 'https://image.tmdb.org/t/p/w300/l6xNAwgxN2tX8ObYz7dfX6ci9Q0.jpg',
      title : 'Anak kintil',
      origin: 'Pupuler',
      rate : 10
    },
    {
      id : 4,
      poster: 'https://image.tmdb.org/t/p/w300/nesDPKzwk4QnG6SpPjUhZXXNGyK.jpg',
      title : 'Anak Sono',
      origin: 'mana aja',
      rate : 8
    },
    {
      id : 5,
      poster: 'https://image.tmdb.org/t/p/w300/uxjSP5CR9d6LBkUpeK4tavBZ68i.jpg',
      title : 'Buka CD',
      origin: 'Huaaa',
      rate : 15
    }
  ]
}

removeMovie = function (index) {
  this.state.movies.splice(index, 1)
}

  render() {
    return (
      <ScrollView>
      <View style={styles.main}>
        {
          this.state.movies.map(function(movie){
            return(
              <TouchableOpacity
                key={movie.id}
                onLongPress={ () => {
                  this.removeMovie(movie.id)
                }}  
              >
                <MovieCard
                  poster={movie.poster}
                  title={movie.title}
                  origin={movie.origin}
                />
              </TouchableOpacity>
            )
          })
        }
      </View>
      </ScrollView>
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
