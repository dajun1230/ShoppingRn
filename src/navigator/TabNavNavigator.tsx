import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import PopularPage from '../pages/popular';
import TrendPage from '../pages/trend';
import CollectionPage from '../pages/collection';
import MyPage from '../pages/my';

export type TabNavigator = {
  PopularPage: undefined;
  TrendPage: undefined;
  CollectionPage: undefined;
  MyPage: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<TabNavigator>();

const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Screen
        name="PopularPage"
        component={PopularPage}
        options={{
          tabBarLabel: "最热",
          headerShown: false,
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="whatshot" size={24} style={{color}} />
          )
        }}
      />
      <Screen
        name="TrendPage"
        component={TrendPage}
        options={{
          tabBarLabel: "趋势",
          headerShown: false,
          tabBarIcon: ({ color }: any) => (
            <Ionicons name="md-trending-up-sharp" size={24} style={{color}} />
          )
        }}
      />
      <Screen
        name="CollectionPage"
        component={CollectionPage}
        options={{
          tabBarLabel: "收藏",
          headerShown: false,
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="favorite" size={24} style={{color}} />
    )
        }}
      />
      <Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarLabel: "我的",
          headerShown: false,
          tabBarIcon: ({ color }: any) => (
            <EntypoIcons name="user" size={24} style={{color}} />
          )
        }}
      />
    </Navigator>
  )
}

export default TabNavigator;
