/// <reference types="react" />
import { BottomTabBarProps } from '../types';
declare type Props = BottomTabBarProps & {
    activeTintColor?: string;
    inactiveTintColor?: string;
    onLayout?: any;
};
export default function BottomTabBar({ state, navigation, descriptors, activeBackgroundColor, activeTintColor, adaptive, allowFontScaling, inactiveBackgroundColor, inactiveTintColor, keyboardHidesTabBar, labelPosition, labelStyle, onLayout, showIcon, showLabel, style, tabStyle, }: Props): JSX.Element;
export {};
