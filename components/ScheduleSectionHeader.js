import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScheduleSectionHeader extends React.Component {
  render() {
    const {children} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 16,
  },
  title: {
    color: '#535353',
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '500',
  }
});
