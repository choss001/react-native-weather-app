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
import Hook from './Components/Hook';

const Stack = createStackNavigator();

function HomeScreen({route, navigation}) {
  const {itemId} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요 HomeScreen 테스트입니다.</Text>
        <Text>itemId : {itemId}</Text>
      <Button
        title="프로필 페이지로 이동"
        onPress={() =>
          navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
          title="Hook을 이용하는 방법"
          onPress={() =>
              navigation.navigate('Hook', {
                itemId: 86,
                otherParam: 'anything you want here',
              })
          }
      />
    </View>
  );
}
function ProfileScreen({route, navigation}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;   // const otherParam = route.paramse.otherParam;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요 ProfileScreen 테스트입니다.</Text>
        <Text>itemId: {itemId}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="홈 페이지로 이동" onPress={() => navigation.push('Profile')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="popToTop" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
          initialParams={{ itemId : 50}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
            name="Hook"
            initialParams={{ itemId : 10000}}
            component={Hook}
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
