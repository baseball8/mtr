import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import * as Screens from '../Screens';
import {navigationDefault} from './Options';
export const MeStack = createStackNavigator(
  {
    SettingScreen: Screens.SettingScreen,
  },
  {
    defaultNavigationOptions: navigationDefault,
  },
);
