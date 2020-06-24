/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import React, {Fragment, Component} from "react";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){
    return (
      <View style = {{flex : 1}}>
          <View style = {styles.container}>
              <Image source={require('./assets/IronMan.jpg')} style = {{width:100, height: 100}}/>

              <View style = {{flexDirection : 'column'}}>
                  <View style = {{flexDirection: 'row'}}>
                      <Text style = {styles.title}>활동연대</Text>
                      <Text style = {styles.detail}>2000, 2010</Text>
                  </View>
                  <View style = {{flexDirection: 'row'}}>
                      <Text style = {styles.title}>출생</Text>
                      <Text style = {styles.detail}>2000, 2010</Text>
                  </View>
                  <View style = {{flexDirection: 'row'}}>
                      <Text style = {styles.title}>활동연대</Text>
                      <Text style = {styles.detail}>2000, 2010</Text>
                  </View>
                  <View style = {{flexDirection: 'row'}}>
                      <Text style = {styles.title}>활동연대</Text>
                      <Text style = {styles.detail}>2000, 2010</Text>
                  </View>
              </View>
          </View>

          <View style = {{width : 50, height : 50, backgroundColor : 'red'}}></View>
          <View style = {{flex : 1, backgroundColor : 'yellow'}}>
              <View style ={{flex : 1}}></View>
              <View style ={{flex : 1, backgroundColor : 'skyblue'}}></View>
              <View style = {{flex : 1, backgroundColor : 'red'}}></View>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container : {
      marginTop : 50,
      marginLeft : 20,
      flexDirection : 'row',
      width : 500,
      height : 200,
    },
    title : {
        marginLeft: 10,
        fontWeight: 'bold',
        color : 'gray',
    },
    detail : {
        marginLeft : 10
    }

});

export default App;
