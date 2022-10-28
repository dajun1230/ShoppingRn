
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
