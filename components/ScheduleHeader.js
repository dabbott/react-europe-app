import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ToggleButton } from './'

export default class ScheduleHeader extends React.Component {
  render() {
    const {items, value, onChange} = this.props
    const width = Dimensions.get('window').width

    return (
      <Image 
        style={[styles.image, {width}]}
        source={require('../assets/paris.png')}
      >
        <Image 
          style={[styles.logo]}
          source={require('../assets/react-logo.png')}
        />
        <Text style={styles.title}>
          React Europe
        </Text>
        <ToggleButton 
          items={items}
          value={value}
          onChange={onChange}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
  },
  logo: {
    marginBottom: 10,
  },
  title: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 30,
    marginBottom: 10,
  }
});
