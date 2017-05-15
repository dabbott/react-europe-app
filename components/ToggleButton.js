import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class ScheduleHeader extends React.Component {
  static defaultProps = {
    items: [],
    value: null,
    onChange: () => {},
  }

  renderButton = (item, i, list) => {
    const {onChange, value} = this.props

    const dynamicStyles = {
      marginRight: i !== list.length ? 10 : 0,
      backgroundColor: item === value ? '#3140DC' : '#2E3571',
    }
    
    return (
      <TouchableOpacity 
        key={item}
        style={[styles.button, dynamicStyles]}
        onPress={onChange.bind(this, item)}
      >
        <Text style={styles.buttonTitle}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        {items.map(this.renderButton)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3140DC',
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 13,
  }
});
