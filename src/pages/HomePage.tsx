import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';

const HomePage: React.FC = () => {

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.welcome}>主页</Text>
  //   </View>
  // )
  return <DynamicTabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default HomePage;
