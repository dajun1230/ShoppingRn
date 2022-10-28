import './src/utils/configure';
import {AppRegistry} from 'react-native';
import App from './src/navigator/AppNavigators';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
