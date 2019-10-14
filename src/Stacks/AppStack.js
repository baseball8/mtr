import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import {AppTabsStack} from './AppTabsStack';
import {navigationDefault} from './Options';
export const AppStack = createStackNavigator(
  {
    AppTabsStack: AppTabsStack,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {...navigationDefault, headerMode: 'none'},
  },
);
