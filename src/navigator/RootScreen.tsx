import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@/utils/navigationService';
import MainStackNavigator from './MainStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const RootScreen = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {true && <MainStackNavigator />}
    </NavigationContainer>
  )
}

export default RootScreen;
