import React, {Component} from 'react';
import {View, TouchableNativeFeedback, PermissionsAndroid} from "react-native";
import {Header, Left, Body, Right, Icon, Button, Title, Drawer, Fab} from "native-base";
import MapView from 'react-native-maps';
import SideBar from "./sidebar";
import * as Animate from "react-native-animatable";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.fabRef = null;
        this._drawer = null;
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
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
                <Drawer
                    ref={(ref) => { this._drawer = ref; }}
                    content={
                        <SideBar navigator={this.props.navigator}/>
                    }
                    onClose={() => this._drawer._root.close()}
                >
                    <Header>
                        <TouchableNativeFeedback onPress={() => this._drawer._root.open()}>
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
                    <Animate.View animation="bounceIn" ref={(ref) => this.fabRef = ref} style={{ height: 100, width: 100, position: "absolute", right: 0, bottom: 0}}>
                        <Fab direction="down" position="bottomRight" onPress={() => this.fabRef.bounceIn(800)}>
                            <Icon name="md-locate"/>
                        </Fab>
                    </Animate.View>
                </Drawer>
            </View>
        );
    }
}
