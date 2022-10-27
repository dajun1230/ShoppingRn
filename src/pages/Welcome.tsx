import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigate } from 'utils/navigationService';

const WelcomePage = (props: any) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // 跳转到首页
      navigate('HomePage');
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
