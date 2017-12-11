import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from '../assets/stylesheet';

export default class Hole extends Component < {} > {
    constructor(props) {
        super(props);
    }
    render() {
        const {left, top} = this.props;
        return (
            <View
                style={[
                Styles.holeShadow, {
                    left,
                    top
                }
            ]}>
                <View style={Styles.hole}></View>
            </View>
        )
    }
}