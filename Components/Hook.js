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

import React,{Component, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// class Hook extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name : '성식'
//         }
//     }
//
//     changeName = () =>{
//         this.setState({
//             name : 'kunghun'
//         });
//     }
//
//     render() {
//         return(
//             <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
//                 <Text>안녕하세요 Hook테스트입니다.</Text>
//                 <Button title = {'이름변경'} onPress={()=> this.changeName()}/>
//                 <Text>안녕하세요 {this.state.name}님</Text>
//             </View>
//         );
//     }
// }


const Hook: () => React$Node = () => {
    const [name,setName] = useState('jin');
    const [loading, setLoading] = useState([]);
    const [users, setUsers] = useState( []);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>{
                setUsers(users);
                setLoading(false);
            });
    });

    return (
        <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text>안녕하세요 Hook테스트입니다.</Text>
            <Button title = {'이름변경'} onPress={()=> setName('kunghun')}/>
            <Text>안녕하세요 {name}</Text>

            <FlatList
                data={users}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>

    );
};

const styles = StyleSheet.create({

});

export default Hook;