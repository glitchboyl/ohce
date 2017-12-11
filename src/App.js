import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Oche from './components/oche';
import Styles from './assets/stylesheet';

export default class App extends Component < {} > {
  render() {
    return (
      <View style={Styles.app}>
        <Oche></Oche>
      </View>
    );
  }
}