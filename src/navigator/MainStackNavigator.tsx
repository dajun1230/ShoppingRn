import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/Welcome';

export type MainNavigator = {
  HomePage: undefined;
  WelcomePage: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<MainNavigator>();

const MainStackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: "首页"
        }}
      />
      <Screen
        name="WelcomePage"
        component={WelcomePage}
      />
    </Navigator>
  )
};

export default MainStackNavigator;
