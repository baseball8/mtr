import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {ApplicationProvider, Layout} from 'react-native-ui-kitten';

import DropdownAlert from 'react-native-dropdownalert';

import * as T from 'ct-ui-kit';
import * as R from './src';
window.T = T;
window.R = R;
console.disableYellowBox = true;

// import * as Stacks from './';
import {Root} from './src/Stacks/Root';

const AppContainer = createAppContainer(Root);

let _navigation;
export class App extends React.PureComponent {
  state = {
    data: null,
    mounted: false,
  };

  componentDidMount() {
    _trace('App');
    this.mounted = true;
    _navigation = this.props.navigation;
    this.initStateData(() => {
      this.autoRun();
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.navigation !== this.props.navigation)
      _navigation = this.props.navigation;
  }

  render() {
    return (
      <>
        <DropdownAlert
          ref={ref => (window.dropdown = ref)}
          errorColor="#B95858"
          messageNumOfLines={10}
          zIndex={1000000}
          onClose={data => onDropdownClosed()}
        />

        <AppContainer
          ref={nav => {
            this.navigator = nav;
            T.NavigationService.setTopLevelNavigator(nav);
          }}
        />
        <T.Modal ref={c => (window.popup = c)} />
        <T.Modal ref={c => (window.popup1 = c)} position="top" />
      </>
    );
  }

  initStateData = onComplete => {
    let {data} = this.props;
    this.mounted &&
      this.setState({data}, () => {
        onComplete && onComplete();
      });
  };
  componentWillUnmount() {
    this.mounted = false;
  }
  autoRun = () => {};
}
var styles = StyleSheet.create({});

export default App;

window.alert = (message, type, onDropdownClosed) => {
  prompt(message, type, onDropdownClosed);
};

// type: success, warn, info, error
window.prompt = (message = 'HI!', type, onDropdownClosed) => {
  let title = {error: 'Error'}[type] || '';
  let _type = type || 'success';
  if (onDropdownClosed) {
    window.onDropdownClosed = onDropdownClosed;
  } else {
    window.onDropdownClosed = () => {};
  }
  // console.log(message, title)
  dropdown.alertWithType(_type, title, message);
};

window.__warning__ = (message, type = 'error', onDropdownClosed) => {
  prompt(message, type, onDropdownClosed);
};
