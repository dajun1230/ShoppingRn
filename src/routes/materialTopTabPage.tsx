import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

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

const MaterialTopTabPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { minWidth: 30 },
        tabBarIndicatorStyle: {
          height: 4,
          backgroundColor: 'red'
        },
        tabBarLabelStyle: { fontSize: 14, color: 'white', marginTop: 6, marginBottom: 6},
        tabBarContentContainerStyle: {backgroundColor: 'gray'}
      }}
    >
      <Tab.Screen name='Page1' component={Page1} options={{title: '页面1'}} />
      <Tab.Screen name='Page2' component={Page2} options={{title: '页面2'}} />
      <Tab.Screen name='Page3' component={Page3} options={{title: '页面3'}} />
    </Tab.Navigator>
  )
}

export default MaterialTopTabPage;
