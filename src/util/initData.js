import { AsyncStorage } from 'react-native';

export function initUser() {
    AsyncStorage.getItem("user", (err, user) => {
        if(err) {

        }
    })
}