import React from 'react';
import {StyleSheet} from 'react-native';

let _this, _navigation;
export class SplashScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params?.title || '預設標題',
    };
  };
  state = {
    data: null,
    mounted: false,
  };

  componentDidMount() {
    _trace();
    this.mounted = true;
    _this = this;
    _navigation = this.props.navigation;
    log(_navigation, '_navigation - in ');
    this.initStateData(() => {
      this.autoRun();
    });
    this.login();
  }

  login = () => {
    log(deviceInfo(), 'deviceInfo()');
    delayed(() => {
      _navigation.navigate('AuthStack');
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.navigation !== this.props.navigation)
      _navigation = this.props.navigation;
  }

  render() {
    return (
      <T.Screen safeAreaDisabled backgroundColor="rgb(4,63,106)">
        <T.Center>
          <T.Label text="SplashScreen" borderWidth={1} />
        </T.Center>
      </T.Screen>
    );
  }

  initStateData = onComplete => {
    if (_navigation.state.params) {
      let {data} = _navigation.state.params;
      // _navigation.setParams({ title: '改為新標題' })
      this.mounted &&
        this.setState({data}, () => {
          onComplete && onComplete();
        });
    } else {
      onComplete && onComplete();
    }
  };
  componentWillUnmount() {
    this.mounted = false;
  }
  autoRun = () => {};
}
var styles = StyleSheet.create({});
