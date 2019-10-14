import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import * as Screens from '../Screens';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
export const Root = createSwitchNavigator(
  {
    SplashScreen: Screens.SplashScreen,
    AppStack: AppStack,
    AuthStack: AuthStack,
  },
  {
    initialRouteName: 'SplashScreen',
    // navigationOptions: {
    //   gesturesEnabled: false,
    //   swipeEnabled: false
    // }
  },
);
