import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Page3 = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor:"gray", paddingTop: 30}}>
      <Text style={styles.text}>欢迎来到Page3</Text>
      <Button 
        title='Go Back'
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button 
        title='Go Page2'
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default Page3;

