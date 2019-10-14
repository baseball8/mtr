import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import * as Screens from '../Screens';
import {navigationDefault} from './Options';
export const HomeStack = createStackNavigator(
  {
    HomeScreen: Screens.HomeScreen,
    Home2Screen: Screens.Home2Screen,
  },
  {
    defaultNavigationOptions: navigationDefault,
  },
);
