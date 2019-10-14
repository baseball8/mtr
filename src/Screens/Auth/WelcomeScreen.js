import React from 'react';
import {StyleSheet} from 'react-native';

let _this, _navigation;
export class WelcomeScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params?.title || '預設標題',
      headerLeft: null,
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
    this.initStateData(() => {
      this.autoRun();
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.navigation !== this.props.navigation)
      _navigation = this.props.navigation;
  }

  render() {
    let {data} = this.state;
    // if (!data) return null
    log(data, 'data in WelcomeScreen render() ');
    return (
      <T.Screen safeAreaDisabled backgroundColor="rgba(16,71,153,.72)">
        <T.Center>
          <T.Label text="WelcomeScreen Screen" />

          <T.Button
            title="SignUp"
            onPress={() => _navigation.navigate('AppStack')}
          />
          <T.Button
            title="Login"
            onPress={() => _navigation.navigate('AppStack')}
          />
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
  autoRun = () => {
    if (__DEV__) {
      delayed(() => {
        _navigation.navigate('AppStack');
      });
    }
  };
}
var styles = StyleSheet.create({});
