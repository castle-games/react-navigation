/// <reference types="react" />
import { DefaultNavigatorOptions, TabRouterOptions, TabNavigationState } from '@react-navigation/native';
import { BottomTabNavigationConfig, BottomTabNavigationOptions, BottomTabNavigationEventMap } from '../types';
declare type Props = DefaultNavigatorOptions<BottomTabNavigationOptions> & TabRouterOptions & BottomTabNavigationConfig;
declare function BottomTabNavigator({ initialRouteName, backBehavior, children, screenOptions, ...rest }: Props): JSX.Element;
declare const _default: <ParamList extends Record<string, object | undefined>>() => import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator>;
export default _default;
