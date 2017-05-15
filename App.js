import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Schedule, EventDetails } from './containers'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Schedule />*/}
        <EventDetails />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});
