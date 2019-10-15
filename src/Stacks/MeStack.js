import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import * as Screens from '../Screens';
import {navigationDefault} from './Options';
export const MeStack = createStackNavigator(
  {
    Home2Screen: Screens.Home2Screen,
  },
  {
    defaultNavigationOptions: navigationDefault,
  },
);
