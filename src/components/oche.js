import React, {Component} from 'react';
import {View} from 'react-native';
import Hole from './hole';
import Press from './press';
import Styles from '../assets/stylesheet';

export default class ohcE extends Component < {} > {
    getHoles() {
        let holes = [];
        for (let i = 0; i < 50; i++) {
            let line = 1;
            while (i >= line * 10) {
                line += 1;
            }
            let nth = Math.abs(line * 10 - i - 10);
            holes.push(
                <Hole left={nth * 31} top={line * 30} key={`hole_${i}`}></Hole>
            )
        }
        return holes;
    }
    render() {
        const holes = this.getHoles();
        return (
            <View style={Styles.container}>
                <View style={Styles.holesContainer}>
                    {holes}
                </View>
                <Press></Press>
            </View>
        );
    }
}