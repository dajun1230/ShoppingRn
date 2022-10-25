import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/AntDesign';

const HomePage = ({navigation}: any) => {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      <Text style={styles.text}>欢迎来到HomePage</Text>
      <IonIcons name="staro" size={50} style={{color: 'red'}} />
      <Button 
        title='tabbar导航器'
        onPress={() => {
          navigation.navigate('BottomNavPage');
        }}
      />
      <Button 
        title='顶部导航器'
        onPress={() => {
          navigation.navigate('MaterialTopTabPage');
        }}
      />
      <Button 
        title='底部导航器'
        onPress={() => {
          navigation.navigate('MaterialBottomTabPage');
        }}
      />
      <Button 
        title='抽屉导航器'
        onPress={() => {
          navigation.navigate('DrawerPage');
        }}
      />
      <Button 
        title='Go Page1'
        onPress={() => {
          navigation.navigate('Page1',{name: "动态页面"});
        }}
      />
      <Button 
        title='Go Page2'
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />
      <Button 
        title='Go Page3'
        onPress={() => {
          navigation.navigate('Page3', {mode: ''});
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

export default HomePage;

