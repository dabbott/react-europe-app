import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { ScheduleHeader, ScheduleSectionHeader, ScheduleRow } from '../components'

// const response = require('./data.json')
// console.log(response.data.events[0].schedule)

const DATA = {
  THURSDAY: [ // homogenous rendering between sections
    {data: [{title: 'First presentation', description: 'Hello', key: 'a'}], title: '8:30 AM', key: 'a'},
    {data: [{title: 'Second presentation', key: 'b'}], title: '10:30 AM', key: 'b'},
  ],
  FRIDAY: [ // homogenous rendering between sections
    {data: [{title: 'Third presentation', description: 'Hello', key: 'a'}], title: '9:30 AM', key: 'a'},
    {data: [{title: 'Fourth presentation', key: 'b'}], title: '11:30 AM', key: 'b'},
  ],
}

const DAYS = ['THURSDAY', 'FRIDAY']

export default class Schedule extends React.Component {
  state = {
    selectedDay: 'THURSDAY'
  }

  handleChangeDay = (selectedDay) => {
    this.setState({selectedDay})
  }

  render() {
    const {selectedDay} = this.state

    return (
      <View style={styles.container}>
        <ScheduleHeader 
          items={DAYS}
          value={selectedDay}
          onChange={this.handleChangeDay}
        />
        <SectionList
          renderItem={({item}) => (
            <ScheduleRow
              title={item.title}
              subtitle={item.description}
              image={item.image}
            />
          )}
          renderSectionHeader={({section}) => (
            <ScheduleSectionHeader>
              {section.title}
            </ScheduleSectionHeader>
          )}
          sections={DATA[selectedDay]}
        />
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
