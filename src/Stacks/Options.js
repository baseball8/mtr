import React from 'react';

// import NavigationService from '../../services/NavigationService.js'

window.STATUSBAR_COLOR = 'blue';
window.STATUSBAR_TOP = '5%';
window.SAFEAREA_TOP = '5%';
window.BUTTON_COLOR = 'blue';
export const navigationDefault = navigation => {
  return {
    headerStyle: {
      // ...CTStyle.header,!!!!!!!!!!!!!!!!!!!!!!!!!
      backgroundColor: 'rgb(18,57,85)',
      height: rwd(50),
      marginTop: SAFEAREA_TOP,
    },
    headerTintColor: {
      color: 'rgb(109,16,142)',
    }, //CTStyle.header.color, // !!!!!!!!!!!!! 有作用

    titleStyle: {
      // textAligns: 'center'
      // size: rwd(30),
      color: 'white',
    },
    headerTitleStyle: {
      flexShrink: 1,
      width: '100%',
      color: 'white', //!!!!!!!!!!!!
      fontSize: rwd(14), // 標題字體設定
      // textAlign: 'center',
      // alignSelf: 'center'
    },
    // headerBackStyle: {
    //   size: rwd(27),
    // },
    headerBackTitleStyle: {
      // color: CTStyle.header.backgroundColor,
      // color: 'red',
    },
    // headerTruncatedBackTitle: 'Nah', // <-- set back button text
    headerLeft: (
      <T.BarItem
        name="angle-left"
        color="white"
        onPress={() => T.NavigationService.goBack()}
      />
    ),

    // ) : null,
    // headerTitle: <T.Icon />, // !!! work!
    //
    // headerBackButton: <T.Icon />,
  };
};

export const hideTabbarOptions = ({navigation}) => {
  let tabBarVisible = true;
  // if (navigation.state.index > 0) {
  //   tabBarVisible = false
  // }
  return {
    tabBarVisible,
  };
};

export const modalOptions = {
  mode: 'modal',
  tabBarVisible: false,
  headerMode: 'none', // This ensures we don't get two top bars.
  // defaultNavigationOptions: navigationDefault,
};
