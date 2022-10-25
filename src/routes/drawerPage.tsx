import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createDrawerNavigator();

const Page1 = () => (
  <View>
    <Text>页面1</Text>
  </View>
)

const Page2 = () => (
  <View>
    <Text>页面2</Text>
  </View>
)

const Page3 = () => (
  <View>
    <Text>页面3</Text>
  </View>
)

const DrawerPage = () => (
  <Stack.Navigator
    screenOptions={{
      drawerActiveTintColor: 'red'
    }}
  >
    <Stack.Screen
      name='Page1'
      component={Page1}
      options={{title: '页面1', drawerIcon: () => <MaterialIcons name='drafts' size={24} /> }} />
    <Stack.Screen name='Page2' component={Page2} options={{title: '页面2', drawerIcon: () => <MaterialIcons name='align-vertical-bottom' size={24} /> }} />
    <Stack.Screen name='Page3' component={Page3} options={{title: '页面3', drawerIcon: () => <MaterialIcons name='card-giftcard' size={24} /> }} />
  </Stack.Navigator>
)

export default DrawerPage;
