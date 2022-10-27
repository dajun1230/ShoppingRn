import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigate } from 'utils/navigationService';

const Tab = createMaterialTopTabNavigator();

const tabNavigator = () => {
  const tabNames = [ 'Java', 'Android', "iOS", 'React', 'React Native', 'PHP' ];

  return (
    <Tab.Navigator
      tabBarPosition='top'
      screenOptions={{
        tabBarStyle: {
          minWidth: 50,
          backgroundColor: '#a67'
        },
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: styles.indicatorStyle,
        tabBarLabelStyle: styles.labelStyle
      }}
    >
      { 
        tabNames.map((item) => {
          return (
            <Tab.Screen 
              key={item}
              name={item}
              options={{title: item}} 
            >
              { (props) => <PopularTab {...props} tabLabel={item} />}
            </Tab.Screen>
          )
        })
      }
    </Tab.Navigator>
  )
}

const PopularTab = ({ tabLabel }: any) => {
  return (
    <View>
      <Text>{tabLabel}</Text>
      <Text onPress={() => {
        navigate("DetailPage");
      }}>跳转到详情页</Text>
    </View>
  )
}

const PopularPage: React.FC = () => {

  const TabNavigator = tabNavigator();

  return (
    <View style={styles.container}>
      {TabNavigator}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  }
})

export default PopularPage;
