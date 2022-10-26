import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const tabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PopularTab1" component={PopularTab1} options={{title: "Tab1"}}  />
      <Tab.Screen name="PopularTab2" component={PopularTab2} options={{title: "Tab2"}}  />
    </Tab.Navigator>
  )
}

const PopularTab1 = () => {
  return (
    <View>
      <Text>Tab1</Text>
    </View>
  )
}

const PopularTab2 = () => {
  return (
    <View>
      <Text>Tab2</Text>
    </View>
  )
}

const PopularPage: React.FC = () => {

  const TabNavigator = tabNavigator();

  return (
    <View style={styles.container}>
      {TabNavigator}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default PopularPage;
