import React from 'react';
import {StyleSheet} from 'react-native';

let _this, _navigation;
export class SettingScreen extends React.PureComponent {
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
    log(data, 'data in SettingScreen render() ');
    return (
      <T.Screen>
        <T.Field title="email" />
        <T.Field title="顯示名稱" />
        <T.Field title="修改密碼" />
        <T.Button
          title="確認修改"
          onPress={() => T.NavigationService.goBack()}
        />
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
