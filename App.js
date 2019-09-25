import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import PendingScreen from './src/screens/PendingScreen';
import CompleteScreen from './src/screens/CompleteScreen';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const Tabs = createMaterialTopTabNavigator({
  Current: {
    screen: IndexScreen,
    navigationOptions: {
      tabBarLabel: 'Current',
    },
  },
  Pending: {
    screen: PendingScreen,
    navigationOptions: {
      tabBarLabel: 'Pending',
    },
  },
  Completed: {
    screen: CompleteScreen,
    navigationOptions: {
      tabBarLabel: 'Completed',
    },
  },
}, {
  navigationOptions: {
    title:'SELLING',
    headerTintColor:'white',
    headerStyle:{
        backgroundColor:'black',
        borderBottomWidth:0      
    },
    headerLeft: (<TouchableOpacity>
        <AntDesign name="left" size={20} style={{color:'white', marginLeft: 10}}/>
    </TouchableOpacity>),

  },
  tabBarOptions: {
    activeTintColor: 'white',
    indicatorStyle:{
      backgroundColor:'white'
    },
    style: {
      height: 56,
      backgroundColor: 'black',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      marginTop:0,
      shadowRadius: 6,
      shadowOpacity: 1,
      borderColor:'black'
    }
  }
})


const navigator = createStackNavigator({
  Home:{
    screen: Tabs
  }
});


export default createAppContainer(navigator)
