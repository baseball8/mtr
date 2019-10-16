import React from 'react';
import {StyleSheet} from 'react-native';

let _this, _navigation;
export class ChooseScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params?.title || 'ChooseScreen',
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
    log(data, 'data in ChooseScreen render() ');
    return (
      <T.Screen>
        {/* <T.List /> */}
        {/* <T.Label text="ChooseScreen Screen" /> */}
        <T.Center>
          <T.Button
            title="藥事"
            onPress={() => navigateTo(_navigation, 'MedicationFormScreen')}
          />
          <T.Space />
          <T.Space />
          <T.Button
            title="是事"
            onPress={() => navigateTo(_navigation, 'ThingsFormScreen')}
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
  autoRun = () => {};
}
var styles = StyleSheet.create({});
