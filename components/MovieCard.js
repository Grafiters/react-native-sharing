import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MovieCard extends React.Component{
     render (){
       return (
          <View style = {styles.cardContainer}>
               <Image 
                    style = {styles.cardImage}
                    source={{ uri: this.props.poster }}
               />
               <View style={styles.cardTextContainer}>
                   <Text style = {styles.cardText}>{ this.props.title }</Text>
                   <Text style = {styles.cardText}>{ this.props.origin }</Text>
               </View>
          </View>
       );
     }
}

const styles = StyleSheet.create({
     cardContainer: {
          display: 'flex',
          flexDirection: 'row',
          height: 130,
          marginVertical: 24,
          backgroundColor: '#7cd3ff',
          padding: 8,
          
     },
     cardImage: {
          width: 100
     },
     cardTextContainer:{
          paddingLeft: 8
     },
     cardText: {
          color:'#fff',
          
     }
});