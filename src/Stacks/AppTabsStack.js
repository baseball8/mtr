import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import * as Stacks from '..';
import {HomeStack} from './HomeStack';
import {MeStack} from './MeStack';

export const AppTabsStack = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: ({navigation, header}) => ({
        ...header,
        title: '藥事',
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon focused={focused} name="home" />;
        },
      }),
    },
    MeStack: {
      screen: MeStack,
      navigationOptions: ({navigation, header}) => ({
        ...header,
        title: '我',
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon focused={focused} name="phone" />;
        },
      }),
    },
  },
  {
    initialRouteName: 'HomeStack',
    defaultNavigationOptions: {...Stacks.navigationDefault},
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOnPress,
      tabBarVisible: navigation.state.index === 0, //!!! 全部都是內頁關閉
    }),
    tabBarOptions: {
      activeTintColor: '#111',
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'rgba(236,236,245,.9)',
      },
    },
  },
);

const tabBarOnPress = ({navigation, defaultHandler}) => {
  const {isFocused, state, goBack} = navigation;

  log(isFocused, state, goBack, 'isFocused, state, goBack');
  log(state.key, 'key');

  if (window.lastFocused == state.key) {
    if (window.scrollToTop) window.scrollToTop();
  }

  window.lastFocused = state.key;
  if (isFocused()) {
    if (state.routes.length > 1) {
      navigation.navigate(state.routes[0].routeName);
    } else {
      if (window.scrollToTop) scrollToTop(0);
    }
  } else {
    defaultHandler();
  }
};

const Icon = props => {
  let {focused} = props;
  let color = focused ? '#111' : '#666';
  return (
    <T.Center padding={rwd(8)}>
      <T.Icon color={color} {...props} size={rwd(30)} />
    </T.Center>
  );
};
