import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

const WelcomePage = (props: any) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // 跳转到首页
      NavigationUtil.resetToHomePage(props);
    }, 2000);
    return () => {
      // 页面销毁时，清空定时器
      timer && clearTimeout(timer);
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})


export default WelcomePage;
