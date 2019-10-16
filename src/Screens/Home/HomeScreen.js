import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
let _this, _navigation;
export class HomeScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state?.params?.title || 'HomeScreen',
      headerLeft: null,
      headerRight: (
        <T.Icon
          iconSize={20}
          color="black"
          onPress={() => navigateTo(_navigation, 'ChooseScreen')}
        />
      ),
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

  medicationItem = ({item, index}) => {
    return <T.Label text="藥事清單" />;
  };

  thingsItem = ({item, index}) => {
    return <T.Label text="要事清單" />;
  };

  render() {
    let {data} = this.state;
    // if (!data) return null
    log(data, 'data in HomeScreen render() ');
    return (
      <T.Screen>
        <Calendar />
        <T.Screen scrollable={true} backgroundColor="white">
          <T.List data="222222222" renderItem={this.medicationItem} />
        </T.Screen>

        <T.Space />
        <T.Screen scrollable={true} backgroundColor="white">
          <T.List data="111" renderItem={this.thingsItem} />
        </T.Screen>
      </T.Screen>
    );
  }

  initStateData = onComplete => {
    if (_navigation.state?.params) {
      let {data} = _navigation.state?.params;
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
