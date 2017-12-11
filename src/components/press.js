import React, {Component} from 'react';
import {View, Image, TouchableHighlight, Platform, PermissionsAndroid} from 'react-native';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Sound from 'react-native-sound';
import Styles from '../assets/stylesheet';
import Images from '../assets/images';

export default class Press extends Component {
    constructor() {
        super();
        this.state = {
            speaking: false,
            audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
            hasPermission: void 0, //是否获取权限
        };
    }
    checkPermission = () => {
        if (Platform.OS !== 'android') {
            return Promise.resolve(true);
        }

        const rationale = {
            'title': '获取录音权限',
            'message': 'ohcE正请求获取麦克风权限, 是否准许'
        };

        return PermissionsAndroid
            .request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
            .then((result) => {
                return (result === true || PermissionsAndroid.RESULTS.GRANTED)
            })
    }
    prepare = (audioPath) => {
        AudioRecorder.prepareRecordingAtPath(audioPath, {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low", //录音质量
            AudioEncoding: "aac", //录音格式
            AudioEncodingBitRate: 32000 //比特率
        });
    }
    record = async() => {
        if (!this.state.hasPermission) {
            alert('没有获取录音权限!');
            return;
        }
        this.prepare(this.state.audioPath);
        await AudioRecorder.startRecording();
        this.setState({speaking: true});
    }
    pause = async() => {
        await AudioRecorder.stopRecording();
        this.setState({speaking: false});
        let sound = new Sound(this.state.audioPath, '', (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            }
            sound.play((success) => {
                if (success) {
                    console.log('success');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        });
    }
    componentDidMount() {
        this
            .checkPermission()
            .then((hasPermission) => {
                this.setState({hasPermission});
                if (!hasPermission) 
                    return;
                }
            )
    }
    render() {
        return (
            <TouchableHighlight
                style={[
                Styles.pressShadow, this.state.speaking
                    ? {
                        top: 283,
                        height: 122,
                        elevation: 3
                    }
                    : {
                        top: 280,
                        height: 125,
                        elevation: 5
                    }
            ]}
                onPressIn={this.record}
                onPressOut={this.pause}
                underlayColor="#194C80"
                activeOpacity={1}>
                <View
                    style={[
                    Styles.press, {
                        backgroundColor: this.state.speaking
                            ? '#29749E'
                            : '#2B7CA4'
                    }
                ]}>
                    <Image source={Images.microphoneIcon} style={Styles.pressIcon}></Image>
                </View>
            </TouchableHighlight>
        )
    }
}