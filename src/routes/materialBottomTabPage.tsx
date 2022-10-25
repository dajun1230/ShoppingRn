import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

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

const NativeStackPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Page1' component={Page1} />
      <Tab.Screen name='Page2' component={Page2} />
      <Tab.Screen name='Page3' component={Page3} />
    </Tab.Navigator>
  )
}


export default NativeStackPage;
