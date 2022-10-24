import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../routes/homePage';
import Page1 from '../routes/page1';
import Page2 from '../routes/page2';
import Page3 from '../routes/page3';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={() => ({
            title: "Home",
          })}
        />
        <Stack.Screen name="Page1" component={Page1} options={({ route, navigation }) =>  {
          console.log(navigation);
          console.log('route', route);
          return ({
            title : (route.params as {name: ''}).name || "",
            headerLeft: () => <Text onPress={() => navigation.goBack()}>返回</Text>
          })
        }} 
        />
        <Stack.Screen name="Page2" component={Page2} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Page3" component={Page3} options={({route, navigation}) => ({
          headerRight: () => (
            <Button 
            title={(route.params as {mode: 'edit'}).mode === 'edit'? "保存" : "编辑"} onPress={() => {
              navigation.setParams({mode: (route.params as {mode: 'edit'}).mode === 'edit'? "" : "edit"})
            }} />
          )
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
