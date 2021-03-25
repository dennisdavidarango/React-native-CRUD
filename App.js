import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './screens/UserList'
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'


const  Stack = createStackNavigator()

function MyStack(){
  return (
  <Stack.Navigator>
    <Stack.Screen name="UserList" component={UserList} options={{title: 'Lista de Usuarios'}}/>
    <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Crear un nuevo usuario'}}/>
    <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'Detalle de Usuario'}}/>
  </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text:{
    fontSize: 40
  }
});
