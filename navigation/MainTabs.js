import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import BreedsScreen from '../screens/BreedsScreen';
import TeamScreen from '../screens/TeamScreen';

import { COLORS } from '../styles/ProjectStyles';

const Tab = createBottomTabNavigator();

const icons = {
  Home: 'home-outline',
  Knowledge: 'book-outline',
  Breeds: 'paw-outline',
  Team: 'people-outline',
};

export default function MainTabs() {
  const { width, fontScale } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#82798E',

        tabBarLabelPosition: 'below-icon',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: width < 360 ? 10 : 12,
          fontWeight: 'bold',
        },

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E7DFF0',
          height: 64 + Math.max(0, fontScale - 1) * 22 + insets.bottom,
          paddingTop: 6,
          paddingBottom: Math.max(6, insets.bottom),
        },

        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={icons[route.name]}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'หน้าหลัก' }}
      />

      <Tab.Screen
        name="Knowledge"
        component={KnowledgeScreen}
        options={{ title: 'มุมทาสแมว' }}
      />

      <Tab.Screen
        name="Breeds"
        component={BreedsScreen}
        options={{ title: 'สายพันธุ์' }}
      />

      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{ title: 'ผู้จัดทำ' }}
      />
    </Tab.Navigator>
  );
}
