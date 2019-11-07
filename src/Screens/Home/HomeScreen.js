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
    items: {},
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
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
      />
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

  loadItems = day => {
    log('day', day);
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        log('day.timestamp', day.timestamp);
        log('i', i);
        log('time', time);
        const strTime = this.timeToString(time);
        log('strTime', strTime);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  };

  renderItem = item => {
    log('item', item);
    return (
      <T.View backgroundColor="white" borderRadius={5} height={50} padding={10}>
        <T.Grid layout="row">
          <T.Grid flex={3}>
            <T.Label>胃藥</T.Label>
          </T.Grid>
          <T.Grid flex={1} layout="row">
            <T.Icon name="comment" iconSets="FontAwesome" />

            <T.Icon name="check" onPress={() => alert(1111)} />
          </T.Grid>
        </T.Grid>
      </T.View>
    );
  };
  renderEmptyDate = () => {
    let {data} = this.state;
    // if (!data) return null
    log(data, 'data in HomeScreen render() ');
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  timeToString = time => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
}
var styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
