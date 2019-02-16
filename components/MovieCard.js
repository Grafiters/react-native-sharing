import React from 'react';
import { Text, View} from 'react-native';

export default class MovieCard extends React.Component{
     render (){
       return (
         <View>
           <Text>{ this.props.title }</Text>
           <Text>{ this.props.origin }</Text>
         </View>
       );
     }
   }