import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ScheduleRow extends React.Component {
  render() {
    const {title, subtitle, image} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          {!!subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
        <Image 
          style={styles.image}
          source={image} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    color: '#535353',
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '500',
  },
  subtitle: {
    color: '#565656',
    backgroundColor: 'transparent',
  },
  image: {
    flex: 0,
    width: 34,
    height: 34,
    resizeMode: 'cover',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 17,
  },
});
