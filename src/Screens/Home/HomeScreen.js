import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';

export class HomeScreen extends React.PureComponent {
  state = {
<<<<<<< HEAD
    data: null,
    mounted: false,
=======
>>>>>>> b34e11cc59fb5077e8b576fea6b259deed2fce34
    items: {},
  };

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={'2019-10-18'}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems = day => {
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
    return (
      <View style={[styles.item, {height: item.height}]}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  renderEmptyDate = () => {
    return (
<<<<<<< HEAD
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
=======
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
>>>>>>> b34e11cc59fb5077e8b576fea6b259deed2fce34
    );
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  timeToString = time => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
<<<<<<< HEAD
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
=======
}

const styles = StyleSheet.create({
>>>>>>> b34e11cc59fb5077e8b576fea6b259deed2fce34
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
