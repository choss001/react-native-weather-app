/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Image,
//   Text,
//   StatusBar,
// } from 'react-native';

import * as React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요 HomeScreen 테스트입니다.</Text>
      <Button
        title="프로필 페이지로 이동"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요 ProfileScreen 테스트입니다.</Text>
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    //<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     // <Text>안녕하세요 네비게이션 테스트입니다.</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
    width: 500,
    height: 200,
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  detail: {
    marginLeft: 10,
  },
});

export default App;
