/** @format */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

import Reactotron from 'reactotron-react-native';

console.tron = Reactotron
.configure()
.useReactNative()
.connect()

AppRegistry.registerComponent(appName, () => App);
