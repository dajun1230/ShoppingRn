import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import PopularPage from '../pages/popular';
import TrendPage from '../pages/trend';
import CollectionPage from '../pages/collection';
import MyPage from '../pages/my';

const Tab  = createBottomTabNavigator();

// TODO: 在这里配置页面的路由
const tabs = () => {
return (
  <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name='PopularPage'
        component={PopularPage}
        options={{
          headerShown: false,
          tabBarLabel: "最热",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="whatshot" size={24} style={{color}} />
          ),
        }}
      />
      <Tab.Screen
        name='TrendPage'
        component={TrendPage}
        options={{
          tabBarLabel: "趋势",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-trending-up-sharp" size={24} style={{color}} />
          )
        }}
      />
      <Tab.Screen
        name='CollectionPage'
        component={CollectionPage}
        options={{
          tabBarLabel: "收藏",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} style={{color}} />
          )
        }}
      />
      <Tab.Screen
        name='MyPage'
        component={MyPage}
        options={{
          tabBarLabel: "我的",
          tabBarIcon: ({ color }) => (
            <EntypoIcons name="user" size={24} style={{color}} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const DynamicTabNavigator = () => {

  const TabNavigator = tabs();

  return TabNavigator;
}

const TabBarComponent = (props: any) => {
  console.log('TabBar:', props);
  // let themeData = {
  //   tintColor: props.activeTintColor,
  //   updateTime: new Date().getTime()
  // }

  // const { routes, index } = props.navigation.state;
  // if (routes[index].params) {
  //   const { theme } = routes[index].params;
  //   // 以最新的更新时为主，防止被其他tab之前的修改覆盖掉
  //   if (theme && theme.updateTime > themeData.updateTime) {
  //     themeData = theme;
  //   }
  // }

  return (
    <BottomTabBar
      {...props}
      // activeTintColor={themeData.tintColor || props.activeTintColor}
     />
  );
}

export default DynamicTabNavigator;
