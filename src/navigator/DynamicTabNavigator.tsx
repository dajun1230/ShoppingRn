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

const TABS = [
  {
    name: 'PopularPage',
    component: PopularPage,
    tabBarLabel: "最热",
    headerShown: false,
    tabBarIcon: ({ color }: any) => (
      <MaterialIcons name="whatshot" size={24} style={{color}} />
    )
  },
  {
    name: 'TrendPage',
    component: TrendPage,
    tabBarLabel: "趋势",
    headerShown: false,
    tabBarIcon: ({ color }: any) => (
      <Ionicons name="md-trending-up-sharp" size={24} style={{color}} />
    )
  },
  {
    name: 'CollectionPage',
    component: CollectionPage,
    tabBarLabel: "收藏",
    headerShown: false,
    tabBarIcon: ({ color }: any) => (
      <MaterialIcons name="favorite" size={24} style={{color}} />
    )
  },
  {
    name: 'MyPage',
    component: MyPage,
    tabBarLabel: "我的",
    headerShown: false,
    tabBarIcon: ({ color }: any) => (
      <EntypoIcons name="user" size={24} style={{color}} />
    )
  }
];

// const TabBarComponent = (props: any) => {
//   return (
//     <BottomTabBar
//       {...props}
//      />
//   );
// }

const DynamicTabNavigator = ({ navigation }: any) => {

  const tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          // tabBarInactiveTintColor: 'green',
          tabBarLabelStyle: { fontSize: 14 },
        }}
        // tabBar={TabBarComponent}
      >
        {TABS.map(item => {
          return (
            <Tab.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{
                headerShown: item.headerShown,
                tabBarLabel: item.tabBarLabel,
                tabBarIcon: item.tabBarIcon,
              }}
            />
          )
        })}
      </Tab.Navigator>
    )
  }

  const TabNavigator = tabs();

  return TabNavigator;
}

export default DynamicTabNavigator;
