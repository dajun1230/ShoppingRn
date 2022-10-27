import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

export function navigate(name: never, params?: never) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export function goBack() {
  navigationRef.current && navigationRef.current.goBack();
}
export function navDispatch(params: any = {}) {
  navigationRef.current && navigationRef.current.dispatch(params);
}
