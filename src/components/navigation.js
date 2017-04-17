import React,{Component} from 'react';
import { Navigator, View, AsyncStorage } from 'react-native';
import Home from "./home";

class Navigation extends Component {
    constructor(props) {
      super(props);
      this._navigator = null;
      this.state = {
        route: {}
      }
    }

    componentWillMount() {
    }

    renderScene(route, navigator) {
      switch (route.id) {
        case "home":
          return (
            <Home navigator={navigator}/>
          )
          break;
      }
    }

    onWillFocus(route) {
        this.setState({route});
    }

    render() {
        return (
          <View style={{
              flex: 1
            }}>
            <Navigator
              ref={(ref) => this._navigator = ref}
              initialRoute={{id: 'home', index: 0}}
              renderScene={this.renderScene.bind(this)}
              onWillFocus={this.onWillFocus.bind(this)}
              />
          </View>
        );
    }
}

export default Navigation;
