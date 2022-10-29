import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import TabNavNavigator from '@/navigator/TabNavNavigator';

interface Props {
  navigation: any;
}

const HomePage: React.FC<Props> = ({ navigation }) => {

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.welcome}>主页</Text>
  //   </View>
  // )

  return <TabNavNavigator />;
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
