import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import * as Stacks from './';
import * as Screens from '../';
export const AuthStack = createStackNavigator(
  {
    WelcomeScreen: Screens.WelcomeScreen,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: Stacks.navigationDefault,
  },
);
