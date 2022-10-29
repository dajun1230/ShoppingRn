
import 'react-native-gesture-handler';
import dayjs from 'dayjs';
import React from 'react';
import { Provider } from 'react-redux';
import { setSiblingWrapper } from 'react-native-root-siblings';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import store from '../store';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

setSiblingWrapper((sibling) => (<Provider store={store}>{sibling}</Provider>));

// import { LogBox } from 'react-native';
// const IGNORED_WARNINGS = [
//   '`-[RCTRootView cancelTouches]`',
//   'Please update the following components: AnimatedComponent',
//   'react-native-update',
//   'Require cycle',
// ];
// const oldConsoleWarn = console.warn;
// console.warn = (...args: any[]) => {
//   if (
//     typeof args[0] === 'string' &&
//     IGNORED_WARNINGS.some((ignoredWarning) =>
//       args[0].startsWith(ignoredWarning),
//     )
//   ) {
//     return;
//   }
//   return oldConsoleWarn(...args);
// };
// LogBox.ignoreLogs(IGNORED_WARNINGS);
