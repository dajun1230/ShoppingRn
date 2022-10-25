import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/AntDesign';

const BottomNavStack = createBottomTabNavigator();

const Page1 = () => {
  return (
    <View>
      <Text>首页</Text>
    </View>
  )
}

const Page2 = ({navigation}: any) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Page1')}>分类</Text>
    </View>
  )
}

const Page3 = ({navigation}: any) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Page1')}>购物车</Text>
    </View>
  )
}

const Page4 = ({navigation}: any) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Page1')}>我的</Text>
    </View>
  )
}

const BottomNavPage = () => {
  return (
    <BottomNavStack.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <BottomNavStack.Screen
        name="Page1"
        component={Page1} 
        options={{
          title: "首页",
          tabBarBadge: 3,
          tabBarLabel: "首页",
          tabBarIcon: ({color}) => <IonIcons name="home" size={24} color={color} />
        }}
      />
      <BottomNavStack.Screen name="Page2" component={Page2} 
        options={{
          title: "分类",
          tabBarLabel: "分类",
          tabBarIcon: ({color}) => <IonIcons name="appstore-o" size={24} color={color} />
        }}
      />
      <BottomNavStack.Screen name="Page3" component={Page3} 
        options={{
          title: "购物车",
          tabBarLabel: "购物车",
          tabBarIcon: ({color}) => <IonIcons name="shoppingcart" size={24} color={color} />
        }}
      />
      <BottomNavStack.Screen name="Page4" component={Page4} 
        options={{
          title: "我的",
          tabBarLabel: "我的",
          tabBarIcon: ({color}) => <IonIcons name="user" size={24} color={color} />
        }}
      />
    </BottomNavStack.Navigator>
  )
}

export default BottomNavPage;
