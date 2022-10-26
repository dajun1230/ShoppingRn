import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>我的</Text>
    </View>
  )
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

export default MyPage;
