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
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeScreen({navigation, route}) {
    // const {post} = route.params;
    React.useEffect(() =>{
        if(route.params?.post){
            alert(route.params.post);
        }
    }, [route.params?.post]);
  return (
    <View style={{flex:1, alignItes: 'center', justifyContent: 'center'}}>
      <Button
          title="Create post"
          onPress={() => navigation.navigate('CreatePost')}
      />
        {/*<Text>{post}</Text>*/}
        <Text style ={{ margin : 10}}> Post: {route.params?.post}</Text>
    </View>
  );
}


function CreatePostScreen({ navigation, route}) {
    const [postText, setPostText] = React.useState('');

    return (
        <View>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height:200, padding: 10, backgroundColor: 'white'}}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title='Done'
                onPress={() => {
                    navigation.navigate('Home', {post: postText });
                }}
            />
        </View>

    );
}
const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator mode="modal">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
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
