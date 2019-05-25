import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  state = {
    myState : ' Hello world'
  }
  render(){
    return (
      <View style = {styles.center}>
          <Text style = {styles.mystyle}>{this.state.myState}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mystyle:{
    color:'blue',
    backgroundColor: 'red',
    fontWeight: '900',
    fontSize: 50,
    textAlign : 'center'
  },
  center : {
    
    flexDirection: 'row',
    justifyContent:'center',
   
    alignItems:'center'

  }
})
export default App