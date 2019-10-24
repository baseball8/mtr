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
      <T.Screen>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems}
          selected={'2019-10-23'}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
          rowHasChanged={this.rowHasChanged}
        />
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

  loadItems = day => {
    log('day', day);
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
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
    log('items', this.state.items);
    log('item', item);
    return (
      <T.Screen style={[styles.item, {height: item.height}]}>
        <T.Label>{item.name}</T.Label>
      </T.Screen>
    );
  };
  renderEmptyDate = () => {
    let {data} = this.state;
    // if (!data) return null
    log(data, 'data in HomeScreen render() ');
    return (
      <T.Screen style={styles.emptyDate}>
        <T.Label>This is empty date!</T.Label>
      </T.Screen>
    );
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
