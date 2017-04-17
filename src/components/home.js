import React, {Component} from 'react';
import {View, TouchableNativeFeedback, PermissionsAndroid} from "react-native";
import {Header, Left, Body, Right, Icon, Button, Title} from "native-base";
import MapView from 'react-native-maps';
import * as Animate from "react-native-animatable";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                console.warn(JSON.stringify(initialPosition, null, 4));
            },
            (error) => {
                console.log(error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        return (
            <View style={{
              flex: 1
            }}>
                <Header>
                    <TouchableNativeFeedback>
                        <Left>
                            <Icon name="md-menu" style={{
                            color: "#fff"
                        }}/>
                        </Left>
                    </TouchableNativeFeedback>
                    <Body>
                    <Title> Home </Title>
                    </Body>
                    <Right>

                    </Right>

                </Header>
                <View style={{flex: 0.5}}>
                    <MapView
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                        initialRegion={{
                          latitude: 37.78825,
                          longitude: -122.4324,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View style={{
                  flex: 0.5
                }}>
                </View>
            </View>
        );
    }
}
