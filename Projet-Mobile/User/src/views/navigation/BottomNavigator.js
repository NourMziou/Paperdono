import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Find from '../screens/Find';

import Donate from '../screens/Donate';
import Profile from '../screens/Profile';
import CartScreen from '../screens/CartScreen';
import ActionBarImage from '../components/ActionBarImage';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.green1,
      }}>
      <Tab.Screen
        name="HOME"
        component={Find}
        options={{
                    headerRight: () => <ActionBarImage />,

          headerStyle: {
            backgroundColor: COLORS.brown1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:COLORS.pink1,
          },
          tabBarIcon: ({color}) => (
            <Icon name="park" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="SECOND-HAND RESSOURCES"
        component={HomeScreen}
        options={{
                    headerRight: () => <ActionBarImage />,

          headerStyle: {
            backgroundColor: COLORS.brown1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:COLORS.pink1,
          },
          tabBarIcon: ({color}) => (
            <Icon name="local-library" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="POINT REWARDS"
        component={Donate}
        options={{
                    headerRight: () => <ActionBarImage />,

          headerStyle: {
            backgroundColor: COLORS.brown1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:COLORS.pink1,
          },
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.pink1,
                borderColor: COLORS.brown1,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="volunteer-activism" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LEADERBOARD"
        component={CartScreen}
        options={{
                    headerRight: () => <ActionBarImage />,

          headerStyle: {
            backgroundColor: COLORS.brown1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:COLORS.pink1,
          },
          tabBarIcon: ({color}) => (
            <Icon name="emoji-events" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerRight: () => <ActionBarImage />,
          headerStyle: {
            backgroundColor: COLORS.brown1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:COLORS.pink1,
          },
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
