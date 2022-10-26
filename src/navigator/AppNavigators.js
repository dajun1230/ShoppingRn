import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../pages/Welcome';
import HomePage from '../pages/HomePage';

const Stack = createNativeStackNavigator();

const AppNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name='Welcome' component={WelcomePage} options={{headerShown: false}} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigators;
